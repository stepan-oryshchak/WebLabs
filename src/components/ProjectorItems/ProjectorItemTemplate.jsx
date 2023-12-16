import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex } from 'antd';
import DefaultProjector from "./projectordefault.svg";
import { ProjectorImage, ProjectorInner, ProjectorName, ProjectorPrice, ProjectorText, ProjectorWrapper } from "./ProjectorItems.styled";

const ProjectorItemTemplate = ({
  id,
  name = "Some Projector",
  price = 0,
  type = "No type",
  imageSrc = DefaultProjector,
  feature = "No special feature",
}) => {
  return (
    <ProjectorWrapper>
      <ProjectorInner>
        <ProjectorImage src={imageSrc} alt={name} />
        <ProjectorName>{name}</ProjectorName>
        <ProjectorText>Type: {type}</ProjectorText>
        <ProjectorText>Feature: {feature}</ProjectorText>
        <ProjectorPrice>Price: {price}$</ProjectorPrice>
        <Flex gap="small" wrap="wrap">
          <Link to={`/Catalog/${id}`} state={{ id, name, price, type, imageSrc, feature }}>
            <Button size="large">View more</Button>
          </Link>
        </Flex>
      </ProjectorInner>
    </ProjectorWrapper>
  );
};

export default ProjectorItemTemplate;
