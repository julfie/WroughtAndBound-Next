import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features171 = (props) => {
  return (
    <>
      <div className="features171-layout349 thq-section-padding">
        <div className="features171-max-width thq-section-max-width">
          <div className="features171-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="features171-content1">
            <div className="features171-section-title">
              <span className="thq-body-small">
                {props.feature1Slogan ?? (
                  <Fragment>
                    <span className="features171-text5">
                      Protecting your data at all times
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="features171-content2">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features171-text6">
                        Advanced Security
                      </span>
                    </Fragment>
                  )}
                </h2>
                <p className="thq-body-large">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features171-text4">
                        Our platform uses the latest security measures to ensure
                        that your data is always safe and secure.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features171-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features171-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .features171-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .features171-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features171-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features171-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features171-text4 {
            display: inline-block;
          }
          .features171-text5 {
            display: inline-block;
          }
          .features171-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features171-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Features171.defaultProps = {
  feature1Description: undefined,
  feature1Slogan: undefined,
  feature1ImageAlt: 'Advanced Security Icon',
  feature1Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
}

Features171.propTypes = {
  feature1Description: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default Features171
