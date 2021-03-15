import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [randomUsers, setUsers] = useState([])
  useEffect(() =>{
    fetch("https://randomuser.me/api?results=10")
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])
  console.log(randomUsers);

  const hideDisplay = () =>{
    const hide = document.getElementById("userContainer");
    hide.style.display="none"
    console.log('tur call me');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>total user: {randomUsers.length}</h1>

        {
          randomUsers.map(user => <Users userInfo = {user} key = {user.cell}></Users>)
        }
        
      </header>
    </div>
  );
}
function Users (props){

  const userStyel = {
    border:"1px solid red",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    width: "450px",
    height: "300px",
    float:'left',
    lineHeight:'15px'
  }
  return(
    <div  style = {userStyel}>
     <h2>{props.userInfo.name.title} {props.userInfo.name.fast} {props.userInfo.name.last}</h2>
       <h4>Email: {props.userInfo.email}</h4>
       <h4>Phone: {props.userInfo.phone}</h4>
      <img style = {{borderRadius: "50%"}} src={props.userInfo.picture.large} alt=""/>
    </div>
  )
}
export default App;
