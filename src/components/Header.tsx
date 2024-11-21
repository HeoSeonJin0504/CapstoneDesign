import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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
`;

const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  width: 150px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.3em; /* 버튼 글씨 크기 조정 */

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface HeaderProps {
  user: { name: string; id: string } | null;
  setUser: (user: { name: string; id: string } | null) => void;
}

const Header = ({ user, setUser }: HeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

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
        {user && (
          <li>
            <NavLink to="/get-started">
              <h1>실습하기</h1>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/team">
            <h1>팀원</h1>
          </NavLink>
        </li>
        <li>
          {user ? (
            <div style={{ position: "relative" }}>
              <h1 onClick={() => setDropdownOpen(!dropdownOpen)} style={{ cursor: "pointer" }}>
                {user.name}님
              </h1>
              {dropdownOpen && (
                <Dropdown>
                  <DropdownButton onClick={handleLogout}>로그아웃</DropdownButton>
                </Dropdown>
              )}
            </div>
          ) : (
            <NavLink to="/login">
              <h1>로그인</h1>
            </NavLink>
          )}
        </li>
      </ul>
    </Style>
  );
};

export default Header;