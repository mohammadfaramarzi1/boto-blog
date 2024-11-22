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
          <Grid container></Grid>
          {data.author.post.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  boxShadow: "rgba(0,0,0, 0.1) 0px 4px 12px",
                  borderRadius: 4,
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      src={data.author.avatar.url}
                      sx={{ marginLeft: 2 }}
                    />
                  }
                  title={
                    <Typography
                      component="p"
                      variant="p"
                      color="text.secondary"
                    >
                      {data.author.name}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={post.coverPhoto.url}
                  alt={post.slug}
                />
                <CardContent>
                  <Typography
                    component="h3"
                    variant="h6"
                    color="text.primary"
                    fontWeight={600}
                  >
                    {post.title}
                  </Typography>
                </CardContent>
                <Divider variant="middle" sx={{ margin: "10px" }} />
                <CardActions>
                  <Link
                    to={`/blogs/${post.slug}`}
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%", borderRadius: 3 }}
                    >
                      مطالعه مقاله
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
