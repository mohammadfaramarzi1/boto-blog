import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import sanitizeHTML from "sanitize-html";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";

function AuthorPage() {
  const { slug } = useParams();
  const { data, error, loading } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });

  console.log({ data });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHTML(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {data.author.name}
          </Typography>
          <Grid container mt={2} mb={2} spacing={2}>
            {data.author.post.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  coverPhoto={post.coverPhoto}
                  title={post.title}
                  slug={post.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
