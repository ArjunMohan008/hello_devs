import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-traingular'>Page Not Found</i>
      </h1>
      <p>Sorry, this page does not exit</p>
    </Fragment>
  );
};

export default NotFound;
