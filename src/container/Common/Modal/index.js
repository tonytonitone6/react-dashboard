import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  FullShadow,
  SignupArea,
} from './styles';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {


  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  isControlled(prop) {
    return this.props[prop] !== undefined;
  }

  render() {
    const {
      onToggleModal,
    } = this.props;

    return ReactDOM.createPortal(
      <Fragment>
        <FullShadow
          onClick={this.isControlled('showModal') ? onToggleModal : ''} 
        />
        <SignupArea>

        </SignupArea>
      </Fragment>
    , modalRoot);
  }

}

export default Modal;
