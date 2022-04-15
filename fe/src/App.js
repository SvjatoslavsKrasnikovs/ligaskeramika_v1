import {useEffect} from "react";
import {Header} from './components/Header.js';

let App = () => {
  useEffect(()=>{
    fetch('http://localhost:5000/api/test',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))

  },[])

  return(
    <Header>Header</Header>
    //<Navbar>Navbar</Navbar>
    //<Section>Section</Section>
    //<Footer>Footer</Footer>
  )
}

export default App;
