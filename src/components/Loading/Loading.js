import React from 'react';
import loadingGif from '../../images/loading.gif';

const Loading = () => {
  return (
    <>
      <img src={loadingGif} alt="loading gif" width="250px" style={{ textAlign: 'center', margin: '0 auto' }} />
    </>
  );
}

export default Loading;