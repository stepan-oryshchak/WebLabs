import React from "react";
import { Wrapper, Inner, LogoImg } from "../CommonComponenst";
import {
  MediaList,
  BrandInfo,
  FooterRectangle,
  Copyright,
} from "./Footer.styled";
import {
  Projectorlogo,
  Youtubelogo,
  Twitterlogo,
  Linkedinlogo,
  FacebookLogo,
} from "./icons/Imports";

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <a style={{ alignSelf: "center" }} href="/">
          <LogoImg src={Projectorlogo} alt={"projector"} />
        </a>
        <MediaList>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={Youtubelogo} alt={"youtube"} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={Twitterlogo} alt={"twitter"} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={Linkedinlogo} alt={"linkedin"} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={FacebookLogo} alt={"facebook"} />
          </a>
        </MediaList>
        <BrandInfo>
          <h1>About brand</h1>
          <h4>
            Info about brand. Info about brand.
          </h4>
        </BrandInfo>
      </Inner>
      <FooterRectangle />
      <Copyright>2023 IoT. Copyright all rights reserved.</Copyright>
    </Wrapper>
  );
};
export default Footer;
