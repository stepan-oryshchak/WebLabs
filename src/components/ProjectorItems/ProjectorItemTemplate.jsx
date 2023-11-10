import React from "react";
import { ProjectorImage, ProjectorInner, ProjectorName, ProjectorPrice, ProjectorText, ProjectorWrapper } from "./ProjectorItems.styled";
import { Button, Flex } from 'antd';
import DefaultProjector from "./projectordefault.svg";

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
        <ProjectorImage src={imageSrc} />
        <ProjectorName>{name}</ProjectorName>
        <ProjectorText>Type: <span>{type}</span></ProjectorText>
        <ProjectorText>Feature: <span>{feature}</span></ProjectorText>
        <ProjectorPrice>Price:<div style={{ marginRight: "20px" }}>{price}$</div></ProjectorPrice>
        <Flex gap="small" wrap="wrap"><Button size="large" exact to={`/Catalog/${id}`}>View more</Button></Flex>
      </ProjectorInner>
    </ProjectorWrapper>
  );
};

export default ProjectorItemTemplate;
