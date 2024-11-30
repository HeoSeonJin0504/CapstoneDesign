import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Style = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 2px;

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
    font-size: 1.2em; /* 글씨 크기 조정 */
    padding: 10px 20px; 
    border-radius: 10px; /* 모서리를 둥글게 */
    transition: background-color 0.5s, color 0.5s; /* 전환 애니메이션 */
  }

  a.active {
    border: 2px solid #ccc; /* 테두리 추가 */
    border-bottom: none;
    background-color: #e0e0e0; /* 배경색 */
  }

  a:hover {
    background-color: #e0e0e0; /* 마우스 오버 시 배경색 변경 */
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
  const location = useLocation();

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <Style>
      <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
        <h1>Main</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/introduce" className={location.pathname === "/introduce" ? "active" : ""}>
            <h1>소개</h1>
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/get-started" className={location.pathname === "/get-started" ? "active" : ""}>
              <h1>실습하기</h1>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink to="/team" className={location.pathname === "/team" ? "active" : ""}>
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
            <NavLink to="/login" className={location.pathname === "/login" ? "active" : ""}>
              <h1>로그인</h1>
            </NavLink>
          )}
        </li>
      </ul>
    </Style>
  );
};

export default Header;