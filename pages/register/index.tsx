/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Register() {
  const [provList, setProvList] = useState([] as any[]);
  useEffect(() => {
    (async () => {
      await axios
        .get('https://api.co-vendor.com/address/provinces')
        .then((response) => {
          console.log('data: ', response.data);
          setProvList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);
  return (
    <>
      <section className="Registrasi mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8 p-5 shadow-lg rounded-lg">
              <Image src="/images/logo-covendor.png" width={170} height={30} />
              <h4 className="text-left mt-4 mb-3">Create your account</h4>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="inputNpwp">NPWP</label>
                    <input type="text" className="form-control" id="inputNpwp" />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="inputNpwp">Company Name</label>
                    <input type="text" className="form-control" id="inputNpwp" />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <textarea className="form-control" id="inputAddress" rows={3} placeholder="1234 Main St" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      {provList.map((item) => (
                        <option id={item.prov_id}>{item.prov_name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <select id="inputCity" className="form-control">
                      <option selected>Choose...</option>
                      {provList.map((item) => (
                        <option id={item.prov_id}>{item.prov_name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Postal code</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="inputName">PIC Name</label>
                    <input type="text" className="form-control" id="inputName" />
                  </div>
                  <div className="form-group col-md-7">
                    <label htmlFor="inputName">Phone</label>
                    <input type="text" className="form-control" id="inputName" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Confirm Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="form-check col-md-12 ml-4">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-form-check-label" htmlFor="defaultCheck1">
                      Show Password
                    </label>
                  </div>
                </div>
                <div className="row justify-content-between mt-3">
                  <div className="col-2">
                    <a href="/#">Sign In</a>
                  </div>
                  <div className="col-2">
                    <button type="submit" className="btn btn-primary text-white">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
