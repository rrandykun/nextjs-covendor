/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import { useEffect } from 'react';
import AOS from 'aos';
import { ScrollToTop } from '../components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SectionCari from '../components/SectionCari';
import Products from '../components/Products';

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

        <SectionCari />
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
        <Products />
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
