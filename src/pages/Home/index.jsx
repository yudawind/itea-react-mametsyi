import { Films } from "../../features/films/Films";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="row">
        <Films />
      </div>
    </>
  );
};
