import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, error, data } = useQuery(GET_POST_COMMENTS, {
    variables: {
      slug,
    },
  });

  console.log(data);

  if (loading) return <Loader />;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>
      </Grid>
      {!data.comments.length ? (
        <Typography
          component="p"
          variant="p"
          fontWeight={700}
          color="#f50057"
          mr={2}
        >
          کامنتی برای این پست ثبت نشده است.
        </Typography>
      ) : (
        data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            key={comment.id}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center" mb={3}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} mr={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default Comments;
