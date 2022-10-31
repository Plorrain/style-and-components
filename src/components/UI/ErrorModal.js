import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

function Backdrop(props) {
return <div className={classes.backdrop} onClick={props.onHandleError} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onHandleError}>Okay</Button>
          </footer>
        </Card>
  );
}

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onHandleError={props.onHandleError}
        />,
          document.getElementById('backdrop-root')
        )};
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onHandleError={props.onHandleError}
        />,
        document.getElementById('backdrop-root')
      )};
    </Fragment>
  );
}

export default ErrorModal;
