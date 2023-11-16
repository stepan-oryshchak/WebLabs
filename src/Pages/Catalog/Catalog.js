import React from "react";
import ProjectorItems from "../../components/ProjectorItems/ProjectorItems";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import projector1 from "./ProjPhotos/projector1.png";
import projector2 from "./ProjPhotos/projector2.png";
import projector3 from "./ProjPhotos/projector3.png";
import projector4 from "./ProjPhotos/projector4.png";
import projector5 from "./ProjPhotos/projector5.png";
import projector6 from "./ProjPhotos/projector6.png";

const projectorData = [
  {
    id: 1,
    name: "Projector1",
    price: 1100,
    feature: "High Definition",
    type: "Home",
    imageSrc: projector1,
  },
  {
    id: 2,
    name: "Projector2",
    price: 1200,
    feature: "Portable Design",
    type: "Portable",
    imageSrc: projector2,
  },
  {
    id: 3,
    name: "Projector3",
    price: 1000,
    feature: "Stationary Mode",
    type: "Stationary",
    imageSrc: projector3,
  },
  {
    id: 4,
    name: "Projector4",
    price: 900,
    feature: "Home Cinema Experience",
    type: "Home",
    imageSrc: projector4,
  },
  {
    id: 5,
    name: "Projector5",
    price: 100,
    feature: "Compact and Lightweight",
    type: "Portable",
    imageSrc: projector5,
  },
  {
    id: 6,
    name: "Projector6",
    price: 3770,
    feature: "Professional Presentation",
    type: "Stationary",
    imageSrc: projector6,
  },
];

const Catalog = () => {
  return (
    <div>
      <CatalogFilter />
      <ProjectorItems data={projectorData} />
    </div>
  );
};

export default Catalog;
