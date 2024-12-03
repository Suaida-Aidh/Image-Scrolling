import React from "react";
import "./Example.css";
import logo from "../images/logo.png";
import Image1 from "../images/image1.webp";
import Image2 from "../images/image2.webp";
import Image3 from "../images/image3.webp";
import Image4 from "../images/image4.webp";
import Image5 from "../images/image5.webp";

const Example = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} className="logo-img" />
        <a href="contact-us" className="button is-navbar w-inline-block">
        <div className="contact">Talk to us</div>
        <div className="button-hover"></div>
      </a>
      </div>
      
      <div className="home-header-block is-work">
        <h2 className="heading-phase">
          Dive into the
          <span className="span-gradient"> work.</span>
        </h2>
        <p className="work-paragraph">
          As creatives ourselves, we know that what you really want to see is
          the work we've actually put live. Here's a showcase of some of our
          recent projects,across a range of sectors.
        </p>
      </div>

      <div className="home_div_in_grid">
        {/* first one */}
        <div className="home_dive-in_image">
          <img src={Image1} loading="lazy" className="image_sticky is-first" />
        </div>

        <div className="home_dive-in_content">
          {/* listed pilled items */}
          <div className="pill_list">
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Development</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">UI/UX Design</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Training</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Graphic design</div>
            </div>
          </div>
          <h2 className="heading-style-h2 text-color-white">Hacien</h2>
          <p>
            HACIEN is a premium tequila brand supplying high-end hospitality and
            retail locations worldwide. They approached Phunk to undertake a
            comprehensive design project comprising web, packaging and marketing
            assets as well as 3D renders of their signature bottles.
          </p>
          <div className="course"> See full case study</div>
          <div className="home-div-in_link-icon w-embed"></div>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" />
        </div>

        {/* second image */}
        <div className="home_dive-in_image">
          <img src={Image2} loading="lazy" className="image_sticky is-first" />
        </div>

        <div className="home_dive-in_content">
          {/* listed pilled items */}
          <div className="pill_list">
            <div className="pill-item">
              <div className="pill-item-inner">Splash Screens</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Illustrations</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Graphic Design</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Lottie Animations</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Training</div>
            </div>
          </div>
          <h2 className="heading-style-h2 text-color-white">Mobilleo</h2>
          <p>
            Mobilleo is a SaaS solution making it easy for organisations to
            manage global business travel for their employees. The team at
            Mobilleo approached Phunk to provide a range of design and
            illustration services, building on their existing brand, for use
            across their website and app.
          </p>
          <div className="course"> See full case study</div>
          <div className="home-div-in_link-icon w-embed"></div>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" />
        </div>

        {/* Third image */}
        <div className="home_dive-in_image">
          <img src={Image3} loading="lazy" className="image_sticky is-first" />
        </div>

        <div className="home_dive-in_content">
          {/* listed pilled items */}
          <div className="pill_list">
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Development</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">UI/UX Design</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Training</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Graphic design</div>
            </div>
          </div>
          <h2 className="heading-style-h2 text-color-white">Mannson Freight</h2>
          <p>
            Mannson Freight operates import and export consolidation services
            involving sea freight. They engaged Phunk to rebrand their corporate
            identity and develop a new higher-performance website, as well as a
            custom-built portal — MFS Pro— including ongoing support. assets as
            well as 3D renders of their signature bottles.
          </p>
          <div className="course"> See full case study</div>
          <div className="home-div-in_link-icon w-embed"></div>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" />
        </div>

        {/* fourth image */}
        <div className="home_dive-in_image">
          <img src={Image4} loading="lazy" className="image_sticky is-first" />
        </div>

        <div className="home_dive-in_content">
          {/* listed pilled items */}
          <div className="pill_list">
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Development</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">UI/UX Design</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Training</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Graphic design</div>
            </div>
          </div>
          <h2 className="heading-style-h2 text-color-white">BOX iQ</h2>
          <p>
            BOXiQ Performance Center in Dubai is a globally recognised boxing
            gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with
            Phunk, they now have a high-quality digital presence to match the
            prestige of their brand.
          </p>
          <div className="course"> See full case study</div>
          <div className="home-div-in_link-icon w-embed"></div>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" />
        </div>

        {/* fifth image */}
        <div className="home_dive-in_image">
          <img src={Image5} loading="lazy" className="image_sticky is-first" />
        </div>

        <div className="home_dive-in_content">
          {/* listed pilled items */}
          <div className="pill_list">
            <div className="pill-item">
              <div className="pill-item-inner">Webflow Development</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Visual Identity</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Packaging</div>
            </div>
            <div className="pill-item">
              <div className="pill-item-inner">Apparel & Merchandise</div>
            </div>
          </div>
          <h2 className="heading-style-h2 text-color-white">
            The Honest Watch Dealer
          </h2>
          <p>
            The Honest Watch Dealer is a luxury watch expert renowned for his
            popular YouTube channel, as well as founding The Luxury Watch
            Company. Charlie (his real name) engaged Phunk to develop a brand
            identity for his channel, with applications across a range of
            merchandise.
          </p>
          <div className="course"> See full case study</div>
          <div className="home-div-in_link-icon w-embed"></div>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" />
        </div>
      </div>
    </div>
  );
};

export default Example;
