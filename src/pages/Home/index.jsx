import { Videos } from "../../features/films/Videos";
import { Layout } from "../../layouts/Layout";

export const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <div className="row">
        <Videos />
      </div>
    </Layout>
  );
};
