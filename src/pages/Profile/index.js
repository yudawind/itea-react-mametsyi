import styled from "styled-components";
import { Video } from "../../features/films/Video";
import { useSelector } from "react-redux";

const ProfileCard = styled.header`
  img {
    width: 200px;
  }

  p {
    font-size: 20px;
  }
`;

export const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <h1>Profile</h1>

      <ProfileCard>
        <img src={user[0].img} alt="ava" />
        <h2>{user[0].name}</h2>
        <p>{user[0].description}</p>
      </ProfileCard>

      <Video />
    </>
  );
};
