import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Style = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);

  ul,
  ul li,
  ul li a {
    display: flex;
    align-items: center;
    height: 100%;
  }

  ul {
    gap: 60px;
    z-index: 1000;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
    position: relative;
  }
}
`;

const Header = () => {
  return (
    <Style>
      <NavLink to="/">
        <h1>물론이조!</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/introduce">
            <h1>소개</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/get-started">
            <h1>실습하기</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/team">
            <h1>팀원</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <h1>로그인</h1>
          </NavLink>
        </li>
      </ul>
    </Style>
  );
};

export default Header;
