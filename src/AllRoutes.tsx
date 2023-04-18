import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Post from "./pages/Post";
import BPP from "./pages/BPP/BPP";
import KUDT from "./pages/KUDT/KUDT";
import Senator from "./pages/senator/senator";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="bpp" element={<BPP />} />
      <Route path="kudt" element={<KUDT />} />
      <Route path="senator" element={<Senator />} />
      <Route path="about" element={<About />} />
      <Route path="post" element={<Post />} />
      <Route path="post/:postId" element={<SinglePost />} />
    </Routes>
  );
};

export default AllRoutes;
