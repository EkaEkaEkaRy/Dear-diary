import Header from "./main_comp/header_m"
//import Nav from "./main_comp/nav"
import Left from './main_comp/left'
import s from "./main.module.css"
//import { useEffect, useState } from "react"
//import { Navigate } from "react-router-dom"

const Main = () => {
  /*
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem(authenticated);
    console.log(loggedInUser)
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
    }, []);
    
  if (!authenticated) {
    return <Navigate replace to="/srart" />;
  } else {
    */
    return (
      <div className={s.app_wrapper}> 
        <Header className={s.header}/> 
        <main>
          <Left />
        </main>
      </div>
    )
  }
export default Main
