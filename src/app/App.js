import React, {useEffect} from "react";
import Home from "./views/Home/Home";
import {useDispatch} from "react-redux";
import {getData} from "./views/Home/actions";
import "../assets/index.css";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <Home/>
  );
}

export default App;
