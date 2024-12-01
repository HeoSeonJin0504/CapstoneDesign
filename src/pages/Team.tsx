import styled from "styled-components";
import user from "../photos/user.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  min-height: 100vh; 
`;

const Title = styled.h1`
  margin-bottom: 80px;
  font-size: 2.5em; 
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;
  gap: 30px; 
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px; 
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 250px; 
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px; 
  height: 150px; 
  border-radius: 50%; 
  margin-bottom: 20px; 
`;

const MemberRole = styled.p`
  margin-bottom: 15px; 
  font-size: 1.5em; 
  color: black;
`;

const MemberDescription = styled.p`
  font-size: 1.2em; 
  color: black;
`;

const Team = () => {
  const teamMembers = [
    {
      role: "AI, 백엔드 관리",
      description: "임희진",
      image: user, 
    },
    {
      role: "DB, 서버 개발",
      description: "송진우",
      image: user, 
    },
    {
      role: "프론트엔드",
      description: "허선진",
      image: user, 
    },
    {
      role: "HW 관리, 디자인",
      description: "김소희",
      image: user, 
    },
  ];

  return (
    <Container>
      <Title>팀원 소개</Title>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <MemberCard key={index}>
            <MemberImage src={member.image} alt={member.description} />
            <MemberRole>{member.role}</MemberRole>
            <MemberDescription>{member.description}</MemberDescription>
          </MemberCard>
        ))}
      </TeamContainer>
    </Container>
  );
};

export default Team;