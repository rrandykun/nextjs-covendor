/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductItemProps {
  productName: string;
  productPrice: string;
}

export default function ProductItem(props: ProductItemProps) {
  const { productName, productPrice } = props;
  return (
    <>
      <div
        className="col-6 col-md-4 col-lg-2 products-card"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Link href="/products/detail">
          <a className="component-products d-block">
            <div className="products-thumbnail">
              <Image
                className="products-image"
                src="https://via.placeholder.com/150"
                layout="fill"
                alt="thumbnail"
              />
            </div>
            <div className="products-text">{productName}</div>
            <div className="products-price">{productPrice}</div>
          </a>
        </Link>
      </div>
    </>
  );
}
