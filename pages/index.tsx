/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import { useEffect } from 'react';
import AOS from 'aos';
import { ScrollToTop } from '../components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <div className="page-content page-home">
        {/* <!-- Space Iklan 1 --> */}
        <section className="store-carousel py-4">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12"
                data-aos="zoom-in"
                style={{ zIndex: 1 }}
              >
                <div
                  id="storeCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#storeCarousel"
                      data-slide-to="0"
                    />
                    <li data-target="#storeCarousel" data-slide-to="1" />
                    <li data-target="#storeCarousel" data-slide-to="2" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                        style={{ borderRadius: 15, height: 218 }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                        style={{ borderRadius: 15, height: 218 }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                        style={{ borderRadius: 15, height: 218 }}
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#storeCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#storeCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Space Iklan 1 --> */}

        {/* <!-- Pencarian --> */}
        <section className="pencarian">
          <div className="container">
            <div className="row shadow rounded">
              <div className="col-4 p-3" style={{ backgroundColor: '#f0f1fa' }}>
                <ul className="list-unstyled">
                  <li data-toggle="collapse" data-target="#test">
                    <span>
                      <i className="fa fa-tools text-success mr-1" />
                      <a href="/#" className="text-dark">
                        Forklift/ Material Handling
                      </a>
                    </span>
                    <ul className="collapse" id="test">
                      <li>Mitsubishi</li>
                      <li>Toyota</li>
                      <li>TCM</li>
                      <li>Caterpillar</li>
                    </ul>
                  </li>
                  <li data-toggle="collapse" data-target="#test2">
                    <span>
                      <i className="fa fa-cogs text-warning mr-1" />
                      <a href="/#" className="text-dark">
                        Construction Machinery
                      </a>
                    </span>
                    <ul className="collapse" id="test2">
                      <li>Komatsu</li>
                      <li>Caterpillar</li>
                    </ul>
                  </li>
                  <li data-toggle="collapse" data-target="#test3">
                    <span>
                      <i className="fa fa-industry text-info mr-1" />
                      <a href="/#" className="text-dark">
                        Industrial
                      </a>
                    </span>
                    <ul className="collapse" id="test3">
                      <li>Bearing</li>
                      <li>Belt</li>
                      <li>Filter</li>
                      <li>Seal</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-8 p-3" style={{ backgroundColor: '#fbfbff' }}>
                <a href="/#" style={{ textDecoration: 'none' }}>
                  Transaction History
                </a>
                <form className="pt-4">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Part Number
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Part number, name"
                    />
                  </div>
                  Filter
                  <div className="form-group row pl-3 mt-2">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="col-2"
                    >
                      Type
                    </label>
                    <select
                      className="ml-5 form-control col-3"
                      id="exampleFormControlSelect1"
                      style={{ width: 100 }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group row pl-3">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="col-2"
                    >
                      Brand
                    </label>
                    <select
                      className="ml-5 form-control col-3"
                      id="exampleFormControlSelect1"
                      style={{ width: 100 }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group row pl-3">
                    <label
                      htmlFor="exampleFormControlSelect1"
                      className="col-2"
                    >
                      Location
                    </label>
                    <select
                      className="ml-5 form-control col-3"
                      id="exampleFormControlSelect1"
                      style={{ width: 100 }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="input-group row">
                    <button
                      id="search-button"
                      type="button"
                      className="btn btn-primary text-white ml-auto"
                    >
                      <i className="fa fa-search" />
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Pencarian --> */}

        {/* <!-- Space Iklan 2 --> */}
        <section className="store-carousel py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12" data-aos="zoom-in">
                <div
                  id="storeCarousel2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#storeCarousel2"
                      data-slide-to="0"
                    />
                    <li data-target="#storeCarousel2" data-slide-to="1" />
                    <li data-target="#storeCarousel2" data-slide-to="2" />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                        style={{ borderRadius: 15, height: 218 }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                        style={{ borderRadius: 15, height: 218 }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                        style={{ borderRadius: 15, height: 218 }}
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#storeCarousel2"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#storeCarousel2"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Space Iklan 2 --> */}

        {/* <!-- Produk Baru --> */}
        <section className="store-new-products">
          <div className="container">
            <div className="row">
              <div className="col-6" data-aos="fade-up">
                <h5>New arrivals</h5>
              </div>
              <div className="col-6 text-right" data-aos="fade-up">
                <a href="/#" style={{ textDecoration: 'none' }}>
                  See More
                </a>
              </div>
            </div>
            <div className="row">
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url(\'images/products/1.jpg\')',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Spare part Forklift Engine
                  </div>
                  <div className="products-price">Rp 1.000.000</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url(/images/products/2.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Sparepart Forklift & Material Handling
                  </div>
                  <div className="products-price">Rp 1.000.000</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url(/images/products/3.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Sparepart Pompa Centrifugal
                  </div>
                  <div className="products-price">Rp 900.000</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/4.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    OEM Timing Belt Red Rubber 25 AT10 PAZ 40-45SHA
                  </div>
                  <div className="products-price">Rp 3.915.600</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/5.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">HYDRAULIC PARTS A10VS045</div>
                  <div className="products-price">Rp 30.915</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/6.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Optibelt Belt HVAC SK4 3V500
                  </div>
                  <div className="products-price">Rp 90.915</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Produk Baru --> */}

        <div className="hl container" />

        {/* <!-- Produk --> */}
        <section className="store-new-products">
          <div className="container">
            <div className="row">
              <div className="col-12" data-aos="fade-up">
                <h5>Products</h5>
              </div>
            </div>
            <div className="row">
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url(/images/products/1.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Spare part Forklift Engine
                  </div>
                  <div className="products-price">Rp 1.000.000</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url(/images/products/2.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Sparepart Forklift & Material Handling
                  </div>
                  <div className="products-price">Rp 1.000.000</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/3.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Sparepart Pompa Centrifugal
                  </div>
                  <div className="products-price">Rp 900.000</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/4.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    OEM Timing Belt Red Rubber 25 AT10 PAZ 40-45SHA
                  </div>
                  <div className="products-price">Rp 3.915.600</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/5.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">HYDRAULIC PARTS A10VS045</div>
                  <div className="products-price">Rp 30.915</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/6.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Optibelt Belt HVAC SK4 3V500
                  </div>
                  <div className="products-price">Rp 90.915</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/7.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">OEM Drive Belt 75x2108</div>
                  <div className="products-price">Rp 292.700</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-2 products-card"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <a href="details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: 'url("/images/products/8.jpg',
                      }}
                    />
                  </div>
                  <div className="products-text">
                    Ammerral Belt Cap Cute Ronchi 2 - 7 x 188 cm
                  </div>
                  <div className="products-price">Rp 277.400</div>
                </a>
              </div>
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
        {/* <!-- Produk --> */}
      </div>

      <ScrollToTop />

      <footer style={{ backgroundColor: '#f0f1fa' }}>
        <div className="container pt-5 pb-3">
          <div
            className="row justify content-center"
            style={{ color: '#2d3170' }}
          >
            <div className="col-12">
              <div className="row">
                <div className="col-10 col-lg-3">
                  <img
                    src="images/co_vendor_fix.png"
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
                        &nbsp;+62
                        852-3164-9227
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
