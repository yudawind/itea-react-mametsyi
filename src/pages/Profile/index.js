import styled from "styled-components";
import { SelectedFilms } from "../../features/films/SelectedFilms";
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
        <img src={user.img} alt="ava" />
        <h2>{user.name}</h2>
        <p>{user.description}</p>
      </ProfileCard>

      <SelectedFilms />
    </>
  );
};
