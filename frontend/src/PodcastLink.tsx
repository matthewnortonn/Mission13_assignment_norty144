import React from 'react';
//import styles from './Blah.module.css';

function PodLink(props: any) {
  return (
    <>
      <div>
        <h3 className="text-secondary">
          Check out the following link to listen to the best podcast ever about
          movies!
        </h3>
        <a href="https://baconsale.com" className="btn btn-primary">
          BaconSale
        </a>
      </div>
    </>
  );
}

export default PodLink;
