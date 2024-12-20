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
`;

const Button = styled(NavLink)`
  display: inline-block;
  margin-top: 50px;
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

interface HomeProps {
  user: { name: string; id: string } | null;
}

const Home = ({ user }:HomeProps) => {
  return (
    <Style>
      <h1>아이들 그림을 통해 이야기를 생성해 보세요!</h1>
      <p className="bodytext">
        아이들 그림을 저장하고, 그림을 업로드하면 이야기를 생성할 수 있습니다.
      </p>
      {user ? (
        <Button to="/get-started">실습하기</Button>
      ) : (
        <Button to="/login">로그인</Button>
      )}
    </Style>
  );
};

export default Home;