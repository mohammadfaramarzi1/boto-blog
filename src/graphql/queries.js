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
      id
      slug
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      id
      name
      slug
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      name
      avatar {
        url
      }
      field
      description {
        html
      }
      post {
        id
        slug
        title
        coverPhoto {
          url
        }
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          name
          field
        }
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { comments: { Post: { slug: $slug } } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_BLOG_INFO,
  GET_POST_COMMENTS,
};
