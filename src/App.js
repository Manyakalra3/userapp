import React,{useState} from 'react';
import Userlist from './components/Userlist';
import Search from './components/Search';
import SearchBar from './components/Search';
import { GET_DATA_FROM_GRAPHQL_API } from './queries/Queries'
import { useQuery } from '@apollo/client';

const App=()=>{
  const {data} = useQuery( GET_DATA_FROM_GRAPHQL_API );
  const [searchFilter, setSearchFilter] = useState('');
  if(data){
    
return(
 <>
  {/* <Search/> */}
 
  <SearchBar placeholder="SEARCH" data ={data.user}/>

  {/* <Userlist/> */}
  </>
)
  }
  else{
    return(
    <h2>Loadingggg....</h2>
    )
  }
}
export default App;