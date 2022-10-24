import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WPContext } from "../provider/Provider";

const SinglePost = () => {
  const [post, setPost] = useState<any>();
  const params = useParams();
  const wp = useContext(WPContext);

  useEffect(() => {
    axios
      .get(`${wp.wordpressLink}/wp-json/wp/v2/posts/${params.postId}`)
      .then((res) => setPost(res.data));
  });

  return (
    <Box>
      <Heading>{params.postId}</Heading>
      {post ? (
        <Box
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          mb={"5rem"}
        />
      ) : null}
    </Box>
  );
};

export default SinglePost;
