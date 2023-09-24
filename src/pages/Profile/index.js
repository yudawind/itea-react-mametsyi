import styled from "styled-components";
import { Video } from "../../features/films/Video";

const ProfileCard = styled.header`
  img {
    width: 200px;
  }

  p {
    font-size: 20px;
  }
`;

export const Profile = () => {
  return (
    <>
      <h1>Profile</h1>

      <ProfileCard>
        <img src="http://yuriy.itaw.org/ava/20230816_202538.jpg" alt="ava" />
        <h2>Юрій Мамецький</h2>
        <p>Професійний ІТ-спеціаліст та програміст</p>
      </ProfileCard>

      <Video />
    </>
  );
};
