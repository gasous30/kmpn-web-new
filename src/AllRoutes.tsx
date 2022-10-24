import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Post from "./pages/Post";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="post" element={<Post />} />
      <Route path="post/:postId" element={<SinglePost />} />
    </Routes>
  );
};

export default AllRoutes;
