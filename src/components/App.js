import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { AppWrapper } from './App.styled';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    showModal: false,
    modalImageIndex: null,
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    try {
      const images = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        loading: false,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ loading: false });
    }
  };

  handleSubmit = newQuery => {
    this.setState(
      {
        query: newQuery,
        page: 1,
        images: [],
      },
      () => {
        this.fetchImages();
      }
    );
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages();
      }
    );
  };

  openModal = imageIndex => {
    this.setState({
      showModal: true,
      modalImageIndex: imageIndex,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, loading, showModal, modalImageIndex } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {images.map((image, index) => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => this.openModal(index)}
            />
          ))}
        </ImageGallery>
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.loadMore}>Load more</Button>
        )}
        {showModal && modalImageIndex !== null && (
          <Modal
            onClose={this.closeModal}
            src={images[modalImageIndex].largeImageURL}
            alt={images[modalImageIndex].tags}
          />
        )}
      </AppWrapper>
    );
  }
}
