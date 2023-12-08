import React, { createContext, useState } from 'react';
import ProjectorItems from "../../components/ProjectorItems/ProjectorItems";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import projector1 from "./ProjPhotos/projector1.png";
import projector2 from "./ProjPhotos/projector2.png";
import projector3 from "./ProjPhotos/projector3.png";
import projector4 from "./ProjPhotos/projector4.png";
import projector5 from "./ProjPhotos/projector5.png";

export const ProjectorDataContext = createContext();

export const projectorData = [
  {
    id: 1,
    name: "First Projector",
    price: 1100,
    feature: "High Definition",
    type: "Home",
    imageSrc: projector1,
    description: "The First Projector delivers high-definition images with exceptional clarity, providing an immersive home entertainment experience."
  },
  {
    id: 2,
    name: "Second Projector",
    price: 1200,
    feature: "Portable Design",
    type: "Portable",
    imageSrc: projector2,
    description: "The Second Projector offers a compact and portable design, ideal for users seeking flexibility and mobility in their projection needs."
  },
  {
    id: 3,
    name: "Third Projector",
    price: 1000,
    feature: "Stationary Mode",
    type: "Stationary",
    imageSrc: projector3,
    description: "The Third Projector comes with a stationary mode, ensuring stability and reliability for long-term projection setups."
  },
  {
    id: 4,
    name: "Fourth Projector",
    price: 900,
    feature: "Home Cinema Experience",
    type: "Home",
    imageSrc: projector4,
    description: "The Fourth Projector offers a remarkable home cinema experience, perfect for movie nights with family and friends."
  },
  {
    id: 5,
    name: "Fifth Projector",
    price: 100,
    feature: "Compact and Lightweight",
    type: "Portable",
    imageSrc: projector5,
    description: "The Fifth Projector is ultra-compact and lightweight, making it an excellent choice for on-the-go use without compromising quality."
  },
];

const Catalog = () => {
  const [filteredProducts, setFilteredProducts] = useState([...projectorData]);

  return (
    <div>
      <CatalogFilter products={projectorData} setFilteredProducts={setFilteredProducts} />
      <ProjectorItems data={filteredProducts} />
    </div>
  );
};

export default Catalog;
