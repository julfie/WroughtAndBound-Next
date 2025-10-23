import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import WBNavbar from '../components/wb-navbar'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container10">
        <Head>
          <title>Contact - WroughtAndBound</title>
          <meta property="og:title" content="Contact - WroughtAndBound" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4e25715-a25e-4e44-b6c2-669370762e22/412a91be-9879-4ee1-b351-032b60fcca0e?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <WBNavbar
          text={
            <Fragment>
              <span className="contact-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="contact-text11">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contact-text12">Shop the Shelves</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contact-text13">Custom Work</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-text14">Contact Me</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contact-text15">My Bindings</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="contact-text16">About</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="contact-text17">Shop the Shelves</span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="contact-text18">Explore my Work</span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="contact-text19">My Art</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="contact-text20">Custom Work</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="contact-text21">Contact Me</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="contact-text22">My Bindings</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="contact-text23">My Bindings</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="contact-text24">My Artwork</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="contact-text25">Register</span>
            </Fragment>
          }
          rootClassName="wb-navbarroot-class-name2"
        ></WBNavbar>
        <div className="contact-container11 thq-section-padding">
          <div className="contact-max-width1 thq-section-max-width">
            <div className="contact-container12 thq-grid-2">
              <div className="contact-section-header">
                <h2 className="contact-text26 thq-heading-2">
                  <span>
                    How does a bookbinding
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>commission work?</span>
                </h2>
                <p className="contact-text30 thq-body-large">
                  <span>
                    I take a limited number of commissions each season — whether
                    for a custom-bound edition, a collaborative artist book, or
                    a unique gift.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Together we&apos;ll design something tailored to your story,
                    using your choice of materials, themes, and structure.
                  </span>
                </p>
                <div className="contact-actions">
                  <button className="contact-button1 thq-button-animated thq-button-filled">
                    <span className="contact-text35 thq-body-small">
                      Main action
                    </span>
                  </button>
                </div>
              </div>
              <div className="contact-container13">
                <div className="contact-container14 thq-card">
                  <div className="contact-container15 wobble thq-card"></div>
                  <h2 className="contact-text36 thq-heading-2">Inquire</h2>
                  <span className="contact-text37 thq-body-small">
                    <span>Share your idea, inspiration, or occasion!</span>
                    <br></br>
                    <br></br>
                    <span>
                      This can be a custom binding of your book, a rebinding of
                      a favorite novel, a new sketchbook, special journal, or a
                      wedding guest book!
                    </span>
                    <br></br>
                  </span>
                  <label className="contact-text43 thq-heading-3">01</label>
                </div>
                <div className="contact-container16 thq-card">
                  <div className="contact-container17 wobble"></div>
                  <h2 className="contact-text44 thq-heading-2">
                    Gather Information
                  </h2>
                  <span className="contact-text45 thq-body-small">
                    <span>Let&apos;s talk it out! </span>
                    <br></br>
                    <br></br>
                    <span>
                      This is where we&apos;ll land on a a style, mood, form, or
                      any other requirements for the project.
                    </span>
                    <br></br>
                  </span>
                  <label className="contact-text51 thq-heading-3">02</label>
                </div>
                <div className="contact-container18 thq-card">
                  <div className="contact-container19 wobble"></div>
                  <h2 className="contact-text52 thq-heading-2">Design</h2>
                  <span className="contact-text53 thq-body-small">
                    I’ll propose materials and layout suited to your vision.
                    It&apos;s extra helpful if you already have a style or
                    inspiration book we can work off of. That&apos;s certainly
                    not requred, though!
                  </span>
                  <label className="contact-text54 thq-heading-3">03</label>
                </div>
                <div className="contact-container20 thq-card">
                  <div className="contact-container21 wobble"></div>
                  <h2 className="contact-text55 thq-heading-2">Bind!</h2>
                  <span className="contact-text56 thq-body-small">
                    Your piece is made by hand with care and intention — an
                    artifact worthy of its story.
                  </span>
                  <label className="contact-text57 thq-heading-3">04</label>
                </div>
                <svg
                  width="0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="0"
                  version="1.1"
                >
                  <defs>
                    <filter id="squiggle">
                      <feTurbulence
                        id="turbulence"
                        type="fractalNoise"
                        numOctaves="4"
                        baseFrequency=".05"
                      ></feTurbulence>
                      <feDisplacementMap
                        id="displacement"
                        in="SourceGraphic"
                        scale="4"
                      ></feDisplacementMap>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="contact-container23">
              <Script
                html={`<div class="custom-shape-divider-top-1760003490">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
  </svg>
</div>`}
              ></Script>
            </div>
          </div>
        </div>
        <div className="contact-contact1 thq-section-padding">
          <div className="contact-container24">
            <div className="contact-container25">
              <div className="contact-container26">
                <Script
                  html={`<div class="custom-shape-divider-top-1760003490">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill">
        </path>
  </svg>

  <style>
    .custom-shape-divider-top-1760003490 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    height: 80px;
    }
    
    .custom-shape-divider-top-1760003490 svg {
    position: relative;
    display: block;
    width: calc(100%0 + 1.3px);
    }
    
    .custom-shape-divider-top-1760003490 .shape-fill {
    fill: #d2cbc0;
    }
  </style>
</div>`}
                ></Script>
              </div>
            </div>
            <div className="contact-max-width2 thq-flex-row thq-section-max-width">
              <div className="contact-section-title1 thq-flex-column">
                <span className="contact-text58 thq-body-small">
                  Start your project today
                </span>
                <div className="contact-content1">
                  <h2 className="contact-text59 thq-heading-2">
                    Start your project today!
                  </h2>
                </div>
                <div className="contact-content2">
                  <span className="contact-text60 thq-body-small">
                    Forms not your vibe?
                  </span>
                  <div className="contact-row1">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <span className="thq-body-small">
                      <span>
                        Email me at
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a href="mailto:sorrel@Wroughtandbound.com?subject=Commission Request">
                        sorrel@wroughtandbound.com
                      </a>
                    </span>
                  </div>
                  <div className="contact-row2">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                    </svg>
                    <span className="thq-body-small">Seattle, WA</span>
                  </div>
                </div>
              </div>
              <form className="contact-form thq-flex-column">
                <div className="contact-container27">
                  <div className="contact-input1">
                    <label
                      htmlFor="contact-form-7-first-name"
                      className="contact-text62 thq-body-small"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="contact-form-7-first-name"
                      required
                      placeholder="First Name"
                      className="contact-text-input1 thq-input"
                    />
                  </div>
                  <div className="contact-input2">
                    <label
                      htmlFor="contact-form-7-last-name"
                      className="contact-text63 thq-body-small"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="contact-form-7-last-name"
                      placeholder="Last Name"
                      className="contact-text-input2 thq-input"
                    />
                  </div>
                </div>
                <div className="contact-container28">
                  <div className="contact-input3">
                    <label
                      htmlFor="contact-form-7-email"
                      className="contact-text64 thq-body-small"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-form-7-email"
                      required="true"
                      placeholder="Email"
                      autoComplete="email"
                      className="contact-text-input3 thq-input"
                    />
                  </div>
                  <div className="contact-input4">
                    <label
                      htmlFor="contact-form-7-options"
                      className="contact-text65 thq-body-small"
                    >
                      Choose one topic
                    </label>
                    <select
                      id="contact-form-7-options"
                      placeholder="Select one"
                      className="contact-select thq-select"
                    >
                      <option value="Option 1">Custom Binding</option>
                      <option value="Option 1">Rebinding</option>
                      <option value="Option 1">Digital to bound book</option>
                      <option value="Option 2">Something else!</option>
                    </select>
                  </div>
                </div>
                <div className="contact-container29"></div>
                <div className="contact-container30">
                  <div className="contact-input5">
                    <label
                      htmlFor="contact-form-7-message"
                      className="contact-text66 thq-body-small"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-form-7-message"
                      rows="3"
                      placeholder="Enter your message"
                      className="contact-textarea thq-input"
                    ></textarea>
                  </div>
                </div>
                <div className="contact-checkbox1">
                  <input
                    type="checkbox"
                    id="contact-form-7-check"
                    checked="true"
                    required="true"
                    className="thq-checkbox"
                  />
                  <label
                    htmlFor="contact-form-7-check"
                    className="thq-body-small"
                  >
                    I accept the Terms
                  </label>
                </div>
                <button
                  type="submit"
                  className="contact-button2 thq-button-filled"
                >
                  <span className="contact-action1 thq-body-small">Send</span>
                </button>
              </form>
            </div>
            <div className="contact-container31">
              <div className="contact-container32">
                <Script
                  html={`<div class="custom-shape-divider-top-1760003490">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
  </svg>
</div>
<style>
  .custom-shape-divider-top-1760003490 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  }
  
  .custom-shape-divider-top-1760003490 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
  }
  
  .custom-shape-divider-top-1760003490 .shape-fill {
  fill: #D2CBC0;
  }
</style>`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="thq-section-padding">
          <div className="contact-max-width3 thq-section-max-width">
            <div className="contact-section-title2">
              <h2 className="contact-title">Testimonials</h2>
              <p className="contact-subtitle thq-body-large">
                You said it...not me!
              </p>
            </div>
            <div className="contact-container33 thq-flex-row">
              <div className="contact-content3 thq-flex-column">
                <div className="contact-page1 wobble"></div>
                <div className="contact-stars1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <p className="contact-text68 thq-body-large">
                  I have been using the services for a while now and I am
                  extremely satisfied with the level of security provided. The
                  secure data encryption gives me peace of mind.
                </p>
              </div>
              <div className="contact-content4 thq-flex-column">
                <div className="contact-page2 wobble"></div>
                <div className="contact-stars2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <p className="contact-text69 thq-body-large">
                  The product exceeded my expectations in terms of security
                  features. I highly recommend it to anyone looking for a
                  reliable solution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer
          link11={
            <Fragment>
              <span className="contact-text70">Privacy Policy</span>
            </Fragment>
          }
          link12={
            <Fragment>
              <span className="contact-text71">Terms of Service</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="contact-text72">Contact Me</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text73">
                I don&apos;t email often, but if you&apos;d like to hear from me
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text74">
                Connect with me online for updates &amp; promotions.
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="contact-text75">© 2025 All Rights Reserved</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text76">Wrought &amp; Bound</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name1"
        ></Footer>
        <a href="https://play.teleporthq.io/signup" className="contact-link2">
          <div
            aria-label="Sign up to TeleportHQ"
            className="contact-container34"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon39"
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
            <span className="contact-text77">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .contact-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #d2cbc0;
          }
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-text21 {
            display: inline-block;
          }
          .contact-text22 {
            display: inline-block;
          }
          .contact-text23 {
            display: inline-block;
          }
          .contact-text24 {
            display: inline-block;
          }
          .contact-text25 {
            display: inline-block;
          }
          .contact-container11 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-max-width1 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-container12 {
            align-items: start;
          }
          .contact-section-header {
            gap: var(--dl-layout-space-twounits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text26 {
            font-size: 45px;
            font-family: 'Amador';
            font-weight: 400;
            line-height: 1.2;
            text-transform: capitalize;
          }
          .contact-text30 {
            font-family: 'WarblerText-Regular';
          }
          .contact-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .contact-button1 {
            font-family: 'Amador';
            border-color: var(--accent_blue);
            background-color: var(--accent_blue);
          }
          .contact-text35 {
            font-size: 18px;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-container13 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .contact-container14 {
            position: sticky;
            transform: rotate(-2deg);
            box-shadow: 5px 5px 10px 3px #adadad;
            border-radius: var(--dl-layout-radius-radius4);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .contact-container15 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--background_base);
          }
          .contact-text36 {
            z-index: 1;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-text37 {
            z-index: 1;
            align-self: center;
            text-align: center;
          }
          .contact-text43 {
            top: Unit;
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-container16 {
            top: 10%;
            display: flex;
            position: sticky;
            box-shadow: 5px 5px 10px 3px #adadad;
            align-items: center;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .contact-container17 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            align-items: center;
            justify-content: center;
            background-color: var(--background_base);
          }
          .contact-text44 {
            z-index: 1;
            align-self: flex-start;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-text45 {
            z-index: 1;
            text-align: center;
          }
          .contact-text51 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            z-index: 1;
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-container18 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            box-shadow: 5px 5px 10px 3px #adadad;
            border-radius: var(--dl-layout-radius-radius4);
            margin-bottom: var(--dl-layout-space-twounits);
          }
          .contact-container19 {
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--background_base);
          }
          .contact-text52 {
            z-index: 1;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-text53 {
            z-index: 1;
            align-self: center;
            text-align: center;
          }
          .contact-text54 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            z-index: 1;
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-container20 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            box-shadow: 5px 5px 10px 3px #adadad;
            border-radius: var(--dl-layout-radius-radius4);
          }
          .contact-container21 {
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--background_base);
          }
          .contact-text55 {
            z-index: 1;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-text56 {
            z-index: 1;
            align-self: center;
            text-align: center;
          }
          .contact-text57 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            z-index: 1;
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-container23 {
            display: contents;
          }
          .contact-contact1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            background-color: #d6cfc7;
          }
          .contact-container24 {
            width: 80%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-buttonradius);
            flex-direction: column;
            background-color: var(--background_base);
          }
          .contact-container25 {
            width: 100%;
            height: var(--dl-layout-size-medium);
          }
          .contact-container26 {
            display: contents;
          }
          .contact-max-width2 {
            width: 100%;
            align-self: center;
            margin-top: 10rem;
            align-items: flex-start;
            margin-bottom: 10rem;
          }
          .contact-section-title1 {
            gap: var(--dl-layout-space-unit);
            width: 40%;
            align-items: flex-start;
          }
          .contact-text58 {
            font-family: 'WarblerDeck-Bold';
          }
          .contact-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-text59 {
            font-size: 40px;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-content2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: 8px 0;
            padding-right: 8px 0;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .contact-text60 {
            font-family: 'WarblerDeck-Bold';
          }
          .contact-row1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-row2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 60%;
          }
          .contact-container27 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-input1 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text62 {
            font-size: 18px;
            font-family: 'Amador';
          }
          .contact-text-input1 {
            border-color: var(--background_dark);
            background-color: var(--background_base);
          }
          .contact-input2 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text63 {
            font-size: 18px;
            font-family: 'Amador';
          }
          .contact-text-input2 {
            border-color: var(--background_dark);
            background-color: var(--background_base);
          }
          .contact-container28 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-input3 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text64 {
            font-size: 18px;
            font-family: 'Amador';
          }
          .contact-text-input3 {
            border-color: var(--background_dark);
            background-color: var(--background_base);
          }
          .contact-input4 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text65 {
            font-size: 18px;
            font-family: 'Amador';
          }
          .contact-select {
            color: var(--background_dark);
            width: 75%;
            border-color: var(--background_dark);
            border-width: 1px;
            background-color: var(--background_base);
          }
          .contact-container29 {
            flex: 0 0 auto;
            width: 50%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-container30 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-input5 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text66 {
            font-size: 18px;
            font-family: 'Amador';
          }
          .contact-textarea {
            text-align: center;
            border-color: var(--background_dark);
            background-color: var(--background_base);
          }
          .contact-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .contact-button2 {
            align-self: flex-start;
            border-color: var(--accent_blue);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            background-color: var(--accent_blue);
          }
          .contact-action1 {
            font-size: 18px;
            font-family: 'Amador';
            font-weight: 400;
          }
          .contact-container31 {
            color: var(--background_dark);
            width: 100%;
            height: var(--dl-layout-size-medium);
            transform: rotate(180deg);
          }
          .contact-container32 {
            display: contents;
          }
          .contact-max-width3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            overflow: visible;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-section-title2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-title {
            width: 100%;
            font-size: 50px;
            font-style: normal;
            text-align: center;
            font-family: Amador;
            font-weight: 400;
            font-stretch: normal;
            letter-spacing: -0.04em;
          }
          .contact-subtitle {
            text-align: center;
          }
          .contact-container33 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            overflow: visible;
          }
          .contact-content3 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            transform: rotate(-5deg);
            box-shadow: 5px 5px 10px 3px #adadad;
            align-items: center;
            flex-direction: column;
          }
          .contact-page1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: var(--dl-layout-radius-radius4);
            background-color: var(--background_base);
          }
          .contact-stars1 {
            fill: var(--accent_red);
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: row;
          }
          .contact-text68 {
            z-index: 1;
            text-align: center;
          }
          .contact-content4 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            transform: rotate(3deg);
            box-shadow: 5px 5px 10px 3px #adadad;
            align-items: center;
            flex-direction: column;
          }
          .contact-page2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: var(--dl-layout-radius-radius4);
            background-color: var(--background_base);
          }
          .contact-stars2 {
            fill: var(--accent_red);
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: row;
          }
          .contact-text69 {
            z-index: 1;
            text-align: center;
          }
          .contact-text70 {
            display: inline-block;
          }
          .contact-text71 {
            display: inline-block;
          }
          .contact-text72 {
            fill: var(--accent_gold);
            color: var(--accent_gold);
            display: inline-block;
          }
          .contact-text73 {
            color: var(--background_base);
            display: inline-block;
          }
          .contact-text74 {
            fill: var(--background_base);
            color: var(--background_base);
            display: inline-block;
          }
          .contact-text75 {
            color: var(--background_dark);
            display: inline-block;
          }
          .contact-text76 {
            display: inline-block;
          }
          .contact-link2 {
            display: contents;
          }
          .contact-container34 {
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
          .contact-icon39 {
            width: 24px;
            margin-right: 4px;
          }
          .contact-text77 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 991px) {
            .contact-max-width1 {
              flex-direction: column;
            }
            .contact-max-width2 {
              align-items: flex-start;
              flex-direction: column;
            }
            .contact-section-title1 {
              width: 100%;
            }
            .contact-form {
              width: 100%;
            }
            .contact-container27 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-input1 {
              width: 50%;
            }
            .contact-input2 {
              width: 50%;
              flex-direction: column;
            }
            .contact-container28 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-input3 {
              width: 50%;
            }
            .contact-input4 {
              gap: var(--dl-layout-space-halfunit);
              width: 50%;
              flex-direction: column;
            }
            .contact-container29 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-container30 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-checkbox1 {
              align-self: flex-start;
            }
            .contact-container33 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .contact-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .contact-actions {
              width: 100%;
              align-self: flex-start;
            }
            .contact-container14 {
              width: 100%;
            }
            .contact-container18 {
              width: 100%;
            }
            .contact-container20 {
              width: 100%;
            }
            .contact-max-width3 {
              padding: var(--dl-layout-space-threeunits);
            }
            .contact-section-title2 {
              width: 100%;
              max-width: 800px;
            }
            .contact-container33 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact-button1 {
              width: 100%;
            }
            .contact-text60 {
              text-align: center;
            }
            .contact-form {
              padding: var(--dl-layout-space-unit);
            }
            .contact-container27 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-input1 {
              width: 100%;
            }
            .contact-input2 {
              width: 100%;
            }
            .contact-container28 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-input3 {
              width: 100%;
            }
            .contact-max-width3 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
