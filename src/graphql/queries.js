import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
  posts {
    author {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
    slug
    title
    coverPhoto {
      url
    }
  }
}
`;

export { GET_BLOGS_INFO };
