import gql from 'graphql-tag';

const MODULES_QUERY = gql`
  query Modules {
    modules {
      id
      name
      description
      lessons {
        id
        title
        excerpt
        image {
          url
        }
      }
    }
  }
`;

export const SINGLE_MODULE_QUERY = gql`
  query Modules($id: ID!) {
    module(id: $id) {
      id
      name
      description
      lessons {
        id
        title
        excerpt
        image {
          url
        }
      }
    }
  }
`;

export default MODULES_QUERY;
