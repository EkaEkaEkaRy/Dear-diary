import Header from "./main_comp/header_m"
import Nav from "./main_comp/nav"
import Left from './main_comp/left'
import s from "./main.module.css"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

const Main = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

    return (
      // здесь я передаю имя пользователя в name в компонент header в качестве props
      <div className={s.app_wrapper}> 
        <Header className={s.header} name="Name"/> 
        <main>
          <Left />
        </main>
      </div>
    )
  }

export default Main
