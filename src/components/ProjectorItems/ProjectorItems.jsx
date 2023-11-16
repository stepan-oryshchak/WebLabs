import React from "react";
import { ProjectorItemWrapper } from "./ProjectorItems.styled";
import ProjectorItemTemplate from "./ProjectorItemTemplate";

const ProjectorItems = ({ data = [] }) => {
    return (
        <ProjectorItemWrapper>
            {data.map((projector) => (
                <ProjectorItemTemplate
                    key={projector.id}
                    id={projector.id}
                    name={projector.name}
                    price={projector.price}
                    type={projector.type}
                    imageSrc={projector.imageSrc}
                    feature={projector.feature}
                />
            ))}

        </ProjectorItemWrapper>
    );
};

export default ProjectorItems;
