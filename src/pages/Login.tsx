import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../theme";
import { useState } from "react";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  height: 100vh;
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
