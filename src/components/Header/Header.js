import React from "react";
import { Wrapper, LogoImg, Inner } from "../CommonComponenst";
import Projectorlogo from "./logo.png";
import { Link } from 'react-router-dom';
import { Button, Flex } from 'antd';

const Header = () => (
  <>
    <Wrapper>
      <Inner>
        <a href="/">
          <LogoImg src={Projectorlogo} alt={"projector"} />
        </a>
        <Flex gap="small" wrap="wrap">
          <Link to="/" activeClassName="active">
            <Button size="large">Home</Button>
          </Link>
          <Link to="/Catalog" activeClassName="active">
            <Button size="large">Catalog</Button>
          </Link>
          <Link to="/Cart" activeClassName="active">
            <Button size="large">Cart</Button>
          </Link>
        </Flex>
      </Inner>
    </Wrapper>
  </>
);

export default Header;
