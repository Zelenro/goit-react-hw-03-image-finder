import React, { Component } from 'react';
import { ModalWrapper, OverlayWrapper } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;

    return (
      <OverlayWrapper onClick={this.handleClick}>
        <ModalWrapper>
          <img src={src} alt={alt} />
        </ModalWrapper>
      </OverlayWrapper>
    );
  }
}
