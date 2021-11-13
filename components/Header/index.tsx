/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-store fixed-top navbar-fixed-top"
          style={{ zIndex: 3 }}
        >
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                <img src="/images/logo-covendor.png" alt="Logo" width="200px" />
              </a>
            </Link>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-black-50"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user-circle mr-1" />
                    Login
                  </a>

                  <div className="dropdown-menu p-3">
                    <form className="form-horizontal" method="post">
                      <input
                        className="form-control login"
                        type="text"
                        name="username2"
                        placeholder="Username"
                      />
                      <input
                        className="form-control login"
                        type="text"
                        name="password2"
                        placeholder="Password"
                      />
                      <input
                        className="btn btn-primary text-white"
                        type="button"
                        name="submit"
                        value="Login"
                      />
                    </form>
                  </div>
                </li>
                <li className="nav-item active">
                  <a
                    href="register.html"
                    className="btn btn-primary nav-link px-4 text-white"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
