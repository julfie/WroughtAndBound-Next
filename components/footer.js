import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <footer
        className={`footer-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            <h1 className="footer-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="footer-text3">Wrought &amp; Bound</span>
                </Fragment>
              )}
            </h1>
            <div className="footer-actions1">
              <div className="footer-newsletter">
                <span className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="footer-text4">
                        I don&apos;t email often, but if you&apos;d like to hear
                        from me
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="footer-actions2">
                  <div className="footer-form">
                    <div className="footer-container2">
                      <input
                        type="email"
                        placeholder={props.textInputPlaceholder}
                        className="footer-text-input thq-input"
                      />
                    </div>
                    <button className="footer-button thq-button-outline">
                      <span className="thq-body-small">
                        {props.action1 ?? (
                          <Fragment>
                            <span className="footer-text6">Contact Me</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-container3">
                <span className="footer-content2 thq-body-small">
                  {props.content2 ?? (
                    <Fragment>
                      <span className="footer-text7">
                        Connect with me online for updates &amp; promotions.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="footer-social-links">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon1"
                  >
                    <path
                      d="M12 9.52A2.48 2.48 0 1 0 14.48 12A2.48 2.48 0 0 0 12 9.52m9.93-2.45a6.5 6.5 0 0 0-.42-2.26a4 4 0 0 0-2.32-2.32a6.5 6.5 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.5 6.5 0 0 0-2.26.42a4 4 0 0 0-2.32 2.32a6.5 6.5 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.9 6.9 0 0 0 .42 2.27a3.9 3.9 0 0 0 .91 1.4a3.9 3.9 0 0 0 1.41.91a6.5 6.5 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.5 6.5 0 0 0 2.26-.42a3.9 3.9 0 0 0 1.41-.91a3.9 3.9 0 0 0 .91-1.4a6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93m-2.54 8a5.7 5.7 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.7 5.7 0 0 1-1.81.35H8.94A5.7 5.7 0 0 1 7.13 19a3.5 3.5 0 0 1-1.31-.86A3.5 3.5 0 0 1 5 16.87a5.5 5.5 0 0 1-.34-1.81V8.94A5.5 5.5 0 0 1 5 7.13a3.5 3.5 0 0 1 .86-1.31A3.6 3.6 0 0 1 7.13 5a5.7 5.7 0 0 1 1.81-.35h6.12a5.7 5.7 0 0 1 1.81.35a3.5 3.5 0 0 1 1.31.86A3.5 3.5 0 0 1 19 7.13a5.7 5.7 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26a2.38 2.38 0 0 0-1.41 1.36A4.3 4.3 0 0 0 6 9v6a4.3 4.3 0 0 0 .26 1.38a2.38 2.38 0 0 0 1.41 1.41a4.3 4.3 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26a2.38 2.38 0 0 0 1.41-1.41a4 4 0 0 0 .26-1.38V9a3.8 3.8 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12A3.82 3.82 0 1 1 12 15.82m4-6.89a.9.9 0 0 1 0-1.79a.9.9 0 0 1 0 1.79"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon3"
                  >
                    <path
                      d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon5"
                  >
                    <path
                      d="M19.321 5.562a5 5 0 0 1-.443-.258a6.2 6.2 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943q.002.3-.008.595l-.004.073q0 .016-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604a3.2 3.2 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.18 7.18 0 0 0-5.532 1.62a7.6 7.6 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246c-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.9 7.9 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187c.359-.015 1.562 0 2.928-.647c1.515-.718 2.377-1.787 2.377-1.787a7.4 7.4 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-credits1">
            <div className="footer-row">
              <div className="footer-credits2">
                <span className="footer-link11 thq-body-small">
                  {props.link11 ?? (
                    <Fragment>
                      <span className="footer-text8">Privacy Policy</span>
                    </Fragment>
                  )}
                </span>
                <span className="footer-link12 thq-body-small">
                  {props.link12 ?? (
                    <Fragment>
                      <span className="footer-text5">Terms of Service</span>
                    </Fragment>
                  )}
                </span>
                <span className="footer-content3 thq-body-small">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="footer-text2">
                        © 2025 All Rights Reserved
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-container1 {
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .footer-max-width {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .footer-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
          }
          .footer-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 8em;
            align-self: center;
            font-family: 'Amador';
            font-weight: 400;
          }
          .footer-actions1 {
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: flex-end;
            align-items: center;
            justify-content: space-between;
          }
          .footer-newsletter {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-actions2 {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-form {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
          }
          .footer-container2 {
            width: 365px;
            display: flex;
            align-items: stretch;
          }
          .footer-text-input {
            color: #878383;
            width: 100%;
            border-color: #b5b4b4;
            background-color: transparent;
          }
          .footer-button {
            fill: var(--accent_gold);
            color: var(--accent_gold);
            border-color: var(--accent_gold);
          }
          .footer-container3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-content2 {
            align-self: center;
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .footer-social-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-icon1 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
          }
          .footer-icon3 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
          }
          .footer-icon5 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
          }
          .footer-credits1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-row {
            flex: 1;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-credits2 {
            gap: var(--dl-layout-space-twounits);
            flex: 0 0 auto;
            color: var(--background_base);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .footer-link11 {
            fill: var(--background_dark);
            color: var(--background_dark);
          }
          .footer-link12 {
            fill: var(--background_dark);
            color: var(--background_dark);
          }
          .footer-content3 {
            fill: var(--background_dark);
            color: var(--background_dark);
            align-self: center;
            padding-left: var(--dl-layout-space-sixunits);
          }
          .footer-text2 {
            color: var(--background_dark);
            display: inline-block;
          }
          .footer-text3 {
            display: inline-block;
          }
          .footer-text4 {
            color: var(--background_base);
            display: inline-block;
          }
          .footer-text5 {
            display: inline-block;
          }
          .footer-text6 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
            display: inline-block;
          }
          .footer-text7 {
            fill: var(--background_base);
            color: var(--background_base);
            display: inline-block;
          }
          .footer-text8 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .footer-content {
              flex-direction: row;
            }
            .footer-newsletter {
              width: 50%;
            }
            .footer-form {
              width: 100%;
              flex-direction: column;
            }
            .footer-container2 {
              width: 100%;
            }
            .footer-button {
              width: 100%;
              padding-top: var(--dl-layout-space-halfunit);
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              padding-bottom: var(--dl-layout-space-halfunit);
            }
            .footer-credits1 {
              flex-direction: column;
            }
            .footer-row {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .footer-content3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .footer-content {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              align-self: stretch;
              flex-direction: column;
            }
            .footer-actions1 {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .footer-newsletter {
              width: 100%;
            }
            .footer-form {
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer-container2 {
              width: 100%;
            }
            .footer-button {
              width: 208px;
            }
            .footer-credits1 {
              flex-direction: column;
            }
            .footer-row {
              padding: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .footer-credits2 {
              width: auto;
              align-self: stretch;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .footer-content {
              gap: var(--dl-layout-space-twounits);
            }
            .footer-newsletter {
              width: 100%;
            }
            .footer-actions2 {
              width: 100%;
            }
            .footer-form {
              width: 100%;
              flex-direction: column;
            }
            .footer-container2 {
              width: 100%;
            }
            .footer-button {
              width: 100%;
            }
            .footer-social-links {
              align-items: center;
              justify-content: center;
            }
            .footer-row {
              align-items: center;
              justify-content: center;
            }
            .footer-credits2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  content3: undefined,
  heading1: undefined,
  rootClassName: '',
  content1: undefined,
  link12: undefined,
  action1: undefined,
  content2: undefined,
  textInputPlaceholder: 'Enter your email',
  link11: undefined,
}

Footer.propTypes = {
  content3: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  link12: PropTypes.element,
  action1: PropTypes.element,
  content2: PropTypes.element,
  textInputPlaceholder: PropTypes.string,
  link11: PropTypes.element,
}

export default Footer
