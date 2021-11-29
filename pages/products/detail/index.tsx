/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import { ScrollToTop } from '../../../components';

export default function Detail() {
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
                    Product Detail
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="store-gallery" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Image
                src="https://via.placeholder.com/300"
                width={300}
                height={300}
              />
            </div>
            <div className="col-8">
              <h3>Spare part Forklift Engine </h3>
              <p>
                Part No: SKU0006744
                <br />
                Brand : Mitsubishi
              </p>
              <hr />
              <div className="row">
                <div className="col-6">
                  <p>
                    <strong>Price </strong>
                    :
                    {' '}
                    <span className="text-danger">Rp. 100.000</span>
                    / unit
                    {' '}
                    <span className="text-black-50">(tax not included)</span>
                    <br />
                  </p>
                  <p>
                    <strong>Quantity </strong>
                    :
                  </p>
                  <div className="input-group plus-minus-input">
                    <div className="input-group-button">
                      <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                    <input
                      className="input-group-field"
                      type="number"
                      name="quantity"
                      value="0"
                    />
                    <div className="input-group-button">
                      <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <strong>Supplier </strong>
                  :
                  {' '}
                  CV. ABC
                  <br />
                  <strong>City </strong>
                  :
                  {' '}
                  Kota Malang
                  <br />
                  <strong>Stock </strong>
                  :
                  {' '}
                  100
                  <br />
                  <strong>Product Reference </strong>
                  :
                  {' '}
                  SKU0006900
                  <br />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <p>
                    <strong>Total </strong>
                    :
                    {' '}
                    <span className="text-danger">Rp. 100.000</span>
                  </p>
                </div>
                <div className="col-3">
                  <a
                    href="/#"
                    className="btn btn-outline-primary nav-link px-4"
                  >
                    Add to Cart
                  </a>
                </div>
                <div className="col-3">
                  <a
                    href="/#"
                    className="btn btn-primary nav-link px-4 text-white"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Description
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        M5250 built in modem 3G merupakan produk nirkabel 3G
                        terbaru dari TP-LINK. Hanya dengan memasukan kartu
                        simcard Anda ke belakang perangkat ini, maka Anda pun
                        sudah menciptakan hot-spot Anda sendiri. Dengan
                        kecepatan downloadn 21.6Mbps, dan kecepatan upload
                        hingga 5.76Mbps, M5250 mampu menyediakan wireless untuk
                        10 pengguna sekaligus. Dan di lengkapi oleh baterai
                        2000mAh yang tahan berjam-jam, menjadikan M5250 ini
                        cocok untuk Anda bawa bepergian kemanapun.Yang
                        membedakan antara produk ini dengan produk pendahulunya,
                        M5350 adalah pada tampilan layar LED nya.Pada M5350,
                        layar LED menampilkan Kekuatan signal, jenisjaringan,
                        status Wi-Fi, pesan, koneksi, baterai, jenis koneksi dan
                        statistik jaringan.Sedangkan pada M5250, layar LED hanya
                        menampilkan Status koneksi, baterai, dan status Wi-Fi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Specification
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        <strong>Dimensi Produk (p x l x t)</strong>
                        {' '}
                        (30 x 20 x 5 ) cm
                        <br />
                        <strong>Dimensi Kemasan (p x l x t)</strong>
                        {' '}
                        (35 x 10 x 10 ) cm
                        <br />
                        <strong>Berat Produk</strong>
                        {' '}
                        1 kg
                        <br />
                        <strong>Berat Kemasan</strong>
                        {' '}
                        1 kg
                        <br />
                        <strong>Model</strong>
                        {' '}
                        ADSL2+
                        <br />
                        <strong>Warna</strong>
                        {' '}
                        Hitam
                      </p>
                    </div>
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
