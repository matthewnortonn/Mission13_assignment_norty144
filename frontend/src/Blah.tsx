import React from 'react';
import styles from './Blah.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-2"> </div>
        <section className="col align-self-center text-start">
          <img src="./JoelHiltonHeadshot (1).jpg" alt="joel" />
        </section>
      </div>

      <br />

      <div className="row">
        <div className="col-2"></div>
        <div className="col align-self-center text-start">
          <h3 className={styles.h1}>{props.saying1}</h3>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
