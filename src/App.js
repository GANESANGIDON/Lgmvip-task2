import React, {useState} from "react";
import appStyles from "./app.module.css";

function App() {

  const [userData, setUserData] = useState([]);
   
  const fetchData = async function() {
    const url = "https://reqres.in/api/users/";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data.data);
};

return (
  <div>
    <div className={appStyles.navBar}>
      <h2 className={appStyles.navBrand}>LGM-TASK 2</h2>
      <button onClick ={fetchData} className={appStyles.navButton}>Get Users</button>
    </div>
    <h2 id={appStyles.containerHeading}>User Data</h2>
    <div className={appStyles.container}>
      {userData.map(function(user){
        return(
          <div className={appStyles.card}>
            <img src={user.avatar} key = {user.avatar} className={appStyles.image} alt="img" />
            <h3 className={appStyles.userName} key ={user.first_name}  >{user.first_name} {user.Last_name}</h3>
            <p className={appStyles.mailId} key = {user.email} >{user.email}</p>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default App;
