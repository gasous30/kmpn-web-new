import { Box, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WPContext } from "../provider/Provider";

const Post = () => {
  const [allPost, setAllPost] = useState<any[]>();
  const wp = useContext(WPContext);
  useEffect(() => {
    axios
      .get(`${wp.wordpressLink}/wp-json/wp/v2/posts`)
      .then((res) => setAllPost(res.data));
  });

  const navigate = useNavigate();
  return (
    <Box>
      {allPost
        ? allPost.map((post: any) => {
            return (
              <Grid
                m={"2rem"}
                cursor={"pointer"}
                border={"2px solid black"}
                id={post.id}
                onClick={() => navigate("/post/" + post.id)}
              >
                <Heading>{post.title.rendered}</Heading>
                <Box
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  mb={"5rem"}
                />
              </Grid>
            );
          })
        : null}
    </Box>
  );
};

export default Post;
