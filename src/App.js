import React, {useState} from 'react';
import LoginForm from './components/forms/LoginForm';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "123456"
  }

  const [user, setUser] = useState({name:"", email: ""});
  const [error, setError] =useState({password:""});

  
   const Login = details => {
     console.log(details);

     if (details.email === adminUser.email && details.password === adminUser.password){
       console.log("Logged in");
       setUser({
         name: details.name,
         email: details.email
       });
    } else {
      console.log("Details do not match!");
    }
   } 

  const Logout = () => {
   setUser({name:"", email:""});
   setError ({password:""});
  }


  return (
    <div className="App">
      {(user.email !=="") ? (
      <div className="welcome">
        <h4>Welcome,<span>{user.name}</span></h4>
        <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
