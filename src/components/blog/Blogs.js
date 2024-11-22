import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, error, data });

  return <div>Blogs</div>;
}

export default Blogs;
