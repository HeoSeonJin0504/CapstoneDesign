import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../theme";
import { useState } from "react";
import { userNameAtom, userPasswordAtom } from "../state";
import { useAtom } from "jotai";
import backgroundImage from "../photos/loginbackground.png";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;

  h1 {
    margin-top: 180px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Input = styled.input`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2em;
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 15px;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  font-size: 1.5em;
  background-color: white;
  cursor: pointer;

  &:hover {
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 400px;
  color: ${color.lightGray};

  a {
    text-decoration: none;
    color: ${color.lightGray};
  }
`;

interface LoginProps {
  setUser: (user: { name: string; id: string } | null) => void;
}

const Login = ({ setUser }: LoginProps) => {
  const [username, setUsername] = useAtom(userNameAtom);
  const [password, setPassword] = useAtom(userPasswordAtom);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      setUser({ name: "관리자", id: "admin" });
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Style>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        <Link to="/find-id">아이디 찾기</Link>
        <Link to="/find-pw">비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </LinkContainer>
    </Style>
  );
};

export default Login;
