/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    (async () => {
      await axios.get('http://covendor-app.as.r.appspot.com/products', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          console.log('data: ', response);
        })
        .catch((error) => {
          console.log(error);
          console.log('haloo');
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
    </>
  );
}
