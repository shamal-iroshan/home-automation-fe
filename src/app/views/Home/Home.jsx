import React from "react";
import Login from "../../components/Login";
import Controls from "../../components/Controls";
import {useSelector} from "react-redux";

function Home() {
  const isLoggedIn = useSelector((state) => state.homeReducer.isLoggedIn);
  const devicesData = useSelector((state) => state.homeReducer.devicesData);

  return(
    <>
      {!isLoggedIn && <Login/>}
      {isLoggedIn && <Controls devicesData={devicesData}/>}
    </>
  );
}

export default Home;