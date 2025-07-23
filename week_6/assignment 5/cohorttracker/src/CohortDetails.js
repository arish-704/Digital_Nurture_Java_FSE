import React from 'react';
// 8. Import the CSS Module
import styles from './CohortDetails.module.css';

const CohortDetails = (props) => {
  // 10. Define the style for the h3 element conditionally
  const headerStyle = {
    color: props.status === 'Ongoing' ? 'green' : 'blue',
  };

  return (
    // 9. Apply the 'box' class to the container div
    <div className={styles.box}>
      <h3 style={headerStyle}>{props.name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{props.started}</dd>

        <dt>Current Status</dt>
        <dd>{props.status}</dd>

        <dt>Coach</dt>
        <dd>{props.coach}</dd>

        <dt>Trainer</dt>
        <dd>{props.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
