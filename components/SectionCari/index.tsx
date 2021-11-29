/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Categories from '../Categories';

export default function SectionCari() {
  const [categoryList, setCategoryList] = useState([] as any[]);
  useEffect(() => {
    (async () => {
      await axios
        .get('https://api.co-vendor.com/categories')
        .then((response) => {
          // console.log('data: ', response.data);
          setCategoryList(response.data.filter((lvl: any) => lvl.level === 0));
          // console.log(level);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);
  return (
    <>
      <section className="pencarian">
        <div className="container">
          <div className="row shadow rounded">
            <div className="col-4 p-3" style={{ backgroundColor: '#f0f1fa' }}>
              <ul className="list-unstyled">
                {categoryList.map((item) => {
                  return (
                    <Categories
                      key={item.id}
                      name={item.category_name}
                      id={item.id}
                      icon={item.icon}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="col-8 p-3" style={{ backgroundColor: '#fbfbff' }}>
              <a href="/#" style={{ textDecoration: 'none' }}>
                Transaction History
              </a>
              <form className="pt-4">
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Part Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Part number, name"
                  />
                </div>
                Filter
                <div className="form-group row pl-3 mt-2">
                  <label htmlFor="exampleFormControlSelect1" className="col-2">
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
                  <label htmlFor="exampleFormControlSelect1" className="col-2">
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
                  <label htmlFor="exampleFormControlSelect1" className="col-2">
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
                  <Link href="/products" passHref>
                    <button
                      id="search-button"
                      type="button"
                      className="btn btn-primary text-white ml-auto"
                    >
                      <i className="fa fa-search" />
                      Search
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
