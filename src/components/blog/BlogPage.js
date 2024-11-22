import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import sanitizeHTML from "sanitize-html";

function BlogPage() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });

  console.log({ data });

  if (loading) return <Loader />;
  if (error) return <h3>Error...</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            {data.post.title}
          </Typography>
          <Link to={-1}>
            <ArrowBackIosNewOutlinedIcon sx={{ color: "#1976d2" }} />
          </Link>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHTML(data.post.content.html)}}></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
