import React from 'react';
// import { Query } from "react-a

import styled from 'styled-components';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
   import { GET_DATA_FROM_GRAPHQL_API } from '../queries/Queries'
import SearchBar from './Search';
// const Userlist = ({ user }) => (
//     <Query query={GET_DATA_FROM_GRAPHQL_API}>
//     {({ loading, error, data }) => {
//       if (loading) return "loading"
//       if (error)
//         return (
//           <div>{`There was an error fetching the data ${error.message}`}</div>
//         );
//       console.log(data);
//       return (
        
//           <div>
           
//               {data.user.map((item, i) => (
                
//                   <h2 >{item.login}</h2>
                
               
//               ))}
           
         
//         </div>
//       );
//     }}
//   </Query>
// )

const Userlist= ()=> {
    const { loading, error, data } = useQuery(GET_DATA_FROM_GRAPHQL_API);
    //console.log(data);
  //  <SearchBar placeholder ="search" data={data}/>
    // return <div>{data}</div>
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( ${error.message} </p>;
       
        // const listItems = data.map((user) => <li key={user.login}>{user.login}</li>
    return (
      <>
       {/* { data.map((user) => {<li key={user.login}>{user.login}</li>}}, */}
        
       {data.user.map((user) => (
                 <Row>
                   <Heading>
                      {`${user.id}->${user.login}`}
                      </Heading>
                      <Img src={user.avatar_url}/>
                      </Row>
                      
       ))}
                  
       </>
      
    );
    // return data;
  }
  const Row = styled.div`
 
  margin-left:20px;
  width:29%;
margin-top:5%;
  background-color:antiquewhite;
  display:inline-block;
  padding:5px;
  border: 1px solid black;
  padding: 4px;
  box-shadow: 5px 10px #888888;
  cursor:pointer;
  `;
const Img=styled.img`
width:80%;

margin-left:24px;
padding-bottom:20px;
`;
 const Heading=styled.h2`
 text-shadow: 2px 2px #7FFFD4;
 align-items:center;
 text-transform:uppercase;
 `;
  export default Userlist;