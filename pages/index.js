import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import WBNavbar from '../components/wb-navbar'
import Features18 from '../components/feature_rightimg'
import Features171 from '../components/features_leftimg'
import CTA1 from '../components/cta1'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>WroughtAndBound</title>
          <meta property="og:title" content="WroughtAndBound" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4e25715-a25e-4e44-b6c2-669370762e22/412a91be-9879-4ee1-b351-032b60fcca0e?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <WBNavbar
          text={
            <Fragment>
              <span className="home-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="home-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text12">Shop the Shelves</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text13">Custom Work</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text14">Contact Me</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text15">My Bindings</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text16">About</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text17">Shop the Shelves</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text18">Explore my Work</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-text19">My Art</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text20">Custom Work</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-text21">Contact Me</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="home-text22">My Bindings</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="home-text23">My Bindings</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="home-text24">My Artwork</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text25">Register</span>
            </Fragment>
          }
          rootClassName="wb-navbarroot-class-name1"
        ></WBNavbar>
        <div className="home-event-bar">
          <div className="home-events">
            <span className="home-text26">Find me at...</span>
            <div className="home-event1">
              <div className="home-description1">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="Heading5"
                >
                  Link
                </a>
                <span className="home-text27 Label2">Mar 27th, 7pm</span>
              </div>
              <span className="home-text28">Workshop</span>
            </div>
            <div className="home-event2">
              <div className="home-description2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="Heading5"
                >
                  Link
                </a>
                <span className="home-text29 Label2">Apr 11th, 11am</span>
              </div>
              <span className="home-text30 Caption">Artist Talk</span>
            </div>
            <div className="home-event3">
              <div className="home-description3">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="Heading5"
                >
                  Link
                </a>
                <span className="home-text31 Label2">May 2nd, 6pm</span>
              </div>
              <span className="home-text32 Caption">Lecture</span>
            </div>
          </div>
        </div>
        <div className="home-intro">
          <div className="home-copy">
            <span className="home-text33 Heading1">Some  Title or Other</span>
          </div>
          <div className="home-book">
            <img
              alt="Vector2711"
              src="/vector-1100w.png"
              loading="eager"
              className="home-vector"
            />
            <img
              alt="image"
              src="/pages-1000w.png"
              loading="lazy"
              className="home-image4"
            />
            <div className="home-l-page-content">
              <span className="home-text34">
                <span>Bound by Heart</span>
                <br></br>
                <span>and by Hand</span>
              </span>
              <span className="home-text38">
                <span>
                  From miniature “Tiny Tomes” to handbound journals and fine art
                  prints, each creation is designed to feel like it’s been
                  found, not made — as if lifted from the library of some
                  forgotten realm.
                </span>
                <br></br>
                <br></br>
                <span>
                  Explore collections of books, prints, and leatherwork, or
                  commission something uniquely your own!
                </span>
              </span>
            </div>
            <div className="home-r-page-content">
              <div className="home-container2">
                <img
                  alt="toppicture4120"
                  src="/top%20picture-600w.png"
                  className="home-toppicture"
                />
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image5"
                />
              </div>
              <div className="home-container3">
                <img
                  alt="bottompicture4121"
                  src="/top%20picture-600w.png"
                  className="home-bottompicture"
                />
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-gallery3 thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <div className="home-section-title">
              <h2 className="home-text43 thq-heading-2">
                Photo Gallery of the Services you provide
              </h2>
              <span className="home-text44 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim in eros
                elementum tristique. Duis cursus, mi quis viverra ornare, eros
                dolor interdum nulla.
              </span>
            </div>
            <div className="home-content">
              <div className="home-container4">
                <img
                  alt="Artwork 1"
                  src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
              </div>
              <div className="home-container5">
                <img
                  alt="Artwork 2"
                  src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
              </div>
              <div className="home-container6">
                <img
                  alt="Artwork 3"
                  src="https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="thq-img-ratio-4-3"
                />
              </div>
            </div>
          </div>
        </div>
        <Features18
          feature1Title={
            <Fragment>
              <span className="home-text45">Secure Data Encryption</span>
            </Fragment>
          }
          feature1Slogan={
            <Fragment>
              <span className="home-text46">Enhanced Security</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text47">
                Your data is encrypted using the latest security protocols to
                ensure maximum protection.
              </span>
            </Fragment>
          }
        ></Features18>
        <Features171
          feature1Title={
            <Fragment>
              <span className="home-text48">Advanced Security</span>
            </Fragment>
          }
          feature1Slogan={
            <Fragment>
              <span className="home-text49">
                Protecting your data at all times
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text50">
                Our platform uses the latest security measures to ensure that
                your data is always safe and secure.
              </span>
            </Fragment>
          }
        ></Features171>
        <CTA1
          action1={
            <Fragment>
              <span className="home-text51">Main action</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text52">Secondary action</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text53">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text54">
                Call to action that excites the visitor to try your product
              </span>
            </Fragment>
          }
        ></CTA1>
        <div className="home-container7">
          <div className="home-container8">
            <Script
              html={`<div class="tagembed-widget" data-widget-id="303568" data-website="1">
</div>
<script src="https://widget.tagembed.com/embed.min.js" type="text/javascript"></script>`}
            ></Script>
          </div>
        </div>
        <Footer
          link11={
            <Fragment>
              <span className="home-text55">Privacy Policy</span>
            </Fragment>
          }
          link12={
            <Fragment>
              <span className="home-text56">Terms of Service</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text57">Contact Me</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text58">
                I don&apos;t email often; but if you&apos;d like to hear from
                me, join my email list!
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text59">
                Connect with me online for updates &amp; promotions.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text60">© 2025 All Rights Reserved</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text61">Wrought &amp; Bound</span>
            </Fragment>
          }
        ></Footer>
        <a href="https://play.teleporthq.io/signup" className="home-link4">
          <div aria-label="Sign up to TeleportHQ" className="home-container9">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon1"
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
            <span className="home-text62">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            background: url(<path-to-image>),
              lightgray 0% 0% / 100px 100px repeat, #e1dad4;
            background-blend-mode: multiply normal;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #d2cbc0;
            background-blend-mode: multiply, normal;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-event-bar {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #b1b1b1;
            align-items: center;
            flex-direction: column;
          }
          .home-events {
            width: 90%;
            height: auto;
            display: flex;
            padding: 48px 20px 36px 19px;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .home-text26 {
            color: var(--dl-color-text-paragraph1);
            width: auto;
            height: auto;
            display: flex;
            flex-grow: 1;
            font-size: 64px;
            min-width: var(--dl-layout-size-large);
            font-style: Regular;
            text-align: left;
            font-family: Amador;
            font-weight: 400;
            line-height: 100%;
            font-stretch: normal;
            margin-right: 0px;
            text-decoration: none;
          }
          .home-event1 {
            gap: 20px;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-description1 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text27 {
            color: var(--dl-color-text-paragraph1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 100%;
          }
          .home-text28 {
            color: var(--dl-color-accent-accent1);
            height: auto;
            font-size: 12px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Warbler Display;
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-event2 {
            gap: 20px;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-description2 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text29 {
            color: var(--dl-color-text-paragraph1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 100%;
          }
          .home-text30 {
            color: var(--dl-color-accent-accent1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 120.00000476837158%;
          }
          .home-event3 {
            gap: 20px;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-description3 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text31 {
            color: var(--dl-color-text-paragraph1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 100%;
          }
          .home-text32 {
            color: var(--dl-color-accent-accent1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 120.00000476837158%;
          }
          .home-intro {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-twounits);
            border-color: rgba(222, 181, 129, 1);
            border-style: solid;
            border-width: 1px 0 0;
            flex-direction: column;
          }
          .home-copy {
            gap: 10px;
            width: auto;
            display: flex;
            padding: 0 30px;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-text33 {
            color: var(--dl-color-text-paragraph1);
            height: auto;
            text-align: left;
            line-height: 120.00000476837158%;
          }
          .home-book {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            min-width: auto;
            align-self: center;
            align-items: stretch;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-vector {
            width: 91%;
            height: auto;
            margin: auto;
            max-width: var(--dl-layout-size-maxwidth);
            align-self: center;
            padding-top: 15px;
          }
          .home-image4 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 90%;
            bottom: 0px;
            height: auto;
            margin: auto;
            padding: 5px;
            position: absolute;
            max-width: var(--dl-layout-size-maxwidth);
            object-fit: cover;
            aspect-ratio: auto;
          }
          .home-l-page-content {
            gap: 62px;
            top: 0px;
            left: 32px;
            width: 40%;
            bottom: 0px;
            height: auto;
            display: flex;
            position: absolute;
            align-self: flex-start;
            margin-top: auto;
            align-items: center;
            flex-shrink: 0;
            margin-left: 5%;
            margin-right: auto;
            margin-bottom: auto;
            flex-direction: column;
            justify-content: center;
          }
          .home-text34 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 55px;
            font-style: Regular;
            text-align: right;
            font-family: Amador;
            font-weight: 400;
            line-height: 93.99999976158142%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text38 {
            color: rgb(0, 0, 0);
            width: 85%;
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Warbler Text;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-r-page-content {
            gap: var(--dl-layout-space-fourunits);
            top: 0px;
            right: 32px;
            width: 40%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-self: flex-end;
            margin-top: auto;
            align-items: stretch;
            flex-shrink: 1;
            margin-left: auto;
            padding-top: s;
            margin-right: 5%;
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: auto;
            padding-right: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-container2 {
            flex: 0;
            width: 70%;
            height: 35%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-toppicture {
            width: 100%;
            height: 100%;
            opacity: 0.92;
            align-self: center;
          }
          .home-image5 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 85%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            z-index: 1;
            position: absolute;
            object-fit: cover;
          }
          .home-container3 {
            width: 70%;
            height: 35%;
            display: block;
            position: relative;
            align-self: center;
          }
          .home-bottompicture {
            width: 100%;
            height: 100%;
            opacity: 0.92;
            align-self: flex-start;
          }
          .home-image6 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 85%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            z-index: 1;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-gallery3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-text43 {
            text-align: center;
          }
          .home-text44 {
            text-align: center;
          }
          .home-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-container4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container6 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-container7 {
            width: 80%;
            align-self: center;
            margin-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-container8 {
            display: contents;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
            display: inline-block;
          }
          .home-text58 {
            color: var(--background_base);
            display: inline-block;
          }
          .home-text59 {
            fill: var(--background_base);
            color: var(--background_base);
            display: inline-block;
          }
          .home-text60 {
            color: var(--background_dark);
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-link4 {
            display: contents;
          }
          .home-container9 {
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
          .home-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text62 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .home-intro {
              overflow: visible;
            }
            .home-book {
              width: 100%;
              position: relative;
              align-self: center;
              align-items: center;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              flex-direction: column;
              justify-content: center;
            }
            .home-vector {
              width: 95%;
              height: auto;
              align-self: center;
            }
            .home-image4 {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              height: auto;
              margin: auto;
              position: absolute;
              align-self: center;
            }
            .home-l-page-content {
              gap: 0;
              top: 0px;
              left: var(--dl-layout-space-oneandhalfunits);
              bottom: 0px;
              position: absolute;
              margin-top: auto;
              align-items: center;
              margin-left: 5%;
              margin-right: auto;
              padding-left: 0px;
              margin-bottom: auto;
              justify-content: space-between;
            }
            .home-text34 {
              align-self: center;
              margin-bottom: 3%;
            }
            .home-text38 {
              width: 80%;
              font-size: 16px;
              min-width: var(--dl-layout-size-xxlarge);
              text-align: left;
              line-height: 150%;
            }
            .home-r-page-content {
              gap: var(--dl-layout-space-fourunits);
              top: 0px;
              right: var(--dl-layout-space-unit);
              width: 45%;
              bottom: 0px;
              height: 100%;
              display: flex;
              position: absolute;
              align-self: center;
              margin-top: auto;
              align-items: stretch;
              margin-left: auto;
              padding-top: var(--dl-layout-space-fourunits);
              margin-right: 5%;
              padding-left: var(--dl-layout-space-halfunit);
              margin-bottom: auto;
              padding-right: var(--dl-layout-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-fourunits);
              justify-content: center;
            }
            .home-container2 {
              width: 80%;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-toppicture {
              width: 85%;
              height: auto;
              display: block;
              opacity: 0.92;
              position: static;
              align-self: center;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-image5 {
              width: 100%;
              height: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-container3 {
              width: 80%;
              height: auto;
              display: flex;
              align-self: flex-end;
              align-items: center;
              justify-content: center;
            }
            .home-bottompicture {
              left: 0px;
              right: 0px;
              width: 85%;
              height: auto;
              position: static;
              align-self: center;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-image6 {
              width: 100%;
              height: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-intro {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-events {
              flex-wrap: wrap;
            }
            .home-text26 {
              width: 100%;
              align-self: center;
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-event1 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
            .home-event2 {
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 1px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
              border-top-width: 0px;
              border-left-width: 1px;
              border-right-width: 1px;
              border-bottom-width: 0px;
            }
            .home-event3 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
