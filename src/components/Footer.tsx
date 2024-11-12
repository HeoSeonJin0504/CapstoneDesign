import styled from "styled-components";
import { color } from "../theme";

const Style = styled.footer`
  /* 화면의 아래에 위치하게 설정 */
  position: fixed;
  bottom: 0;
  width: 100%;
  
  /* Footer 위에 구분선 추가 */
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.15);

  /* Footer의 요소를 화면의 가운데(좌우 기준)로 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

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