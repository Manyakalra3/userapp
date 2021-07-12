import React, {Component, useState } from 'react';
import styled from 'styled-components';
const Search=({placeholder,data})=>{
    const [input,setInput]= useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange=(e)=>{
        // e.preventDefault();
        setInput(e.target.value);
    }
   
    // if(input.length>0){
    //     data=data.filter((i)=>{
    //         console.log(i.login.match(input))
    //         return (
    //             i.login.match(input))
           
            
    //     })
    // };
    React.useEffect(() => {
        const results = data.filter(i =>
          i.login.toLowerCase().includes(input)
        );
        setSearchResults(results);
      }, [input]);
    
    return(
        <>
        <form>
        <Input type="text" placeholder={placeholder}  onChange={handleChange}/>
        <Button>hii,KNOW about Me</Button>
     
        <ul>
            
        {searchResults.map(user => (
        
         <Row>
         <Heading>
            {`${user.id}->${user.login}`}
            </Heading>
            <Img src={user.avatar_url}/>
            </Row>

        ))}
        </ul>

        </form>
        </>
    )
}

const Input = styled.input`
padding:10px;
background-color:antiquewhite;
width:100%;
color:black;
font-weight:1000;
height:40px
margin-left:3px;

`
const Button = styled.div`
display:none;
`;
const Row = styled.div`
 
margin-left:20px;
width:29%;
margin-top:5%;
background-color:antiquewhite;
display:inline-block;
padding:5px;
border: 1px solid black;
padding: 4px;
box-shadow: 7px 10px #888888;
cursor:pointer;

&:hover {
    background-color:rosybrown;
    // color:antiquewhite;
    // text-shadow:5px 10px rosybrown;
}

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
export default Search;
