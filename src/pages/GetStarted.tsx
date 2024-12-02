import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../theme";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 20px;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const RightContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: ${color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const LeftForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  width: 40vw;
  height: 40vh;
  text-align: center;
  justify-content: center;
  margin-top: 120px;
`;

const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  width: 40vw;
  min-height: 40vh;
  max-height: 100vh;
  text-align: center;
  justify-content: center;
  margin-top: 120px;
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

// 이미지 미리보기
const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

// 동화 제목
const StoryTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #343a40;
`;

// 동화 내용
const StoryContent = styled.p`
  font-size: 1.5em;
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
        <LeftForm>
          {imagePreview && (
            <ImagePreview src={imagePreview} alt="Selected file preview" />
          )}
        </LeftForm>
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
        <RightForm>
          {storyTitle || storyContent ? (
            <>
              <StoryTitle>{storyTitle}</StoryTitle>
              <StoryContent>{storyContent}</StoryContent>
            </>
          ) : (
            <StoryTitle>이미지를 업로드해서 동화를 생성해 주세요!</StoryTitle>
          )}
        </RightForm>
        {storyTitle && storyContent && (
          <ButtonContainer>
            <Button>점자 생성</Button>
            <Button>동화 저장하기</Button>
          </ButtonContainer>
        )}
      </RightContainer>
    </Container>
  );
};

export default GetStarted;
