import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../theme";
import { useState } from "react";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;

  h1 {
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  margin-bottom: 8px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2em;
`;

const Select = styled.select`
  flex: 1;
  margin-bottom: 8px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2em;
`;

const CheckButton = styled.button`
  margin-left: 10px;
  padding: 15px;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  font-size: 1em;
  background-color: white;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    /* 추가 스타일을 원하면 여기에 작성 */
  }
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
    /* 추가 스타일을 원하면 여기에 작성 */
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

const EmailInput = styled.input`
  flex: 1;
  margin-bottom: 8px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2em;
  width: 50%;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("gmail.com");

  const handleCheckDuplicate = async () => {
    // 중복 확인 버튼
    try {
      const response = await fetch('http://localhost:8000/check-duplicate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: username }),
      });

      const result = await response.json();
      if (result.exists) {
        alert("이미 있는 아이디입니다.");
      } else {
        alert("가입 가능한 아이디입니다.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('중복 확인에 실패했습니다. 서버 Error!');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // 회원가입 버튼
    e.preventDefault();

    if (!username) {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!confirmPassword) {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }

    const emailAddress = email ? `${email}@${emailDomain}` : '';

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: username, password, name, email: emailAddress }),
      });

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버 Error!');
    }
  };

  return (
    <Style>
      <h1>회원가입</h1>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <CheckButton type="button" onClick={handleCheckDuplicate}>
            중복확인
          </CheckButton>
        </InputContainer>
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputContainer>
          <EmailInput
            type="text"
            placeholder="[선택] 이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ margin: "0 5px" }}>@</span>
          <Select value={emailDomain} onChange={(e) => setEmailDomain(e.target.value)}>
            <option value="gmail.com">gmail.com</option>
            <option value="naver.com">naver.com</option>
            <option value="daum.net">daum.net</option>
            <option value="kakao.com">kakao.com</option>
            <option value="none">없음(선택안함)</option>
          </Select>
        </InputContainer>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        <Link to="/login">로그인</Link>
      </LinkContainer>
    </Style>
  );
};

export default SignUp;