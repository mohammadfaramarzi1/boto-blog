import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";

function HomePage() {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  console.log({ loading, error, data });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={3} mt={4}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقاله ها
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
