import styled from "styled-components";
import { color } from "../theme";

const Style = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.15);
  margin-top: 2px;

  color: ${color.lightGray};
  font-size: 1.1em;

  padding: 5px 0;
`;

const Footer = () => {
  return (
    <Style>
      <p>@ 2024 물로이조. All rights reserved</p>
    </Style>
  );
};

export default Footer;