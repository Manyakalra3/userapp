import gql from 'graphql-tag';
export const GET_DATA_FROM_GRAPHQL_API = gql`
  query FetchData {
      user{   
    login
    id
    avatar_url
  }
  }
`; 