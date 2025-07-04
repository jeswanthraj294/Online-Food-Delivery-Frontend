import React, { useState } from "react";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


function App() {
  const [username,setUserName]=useState("DefaultUser")
  return (
    <Provider store={appStore} >
      <UserContext.Provider value={{loggedInUser:username, setUserName}}>
         <Header />
         <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;