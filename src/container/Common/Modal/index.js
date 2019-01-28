import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import {
  FullShadow,
  SignupArea,
  InputArea
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
      children
    } = this.props;

    return ReactDOM.createPortal(
      <Fragment>
        <FullShadow
          onClick={this.isControlled('showModal') ? onToggleModal : ''} 
        />
        <SignupArea>
          <InputArea>
            {children}
          </InputArea>
        </SignupArea>
      </Fragment>
    , modalRoot);
  }

}

export default Modal;
