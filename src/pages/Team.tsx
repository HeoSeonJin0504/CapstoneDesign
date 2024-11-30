import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  min-height: 100vh; /* 최소 높이 설정, 푸터 고정 */
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 2.5em; /* 제목 크기 증가 */
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  gap: 30px; /* 간격 증가 */
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px; /* 패딩 증가 */
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 250px; /* 카드 너비 증가 */
  text-align: center;
`;

const MemberRole = styled.p`
  margin-bottom: 15px; /* 마진 증가 */
  font-size: 1.5em; /* 글꼴 크기 증가 */
  color: #666;
`;

const MemberDescription = styled.p`
  font-size: 1.2em; /* 글꼴 크기 증가 */
  color: #333;
`;

const Team = () => {
  const teamMembers = [
    {
      role: "AI, 백엔드 관리",
      description: "임희진",
    },
    {
      role: "DB, 서버 개발",
      description: "송진우",
    },
    {
      role: "프론트엔드",
      description: "허선진",
    },
    {
      role: "HW 관리, 디자인",
      description: "김소희",
    },
  ];

  return (
    <Container>
      <Title>팀원 소개</Title>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <MemberCard key={index}>
            <MemberRole>{member.role}</MemberRole>
            <MemberDescription>{member.description}</MemberDescription>
          </MemberCard>
        ))}
      </TeamContainer>
    </Container>
  );
};

export default Team;