/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { ScrollToTop } from '../../components';

export default function Product() {
  return (
    <>
      <Header />
      <Navbar />
      <section
        className="store-breadcrumbs"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Products
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <div className="filter border">
                <article className="card-group-item">
                  <header className="card-header">
                    <h6 className="title">Brands </h6>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                      <form>
                        <label className="form-check">
                          <input className="form-check-input" type="checkbox" value="" />
                          <span className="form-check-label">
                            Mitsubishi
                          </span>
                        </label>
                        <label className="form-check">
                          <input className="form-check-input" type="checkbox" value="" />
                          <span className="form-check-label">
                            Toyota
                          </span>
                        </label>
                        <label className="form-check">
                          <input className="form-check-input" type="checkbox" value="" />
                          <span className="form-check-label">
                            Another Brand
                          </span>
                        </label>
                      </form>
                    </div>
                  </div>
                </article>
                <article className="card-group-item">
                  <header className="card-header">
                    <h6 className="title">Choose type </h6>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                      <label className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadio" value="" />
                        <span className="form-check-label">
                          First hand items
                        </span>
                      </label>
                      <label className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadio" value="" />
                        <span className="form-check-label">
                          Brand new items
                        </span>
                      </label>
                      <label className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadio" value="" />
                        <span className="form-check-label">
                          Some other option
                        </span>
                      </label>
                    </div>
                  </div>
                </article>
                <article className="card-group-item">
                  <header className="card-header">
                    <h6 className="title">Range input </h6>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Min</label>
                          <input type="number" className="form-control" id="inputEmail4" placeholder="Rp 0" />
                        </div>
                        <div className="form-group col-md-6 text-right">
                          <label>Max</label>
                          <input type="number" className="form-control" placeholder="99.000.000" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="list-product">
                <div className="row">
                  <div className="product-card col-8 col-sm-5 col-md-4 col-lg-3">
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
                        <div className="products-text">Barang 1</div>
                        <div className="products-price">Rp. 200.000</div>
                      </a>
                    </Link>
                  </div>
                  <div className="product-card col-8 col-sm-5 col-md-4 col-lg-3">
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
                        <div className="products-text">Barang 1</div>
                        <div className="products-price">Rp. 200.000</div>
                      </a>
                    </Link>
                  </div>
                  <div className="product-card col-8 col-sm-5 col-md-4 col-lg-3">
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
                        <div className="products-text">Barang 1</div>
                        <div className="products-price">Rp. 200.000</div>
                      </a>
                    </Link>
                  </div>
                  <div className="product-card col-8 col-sm-5 col-md-4 col-lg-3">
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
                        <div className="products-text">Barang 1</div>
                        <div className="products-price">Rp. 200.000</div>
                      </a>
                    </Link>
                  </div>
                  <div className="product-card col-8 col-sm-5 col-md-4 col-lg-3">
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
                        <div className="products-text">Barang 1</div>
                        <div className="products-price">Rp. 200.000</div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />

      <footer
        style={{
          backgroundColor: '#f0f1fa',
        }}
      >
        <div className="container pt-5 pb-3">
          <div
            className="row justify content-center"
            style={{ color: '#2d3170' }}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-10 col-lg-3">
                  <img
                    src="/images/co_vendor_fix.png"
                    alt="Logo"
                    width="200px"
                    className="mb-5"
                  />
                </div>
                <div className="col-12 col-lg-3 col-sm-6 mb-4">
                  <h5>Co-Vendor</h5>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        About Co-vendor
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        Press Release
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        Career
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        FAQ (Frequently Ask Question)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-3 col-sm-6 mb-4">
                  <h5>Guide and Help</h5>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        Covendor Care
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        How To
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        Terms and Condition
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-3 col-sm-6 mb-4">
                  <h5>Customer Care</h5>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-2">
                      <a
                        href="https://wa.me/+6285231649227"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="WhatsApp"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        <i className="fab fa-whatsapp" />
                        &nbsp;+62 852-3164-9227
                      </a>
                    </li>
                    <li className="mb-2 text-secondary">
                      support@covendor.com
                    </li>
                    <li className="mb-2">
                      <a
                        href="/#"
                        className="text-secondary"
                        style={{ textDecoration: 'none' }}
                      >
                        Send Message
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ backgroundColor: '#2d3170' }}>
          <div
            className="
            row
            border-top
            justify-content-center
            align-items-center
            pt-4
            pb-4
          "
          >
            <div className="col-auto text-white-50">
              © 2021 Copyrights PT Covendor.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
