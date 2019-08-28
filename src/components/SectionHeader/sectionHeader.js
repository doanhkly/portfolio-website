import React from 'react';

import styles from './sectionHeader.module.scss';

export default props => (
    <div className={styles.header}>
         <h1>{props.children}</h1>
    </div>
)
    