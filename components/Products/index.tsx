/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

export default function Products() {
  const [productList, setProductList] = useState([] as any[]);
  useEffect(() => {
    (async () => {
      await axios
        .get('https://13.213.212.135/products')
        .then((response) => {
          console.log('data: ', response.data);
          setProductList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <>
      <section className="store-new-products">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <h5>Products</h5>
            </div>
          </div>
          <div className="row">
            {productList.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  productNo={item.part_no}
                  productName={item.nama}
                  productPrice={item.price}
                />
              );
            })}
          </div>

          <div className="row justify-content-center">
            <div className="col-2" data-aos="fade-up">
              <a href="/#" className="btn btn-outline-primary nav-link">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
