import React from "react";
import Heading from "../../components/Heading/Heading";
import HomeItems from "../../components/HomeItems/HomeItems";
import HomeProjector from "./projectors/HomeProjector.png";
import PortableProjector from "./projectors/PortableProjector.png";
import StationaryProjector from "./projectors/StationaryProjector.png";
import { ViewMore } from "./Home.styled";
import { Button, Flex } from 'antd';

const data_1 = [
  {
    title: "HomeProjector",
    description:
      "Sturdy and equipped for off-road trails, featuring wide, knobby tires and suspension systems.",
    imageSrc: HomeProjector,
  },
  {
    title: "PortableProjector",
    description:
      "Equipped with a motor to assist pedaling, making cycling easier, especially on hills.",
    imageSrc: PortableProjector,
  },
  {
    title: "StationaryProjector",
    description:
      "Small, strong, and ideal for tricks and stunts in skateparks and on dirt jumps.",
    imageSrc: StationaryProjector,
  },
];

const Home = () => {
  return (
    <div>
      <Heading />
      <HomeItems data={data_1} />
      <ViewMore>
        <Flex gap="small" wrap="wrap">
          <Button size='large'>Default Button</Button>
        </Flex>
      </ViewMore>
    </div>
  );
};

export default Home;
