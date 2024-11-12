import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Style = styled.div`
  text-align: center;
  margin-top: 20px;

  h1 {
    margin-top: 150px;
    font-size: 3.5em;
  }

  .bodytext {
    margin-top: 20px;
    font-size: 1.5em;
  }

  h2 {
    margin-top: 70px;
    font-size: 2em;
  }
`;

const Button = styled(NavLink)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  font-size: 1.3em;

  &:hover {
    // 마우스 오버 시 배경색 변경
  }
`;

const Home = () => {
  return (
    <Style>
      <h1>아이들 그림을 통해 이야기를 생성해 보세요!</h1>
      <p className="bodytext">
        아이들 그림을 저장하고, 그림을 업로드하면 이야기를 생성할 수 있습니다.
      </p>
      <h2>먼저 로그인을 진행해 주세요</h2>
      <Button to="/login">로그인</Button>
    </Style>
  );
};

export default Home;
