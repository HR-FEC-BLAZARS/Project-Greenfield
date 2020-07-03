import React, { Component } from 'react';
import NewReviewModal from './NewReviewModal.jsx';
import TriggerButton from './TriggerButton.jsx';

class AddReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
    this.showModal = this.showModal.bind(this);
    this.toggleScrollLock = this.toggleScrollLock.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  showModal() {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  }

  toggleScrollLock() {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  closeModal() {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  }

  onClickOutside(event) {
    if (this.modal && this.modal.contains(event.target)) {
      return this.closeModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => {
            this.TriggerButton = n;
          }}
          triggerText={this.props.triggerText}
        />
        {this.state.isShown ? (
          <NewReviewModal
            onSubmit={this.props.onSubmit}
            // refer modal area
            modalRef={(n) => {
              this.modal = n;
            }}
            // refer close button
            buttonRef={(n) => {
              this.closeButton = n;
            }}
            closeModal={this.closeModal}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default AddReviewContainer;
