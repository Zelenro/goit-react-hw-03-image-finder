import React from 'react';
import {
  ImageGalleryItemImage,
  ImageGalleryItemWrapper,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <ImageGalleryItemWrapper onClick={onClick}>
      <ImageGalleryItemImage src={src} alt={alt} />
    </ImageGalleryItemWrapper>
  );
};
