import styled from "styled-components";
import { NavLink } from "react-router-dom";
import backgroundImage from "../photos/homebackgroundtest.png";

const Style = styled.div`
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
  background-position: center;
  height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;

  h1 {
    margin-top: 150px;
    font-size: 3.5em;
    background: rgba(255, 255, 255, 0.6); 
    padding: 10px; 
    border-radius: 10px;
    display: inline-block; 
  }

  .bodytext {
    margin-top: 20px;
    font-size: 1.5em;
    background: rgba(255, 255, 255, 0.6); 
    padding: 10px;
    border-radius: 10px; 
    display: inline-block; 
  }

  .cards {
    display: flex;
    justify-content: center;
    margin: 0 20px;
    margin-bottom: 40px;
    gap: 4em;
    flex-wrap: wrap;
    margin-top: 100px; 
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 20%;
    min-width: 200px;
    padding: 20px;
    line-height: 1.5em;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    position: relative;
    opacity: 0;
    animation: fadeIn 3s ease forwards; 
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  .card h1 {
    font-weight: 600;
    margin-top: 10px;
    font-size: 1.5em;
  }

  .card p {
    font-size: 1em;
    color: #555;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    animation: jittery 4s infinite;
  }

  @keyframes jittery {
    5%,
    50% {
      transform: scale(1);
    }

    10% {
      transform: scale(0.9);
    }

    15% {
      transform: scale(1.15);
    }

    20% {
      transform: scale(1.15) rotate(-5deg);
    }

    25% {
      transform: scale(1.15) rotate(5deg);
    }

    30% {
      transform: scale(1.15) rotate(-3deg);
    }

    35% {
      transform: scale(1.15) rotate(2deg);
    }

    40% {
      transform: scale(1.15) rotate(0);
    }
  }
`;

interface HomeProps {
  user: { name: string; id: string } | null;
}

const Home = ({ user }: HomeProps) => {
  return (
    <Style>
      <h1>아이들 그림을 통해 이야기를 생성해 보세요!</h1>
      <p className="bodytext">
        아이들 그림을 저장하고, 그림을 업로드하면 이야기를 생성할 수 있습니다.
      </p>
      {user ? (
        <Button to="/get-started" className="btn btn-primary">실습하기</Button>
      ) : (
        <Button to="/login" className="btn btn-primary">로그인</Button>
      )}
      <div className="cards">
        <div className="card">
          <h1 className="title">특징1</h1>
          <p>설명1</p>
        </div>
        <div className="card">
          <h1>특징 2</h1>
          <p>설명2</p>
        </div>
        <div className="card">
          <h1>특징3</h1>
          <p>설명3</p>
        </div>
      </div>
    </Style>
  );
};

export default Home;