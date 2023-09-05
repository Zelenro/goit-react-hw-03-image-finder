import React from 'react';

import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      className="loader"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Grid
        height="80"
        width="80"
        color="#3f51b5 "
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
