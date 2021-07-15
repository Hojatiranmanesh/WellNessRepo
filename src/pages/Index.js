import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const Index = () => {
  const [login, setLogin] = useState();
  useEffect(() => {
    if (localStorage.getItem("jwt") === null || localStorage.getItem("jwt") === "") {
      setLogin(false)
    }
  }, [])
  if (login === false) {
    return (<Redirect to={"/login"} />)
  }
  return (<div> index </div>);
};
export default Index;