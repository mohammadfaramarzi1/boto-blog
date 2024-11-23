import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation createComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        comments: { connect: { Post: { slug: $slug } } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
