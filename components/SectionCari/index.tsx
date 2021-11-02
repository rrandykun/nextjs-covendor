/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function SectionCari() {
  return (
    <>
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
    </>
  );
}
