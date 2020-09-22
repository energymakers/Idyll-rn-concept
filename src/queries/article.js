import gql from 'graphql-tag';

const ARTICLE_QUERY = gql`
  query Lessons($id: ID!) {
    lesson(id: $id) {
      id
      title
      content
      image {
        url
      }
      module {
        id
        name
      }
    }
  }
`;

export default ARTICLE_QUERY;
