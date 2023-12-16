import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import HomeItems from "../../components/HomeItems/HomeItems";
import { ViewMore, Loader } from "./Home.styled";
import HomeProjector from "./projectors/HomeProjector.png";
import PortableProjector from "./projectors/PortableProjector.png";
import StationaryProjector from "./projectors/StationaryProjector.png";
import TimeProjector from "./projectors/TimeProjector.png";
import WallProjector from "./projectors/WallProjector.png";
import PocketProjector from "./projectors/PocketProjector.png";
import { Button, Flex } from 'antd';


const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [projectorsFromBackend, setProjectorsFromBackend] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchProjectorsFromBackend();
  }, []);

  const fetchProjectorsFromBackend = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/projector-types');
      if (response.ok) {
        const data = await response.json();
        setProjectorsFromBackend(data);
        setLoading(false);
      } else {
        throw new Error('Failed to fetch projectors');
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error('Error fetching projectors:', error);
    }
  };

  const handleViewMore = () => {
    setShowMore(true);
  };

  const updatedProjectors = projectorsFromBackend.map((projector) => ({
    ...projector,
    imageSrc: HomeProjector,
  }));

  const combinedData = showMore ? [...defaultData, ...extraData, ...updatedProjectors] : [...defaultData, ...updatedProjectors.slice(0, 3)];

  return (
    <div>
      <Heading />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <HomeItems data={combinedData} />
      )}
      <ViewMore>
        <Flex gap="small" wrap="wrap">
          {!showMore && (
            <Button type="primary" size='large' onClick={handleViewMore}>View More</Button>
          )}
        </Flex>
      </ViewMore>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Home;