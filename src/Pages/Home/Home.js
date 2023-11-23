import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import HomeItems from "../../components/HomeItems/HomeItems";
import HomeProjector from "./projectors/HomeProjector.png";
import PortableProjector from "./projectors/PortableProjector.png";
import StationaryProjector from "./projectors/StationaryProjector.png";
import TimeProjector from "./projectors/TimeProjector.png";
import WallProjector from "./projectors/WallProjector.png";
import PocketProjector from "./projectors/PocketProjector.png";
import { ViewMore } from "./Home.styled";
import { Button, Flex } from 'antd';

const defaultData = [
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

const extraData = [
  {
    title: "TimeProjector",
    description: "A projector designed to display time-related information with accuracy and clarity.",
    imageSrc: TimeProjector,
  },
  {
    title: "WallProjector",
    description: "A projector designed to display high-definition images on walls with exceptional clarity.",
    imageSrc: WallProjector,
  },
  {
    title: "PocketProjector",
    description: "A compact and portable projector, perfect for on-the-go presentations or entertainment.",
    imageSrc: PocketProjector,
  },
];

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  
  const handleViewMore = () => {
    setShowMore(true);
  };

  const combinedData = showMore ? [...defaultData, ...extraData] : defaultData;

  return (
    <div>
      <Heading />
      <HomeItems data={combinedData} />
      <ViewMore>
        <Flex gap="small" wrap="wrap">
          {!showMore && (
            <Button type="primary" size='large' onClick={handleViewMore}>View More</Button>
          )}
        </Flex>
      </ViewMore>
    </div>
  );
};

export default Home;
