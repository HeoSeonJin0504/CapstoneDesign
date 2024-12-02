import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../theme";

// 컨테이너 스타일 정의
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 20px;
`;

// 왼쪽 컨테이너 스타일 정의
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

// 오른쪽 컨테이너 스타일 정의
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

// 본문 내용을 감싸는 폼
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  width: 40vw;
  height: 40vh;
`;

// 기본 파일 선택 스타일 숨기기
const FileInput = styled.input`
  display: none;
`;

// 버튼 컨테이너
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; 
  margin-top: 20px;
`;

// 버튼
const Button = styled.button`
  padding: 15px;
  text-decoration: none;
  background: #abb7b7;
  border: 2px solid #abb7b7;
  font-weight: bold;
  border-radius: 7px;
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
  }
`;

// 이미지 미리보기 스타일 정의
const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

// 동화 제목 스타일 정의
const StoryTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #343a40;
`;

// 동화 내용 스타일 정의
const StoryContent = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  color: #343a40;
`;

const GetStarted = () => {
  // 선택된 이미지 파일과 미리보기 URL을 저장할 상태 변수
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [storyTitle, setStoryTitle] = useState<string | null>(null);
  const [storyContent, setStoryContent] = useState<string | null>(null);

  // 파일 선택 시 호출되는 함수
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyzeClick = async () => {
    if (!selectedImage) {
      alert("이미지를 먼저 업로드 해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage as Blob);

    try {
      const response = await fetch("http://localhost:8000/image-upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result.filename, result.story_name, result.story_content);
      alert(result.filename + " / " + result.story_name + " / " + result.story_content);
      setStoryTitle(result.story_name);
      setStoryContent(result.story_content);
    } catch (error) {
      console.error("Error:", error);
      alert("이미지 분석에 실패했습니다.");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Form>
          {imagePreview && (
            <ImagePreview src={imagePreview} alt="Selected file preview" />
          )}
        </Form>
        <ButtonContainer>
          <label htmlFor="fileInput" aria-label="이미지 선택">
            <Button as="span">사진 열기</Button>
          </label>
          <FileInput
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <Button onClick={handleAnalyzeClick}>동화 생성</Button>
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <Form>
        <StoryTitle>이미지를 업로드해서 동화를 생성해 주세요!{storyTitle || ""}</StoryTitle>
        <StoryContent>{storyContent || ""}</StoryContent>
        </Form>
        {storyTitle && storyContent && (
          <ButtonContainer>
            <Button>점자 생성</Button>
          </ButtonContainer>
        )}
      </RightContainer>
    </Container>
  );
};

export default GetStarted;
