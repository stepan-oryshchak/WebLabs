import React from "react";
import {
  HeadingText,
  Image,
  DiffInner,
  DiffWrapper,
} from "./Heading.styled";
import ProjectorPNG from "./projector.png";
import { Button, Flex } from 'antd';

const Heading = () => {
  return (
    <DiffWrapper>
      <DiffInner>
        <Image src={ProjectorPNG} alt="projector"/>
        <HeadingText>
          <h1>Projector is transport</h1>
          <h4>
            Projectors are a versatile mode of transportation, offering numerous
            advantages. They are sustainable, cost-effective, and promote
            personal well-being. In this text, we'll explore the various facets
            that make projectors an efficient and eco-friendly choice for
            commuting.
          </h4>
          <Flex gap="small" wrap="wrap"><Button size='large'>Read more</Button></Flex>
        </HeadingText>
      </DiffInner>
    </DiffWrapper>
  );
};

export default Heading;
