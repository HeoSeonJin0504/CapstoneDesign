import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../theme";

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: ${color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  background-color: ${color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-y: auto;
`;

const LeftTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #343a40;
`;

const LeftDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  height: auto;
  margin-bottom: 20px;
  border: 2px solid #343a40;
  border-radius: 10px;
`;

const Button = styled(Link)`
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #343a40;
  font-size: 1.5em;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {

  }
`;

const StepContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const RightTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
`;

const RightDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Introduce = () => {
  return (
    <Container>
      <LeftContainer>
        <LeftTitle>AI 기반 어린이 그림 동화 생성기</LeftTitle>
        <LeftDescription>
        그림을 디지털로 업로드하여 저장하고 인공지능을 활용하여<br/>
        주제를 분석해 동화를 생성하는 프로그램입니다.
        </LeftDescription>
        <Image src="src/photos/introduce.png" alt="프로그램 실행 사진" />
        <Button to="/login">로그인</Button>
      </LeftContainer>
      <RightContainer>
        <RightTitle>프로그램 사용 방법</RightTitle>
        <StepContainer>
          <RightDescription>1. 프로그램을 실행합니다.</RightDescription>
          <Image src="src/photos/introduce.png" />
        </StepContainer>
        <StepContainer>
          <RightDescription>
            2. 로그인 화면에서 아이디와 비밀번호를 입력합니다.
          </RightDescription>
          <Image src="src/photos/introduce.png" />
        </StepContainer>
        <StepContainer>
          <RightDescription>
            3. 로그인 후 다양한 기능을 탐색할 수 있습니다.
          </RightDescription>
          <Image src="src/photos/introduce.png" />
        </StepContainer>
      </RightContainer>
    </Container>
  );
};

export default Introduce;
