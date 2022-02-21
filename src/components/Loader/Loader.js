import { createPortal } from 'react-dom';
import { Oval } from 'react-loader-spinner';
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Container } from './Loader.styled';

const loaderRoot = document.querySelector('#loader-root');

function Loader() {
  return createPortal(
    <Container>
      <Oval
        ariaLabel="loading-indicator"
        strokeWidth={5}
        color="red"
        secondaryColor="yellow"
        height={400}
        width={400}
      />
    </Container>,
    loaderRoot
  );
}

export default Loader;
