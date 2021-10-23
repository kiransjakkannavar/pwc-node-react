import React, { useState, useEffect } from "react";
import { Container, Header } from 'semantic-ui-react'
import SearchHeader from "./components/SearchHeader";
import UserTable from "./components/Table";
import { randomUserService } from '../src/services/random-user-service';


function App() {
  const [users, setUsers] = useState([]);
  const [inMemoryUsers, setInMemoryUsers] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchIndex, setSearchIndex] = useState([]);


  // get the users list
  const fetchUsers = () =>{
    randomUserService.getRandomUsers(onSuccess, onFailure);
  }

  const getAllValues = (user, allValues) => {
    if(!allValues){
      allValues = [];
    }
    // looping over each object
    for(const key in user){
      if(typeof user[key] === 'object'){

        // In case of nested objects -- recursive function
        getAllValues(user[key], allValues)
      }else{
        allValues.push(user[key] + '');
      }
    }
    return allValues;
  }



  useEffect(()=>{
    setLoading(true);
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

    // success callback
  const onSuccess = (response) => {
    setUsers(response?.users)
    setInMemoryUsers(response?.users)

    // Holds the array of each object values converted to a string 
    const searchInd = users.map(user => {
      const allValues = getAllValues(user);
      return {allValues:allValues?.toString()}
    })

    setSearchIndex(searchInd)
    setLoading(false);
  };

  // failure callback
  const onFailure = (error) => {
    setLoading(false);
   alert(error.message)
  };

  useEffect(()=>{
    if(searchVal){
      const requestedData = searchIndex.map((eachSearchedUser, index)=>{
        if(eachSearchedUser?.allValues?.toLowerCase()?.indexOf(searchVal.toLowerCase()) >=0){
          return inMemoryUsers[index]
        }
        return null;
      })

      setUsers(requestedData.filter((eachData)=>{
        if(eachData){ 
          return true;
        }
        return false;
      }))

      console.log(users, 'userss')
    }else{
      setUsers(inMemoryUsers)
    }

  },[searchVal, inMemoryUsers, searchIndex])

  return (
    <Container>
      <Header size='huge'>Users Display Table</Header>
      {loading ? <Header size='medium'> Loading Data!!! Please Wait ...</Header> : null}
     {!loading?
    <>
      <SearchHeader onChangeText={(event) => setSearchVal(event.target.value)  }/>
      <UserTable users={users}/>
     </>: null}
    </Container>
  );
}

export default App;
