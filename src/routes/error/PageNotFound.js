import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/MainLayout/MainLayout';
import styles from './PageNotFound.css';

function PageNotFound({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <span>404</span>
      </div>
    </MainLayout>
  );
}

PageNotFound.propTypes = {
};

export default connect()(PageNotFound);
