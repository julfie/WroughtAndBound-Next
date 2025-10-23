import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features18 = (props) => {
  return (
    <>
      <div className="features18-layout349 thq-section-padding">
        <div className="features18-max-width thq-section-max-width">
          <div className="features18-content1">
            <div className="features18-section-title">
              <span className="thq-body-small">
                {props.feature1Slogan ?? (
                  <Fragment>
                    <span className="features18-text6">Enhanced Security</span>
                  </Fragment>
                )}
              </span>
              <div className="features18-content2">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features18-text5">
                        Secure Data Encryption
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="thq-body-large">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features18-text4">
                        Your data is encrypted using the latest security
                        protocols to ensure maximum protection.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="features18-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features18-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features18-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features18-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features18-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features18-text4 {
            display: inline-block;
          }
          .features18-text5 {
            display: inline-block;
          }
          .features18-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features18-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

Features18.defaultProps = {
  feature1Description: undefined,
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature1ImageAlt: 'Image showcasing feature 1',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
}

Features18.propTypes = {
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features18
