import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const WBNavbar = (props) => {
  return (
    <>
      <div className={`wb-navbar-container1 ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="wb-navbar-navbar-interactive">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="wb-navbar-image"
          />
          <div data-thq="thq-navbar-nav" className="wb-navbar-desktop-menu">
            <nav className="wb-navbar-links1">
              <Link href="/about-me">
                <a className="wb-navbar-link1">
                  {props.text ?? (
                    <Fragment>
                      <span className="wb-navbar-text25">About</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <a
                href="https://www.etsy.com/shop/wroughtandbound"
                target="_blank"
                rel="noreferrer noopener"
                className="wb-navbar-shop1"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="wb-navbar-text23">Shop the Shelves</span>
                  </Fragment>
                )}
              </a>
              <Link href="/contact">
                <a className="wb-navbar-link2">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="wb-navbar-text24">Custom Work</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <Link href="/contact">
                <a className="wb-navbar-link3">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="wb-navbar-text28">Contact Me</span>
                    </Fragment>
                  )}
                </a>
              </Link>
              <div
                data-thq="thq-dropdown"
                className="wb-navbar-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="wb-navbar-dropdown-toggle1"
                >
                  <span className="wb-navbar-text10">
                    {props.text13 ?? (
                      <Fragment>
                        <span className="wb-navbar-text22">
                          Explore my Work
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="wb-navbar-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="wb-navbar-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="wb-navbar-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="wb-navbar-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="wb-navbar-dropdown-toggle2"
                    >
                      <span>
                        {props.text4 ?? (
                          <Fragment>
                            <span className="wb-navbar-text14">
                              My Bindings
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="wb-navbar-rebindings list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="wb-navbar-dropdown-toggle3"
                    >
                      <span>
                        {props.text43 ?? (
                          <Fragment>
                            <span className="wb-navbar-text20">
                              My Bindings
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="wb-navbar-my-art list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="wb-navbar-dropdown-toggle4"
                    >
                      <span className="wb-navbar-text11">
                        {props.text14 ?? (
                          <Fragment>
                            <span className="wb-navbar-text26">My Art</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="wb-navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="wb-navbar-icon12">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="wb-navbar-mobile-menu">
            <div className="wb-navbar-nav">
              <div className="wb-navbar-top">
                <div className="wb-navbar-container2"></div>
                <div data-thq="thq-close-menu" className="wb-navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="wb-navbar-icon14">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="wb-navbar-links2">
                <span className="wb-navbar-about2">
                  {props.text10 ?? (
                    <Fragment>
                      <span className="wb-navbar-text16">About</span>
                    </Fragment>
                  )}
                </span>
                <span className="wb-navbar-shop2">
                  {props.text11 ?? (
                    <Fragment>
                      <span className="wb-navbar-text29">Shop the Shelves</span>
                    </Fragment>
                  )}
                </span>
                <span className="wb-navbar-commissions2">
                  {props.text21 ?? (
                    <Fragment>
                      <span className="wb-navbar-text18">Custom Work</span>
                    </Fragment>
                  )}
                </span>
                <span className="wb-navbar-binding-portfolio3">
                  {props.text42 ?? (
                    <Fragment>
                      <span className="wb-navbar-text15">My Bindings</span>
                    </Fragment>
                  )}
                </span>
                <span className="wb-navbar-art-portfolio">
                  {props.text411 ?? (
                    <Fragment>
                      <span className="wb-navbar-text17">My Artwork</span>
                    </Fragment>
                  )}
                </span>
                <span className="wb-navbar-contact-me2">
                  {props.text31 ?? (
                    <Fragment>
                      <span className="wb-navbar-text27">Contact Me</span>
                    </Fragment>
                  )}
                </span>
              </nav>
              <div className="wb-navbar-buttons">
                <button className="wb-navbar-login button">
                  <span>
                    {props.login ?? (
                      <Fragment>
                        <span className="wb-navbar-text21">Login</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="button">
                  <span>
                    {props.register ?? (
                      <Fragment>
                        <span className="wb-navbar-text19">Register</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="wb-navbar-icon16"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="wb-navbar-icon18"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="wb-navbar-icon20"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .wb-navbar-container1 {
            display: contents;
          }
          .wb-navbar-navbar-interactive {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 3px #b1b1b1;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
            background-color: #efedec;
          }
          .wb-navbar-image {
            width: var(--dl-layout-size-large);
            height: auto;
            object-fit: cover;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
          }
          .wb-navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .wb-navbar-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .wb-navbar-link1 {
            text-decoration: none;
          }
          .wb-navbar-shop1 {
            text-decoration: none;
          }
          .wb-navbar-link2 {
            text-decoration: none;
          }
          .wb-navbar-link3 {
            text-decoration: none;
          }
          .wb-navbar-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .wb-navbar-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .wb-navbar-text10 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .wb-navbar-dropdown-arrow {
            transition: 0.3s;
          }
          .wb-navbar-icon10 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .wb-navbar-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #efedec;
            list-style-position: inside;
          }
          .wb-navbar-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .wb-navbar-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .wb-navbar-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .wb-navbar-rebindings {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .wb-navbar-dropdown-toggle3 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .wb-navbar-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .wb-navbar-my-art {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .wb-navbar-dropdown-toggle4 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .wb-navbar-dropdown-toggle4:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .wb-navbar-text11 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .wb-navbar-burger-menu {
            display: none;
          }
          .wb-navbar-icon12 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .wb-navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .wb-navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .wb-navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .wb-navbar-container2 {
            flex: 0 0 auto;
            width: 0px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .wb-navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wb-navbar-icon14 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .wb-navbar-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .wb-navbar-shop2 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .wb-navbar-commissions2 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .wb-navbar-binding-portfolio3 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .wb-navbar-art-portfolio {
            margin-left: var(--dl-layout-space-twounits);
          }
          .wb-navbar-contact-me2 {
            margin-left: var(--dl-layout-space-twounits);
          }
          .wb-navbar-buttons {
            width: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .wb-navbar-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .wb-navbar-icon16 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .wb-navbar-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .wb-navbar-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .wb-navbar-text14 {
            display: inline-block;
          }
          .wb-navbar-text15 {
            display: inline-block;
          }
          .wb-navbar-text16 {
            display: inline-block;
          }
          .wb-navbar-text17 {
            display: inline-block;
          }
          .wb-navbar-text18 {
            display: inline-block;
          }
          .wb-navbar-text19 {
            display: inline-block;
          }
          .wb-navbar-text20 {
            display: inline-block;
          }
          .wb-navbar-text21 {
            display: inline-block;
          }
          .wb-navbar-text22 {
            display: inline-block;
          }
          .wb-navbar-text23 {
            display: inline-block;
          }
          .wb-navbar-text24 {
            display: inline-block;
          }
          .wb-navbar-text25 {
            display: inline-block;
          }
          .wb-navbar-text26 {
            display: inline-block;
          }
          .wb-navbar-text27 {
            display: inline-block;
          }
          .wb-navbar-text28 {
            display: inline-block;
          }
          .wb-navbar-text29 {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .wb-navbar-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .wb-navbar-desktop-menu {
              display: none;
            }
            .wb-navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .wb-navbar-links2 {
              gap: var(--dl-layout-space-halfunit);
              align-self: flex-start;
              align-items: flex-start;
            }
            .wb-navbar-about2 {
              font-size: 18px;
              font-family: Amador;
              margin-left: var(--dl-layout-space-twounits);
            }
            .wb-navbar-shop2 {
              font-size: 18px;
              font-family: Amador;
            }
            .wb-navbar-commissions2 {
              font-size: 18px;
              font-family: Amador;
            }
            .wb-navbar-binding-portfolio3 {
              font-size: 18px;
              font-family: Amador;
            }
            .wb-navbar-art-portfolio {
              font-size: 18px;
              font-family: Amador;
            }
            .wb-navbar-contact-me2 {
              font-size: 18px;
              font-family: Amador;
            }
            .wb-navbar-buttons {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .wb-navbar-container1 {
              width: auto;
            }
            .wb-navbar-navbar-interactive {
              flex: 0;
              width: 381px;
              padding: var(--dl-layout-space-unit);
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .wb-navbar-image {
              width: 97px;
              height: 69px;
              margin-bottom: 0px;
            }
            .wb-navbar-mobile-menu {
              padding: 16px;
            }
            .wb-navbarroot-class-name1 {
              min-width: var(--dl-layout-size-maxwidth);
            }
            .wb-navbarroot-class-name2 {
              min-width: 100%;
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

WBNavbar.defaultProps = {
  text4: undefined,
  imageAlt: 'image',
  imageSrc: '/external/logo-200h-200h.png',
  text42: undefined,
  text10: undefined,
  text411: undefined,
  rootClassName: '',
  text21: undefined,
  register: undefined,
  text43: undefined,
  login: undefined,
  text13: undefined,
  text1: undefined,
  text2: undefined,
  text: undefined,
  text14: undefined,
  text31: undefined,
  text3: undefined,
  text11: undefined,
}

WBNavbar.propTypes = {
  text4: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  text42: PropTypes.element,
  text10: PropTypes.element,
  text411: PropTypes.element,
  rootClassName: PropTypes.string,
  text21: PropTypes.element,
  register: PropTypes.element,
  text43: PropTypes.element,
  login: PropTypes.element,
  text13: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  text14: PropTypes.element,
  text31: PropTypes.element,
  text3: PropTypes.element,
  text11: PropTypes.element,
}

export default WBNavbar
