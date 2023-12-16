import { Inner, Wrapper } from "../CommonComponenst";
import styled from "styled-components";

export const ProjectorInner = styled(Inner)`
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 24vw;
  max-height: 100%;
  button {
    margin: 20px
  }
`;

export const ProjectorWrapper = styled(Wrapper)`
  margin: 0;
  width: 100%;
  border-radius: 2px;
  height: auto;
`;

export const ProjectorImage = styled.img`
  align-self: center;
  margin-top: 10px;
  max-height: 11vw;
`;

export const ProjectorName = styled.h2`
  font-size: 2vw;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const ProjectorText = styled.h5`
  font-size: 1.4vw;
  font-weight: 600;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  align-items: center;
  span {
    color: #696969;
    font-weight: 500;
  }
`;

export const ProjectorPrice = styled(ProjectorText)`
  display: flex;
  justify-content: space-between;
`;

export const ProjectorItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22%, 1fr));
  max-width: 97%;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 3vw;
  margin-top: 30px;
  margin-bottom: 40px;
`;
