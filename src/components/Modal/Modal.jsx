import React from "react";
import propTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { MODAL_TYPES } from '../../helper/constants';

import './Modal.scss';

const MyModal = ({...props}) => {

  const { children, modalType, size, title, onHide, show, description } = props;

  if (modalType === MODAL_TYPES.ADD) {
    props.title = "ADD MOVIE";
  } else if (modalType === MODAL_TYPES.EDIT) {
    props.title = "EDIT MOVIE";
  } else if (modalType === MODAL_TYPES.DELETE) {
    props.title = "DELETE MOVIE";
  }

  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {children}
      </Modal.Body>
    </Modal>
  );
}

MyModal.propTypes = {
  props: propTypes.shape({
    size: propTypes.string,
    modalType: propTypes.string,
    title: propTypes.string,
    onHide: propTypes.func,
    show: propTypes.bool,
    description: propTypes.string
  })
}

export default MyModal;