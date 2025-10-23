import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import WBNavbar from '../components/wb-navbar'
import Footer from '../components/footer'

const AboutMe = (props) => {
  return (
    <>
      <div className="about-me-container1">
        <Head>
          <title>About-Me - WroughtAndBound</title>
          <meta property="og:title" content="About-Me - WroughtAndBound" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4e25715-a25e-4e44-b6c2-669370762e22/412a91be-9879-4ee1-b351-032b60fcca0e?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <WBNavbar
          text={
            <Fragment>
              <span className="about-me-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="about-me-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-me-text12">Shop the Shelves</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-me-text13">Custom Work</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-me-text14">Contact Me</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-me-text15">My Bindings</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="about-me-text16">About</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-me-text17">Shop the Shelves</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="about-me-text18">Explore my Work</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="about-me-text19">My Art</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="about-me-text20">Custom Work</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="about-me-text21">Contact Me</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="about-me-text22">My Bindings</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="about-me-text23">My Bindings</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="about-me-text24">My Artwork</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="about-me-text25">Register</span>
            </Fragment>
          }
          rootClassName="wb-navbarroot-class-name"
        ></WBNavbar>
        <div className="about-me-layout300 thq-section-padding">
          <div className="about-me-max-width1 thq-section-max-width">
            <div className="about-me-section-title">
              <span className="about-me-text26 thq-body-small">
                <span>Every book tells a story — even before you open it.</span>
                <br></br>
              </span>
              <div className="about-me-content1">
                <h2 className="about-me-text29 thq-heading-2">
                  About Wrought &amp; Bound
                </h2>
                <span className="about-me-text30 thq-body-large">
                  I’m Sorrel Fields, a dedicated artist primarily working in
                  book arts, paper arts, and design. My work draws from fantasy,
                  folklore, and gothic architecture, using traditional craft as
                  a way to build worlds and histories that could have been.
                  Whether I’m gilding a leather spine, printing on a RISO drum,
                  or sewing a row of tiny tomes no bigger than a thumb, I’m
                  chasing that alchemy between story and structure — where a
                  book becomes something alive.
                </span>
              </div>
            </div>
            <div className="about-me-content2">
              <div className="about-me-row1 thq-flex-row">
                <div className="about-me-feature1">
                  <img
                    alt="PlaceholderImage1314"
                    src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="about-me-content3">
                    <h3 className="about-me-feature1-title thq-heading-3">
                      My Goals
                    </h3>
                    <span className="about-me-feature1-description thq-body-small">
                      <span>
                        I craft objects meant to feel unearthed rather than made
                        — relics from imagined libraries, tokens of devotion,
                        vessels for thought and memory. Each piece is bound,
                        tooled, and finished by hand with care and intention,
                        blending fine art and function in equal measure.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        I want my work to feel like something you might find
                        tucked in a scholar’s satchel, or on a shelf in a
                        long-forgotten abbey — yet still carry it in your bag
                        today.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="about-me-feature2">
                  <img
                    alt="PlaceholderImage1314"
                    src="https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="about-me-content4">
                    <h3 className="about-me-feature2-title thq-heading-3">
                      My Practice
                    </h3>
                    <span className="about-me-feature2-description thq-body-small">
                      <span>
                        Wrought &amp; Bound began from a love of making things
                        by heart and by hand. 
                      </span>
                      <span>
                        My practice is shaped by both curiosity and constraint:
                        a search for beauty that also honors accessibility,
                        sustainability, and the lived realities of being a
                        disabled artist and craftsperson.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Through my work, I hope to keep bookbinding alive not
                        just as a skill, but as a way of storytelling — where
                        every hinge, thread, and page speaks to care,
                        resilience, and wonder.
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="about-me-feature3">
                  <img
                    alt="PlaceholderImage1314"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="thq-img-ratio-4-3"
                  />
                  <div className="about-me-content5">
                    <h3 className="about-me-feature3-title thq-heading-3">
                      Where to Find Me
                    </h3>
                    <span className="about-me-feature3-description thq-body-small">
                      <span>
                        You can find Wrought &amp; Bound at Seattle art markets,
                        galleries, and online.
                      </span>
                      <br></br>
                      <span>
                        Each piece is made in small batches — one at a time, by
                        hand — so no two are ever quite alike.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Follow along at @lemonfish or explore the shop to see
                        what’s currently available.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        For commissions, collaborations, or curiosities —
                        contact me and let’s make something worthy of its own
                        myth.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-container2 thq-section-padding">
          <div className="about-me-max-width2 thq-section-max-width">
            <div className="about-me-row2">
              <div className="about-me-container3 thq-flex-row">
                <h2 className="thq-heading-2">
                  Medium length heading goes here
                </h2>
                <div className="about-me-content6">
                  <p className="thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <div className="about-me-actions">
                    <button type="button" className="thq-button-filled">
                      <span>Action1</span>
                    </button>
                    <button type="button" className="thq-button-outline">
                      <span>Action2</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMzg2NDA1MHww&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="about-me-image thq-img-ratio-16-9"
            />
          </div>
        </div>
        <Footer
          link11={
            <Fragment>
              <span className="about-me-text55">Privacy Policy</span>
            </Fragment>
          }
          link12={
            <Fragment>
              <span className="about-me-text56">Terms of Service</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="about-me-text57">Contact Me</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-me-text58">
                I don&apos;t email often, but if you&apos;d like to hear from me
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="about-me-text59">
                Connect with me online for updates &amp; promotions.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="about-me-text60">
                © 2025 All Rights Reserved
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-me-text61">Wrought &amp; Bound</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
        <a href="https://play.teleporthq.io/signup" className="about-me-link">
          <div
            aria-label="Sign up to TeleportHQ"
            className="about-me-container4"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="about-me-icon1"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="about-me-text62">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .about-me-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #d2cbc0;
          }
          .about-me-text10 {
            display: inline-block;
          }
          .about-me-text11 {
            display: inline-block;
          }
          .about-me-text12 {
            display: inline-block;
          }
          .about-me-text13 {
            display: inline-block;
          }
          .about-me-text14 {
            display: inline-block;
          }
          .about-me-text15 {
            display: inline-block;
          }
          .about-me-text16 {
            display: inline-block;
          }
          .about-me-text17 {
            display: inline-block;
          }
          .about-me-text18 {
            display: inline-block;
          }
          .about-me-text19 {
            display: inline-block;
          }
          .about-me-text20 {
            display: inline-block;
          }
          .about-me-text21 {
            display: inline-block;
          }
          .about-me-text22 {
            display: inline-block;
          }
          .about-me-text23 {
            display: inline-block;
          }
          .about-me-text24 {
            display: inline-block;
          }
          .about-me-text25 {
            display: inline-block;
          }
          .about-me-layout300 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-max-width1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-me-section-title {
            gap: 16px;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-text26 {
            font-size: 20px;
            text-align: center;
            font-family: 'WarblerText-Italic';
            padding-bottom: var(--dl-layout-space-fourunits);
          }
          .about-me-content1 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .about-me-text29 {
            text-align: center;
            font-family: 'WarblerDisplay-Bold';
          }
          .about-me-text30 {
            text-align: center;
            font-family: 'WarblerText-Regular';
          }
          .about-me-content2 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .about-me-row1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .about-me-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-feature1-title {
            text-align: center;
            font-family: 'WarblerDisplay-Bold';
          }
          .about-me-feature1-description {
            font-family: 'WarblerText-Regular';
          }
          .about-me-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-feature2-title {
            font-family: 'WarblerDisplay-Bold';
          }
          .about-me-feature2-description {
            font-family: 'WarblerText-Regular';
          }
          .about-me-feature3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-feature3-title {
            font-family: 'WarblerDisplay-Bold';
          }
          .about-me-feature3-description {
            font-family: 'WarblerText-Regular';
          }
          .about-me-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-max-width2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-row2 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-container3 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .about-me-content6 {
            gap: 24px;
            width: 616px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .about-me-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
          }
          .about-me-image {
            height: 500px;
          }
          .about-me-text55 {
            display: inline-block;
          }
          .about-me-text56 {
            display: inline-block;
          }
          .about-me-text57 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
            display: inline-block;
          }
          .about-me-text58 {
            color: var(--background_base);
            display: inline-block;
          }
          .about-me-text59 {
            fill: var(--background_base);
            color: var(--background_base);
            display: inline-block;
          }
          .about-me-text60 {
            color: var(--background_dark);
            display: inline-block;
          }
          .about-me-text61 {
            display: inline-block;
          }
          .about-me-link {
            display: contents;
          }
          .about-me-container4 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .about-me-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .about-me-text62 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .about-me-section-title {
              width: 100%;
            }
            .about-me-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .about-me-max-width1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .about-me-section-title {
              width: auto;
            }
            .about-me-text29 {
              text-align: center;
            }
            .about-me-row1 {
              flex-direction: column;
            }
            .about-me-feature2 {
              width: auto;
            }
            .about-me-feature3 {
              width: auto;
            }
            .about-me-max-width2 {
              gap: var(--dl-layout-space-twounits);
            }
            .about-me-content6 {
              width: auto;
            }
            .about-me-image {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutMe
