import React from 'react';
import { connect } from 'dva';
import ProductList from '../../components/ProductList';
import MainLayout from '../../components/MainLayout/MainLayout';
import styles from './Products.css';

const Products = ({ dispatch, products, location }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <h2>商品列表</h2>
        <ProductList onDelete={handleDelete} products={products} />
      </div>
    </MainLayout>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
