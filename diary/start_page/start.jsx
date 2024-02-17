import classes from "./start.module.css"
import Header from "./start_comp/header"
import Login from "./start_comp/login"
import Signup from "./start_comp/signup"
import NoLogin from "./start_comp/no_login"
import { Outlet } from "react-router-dom"


const Start = () => {
  return (
    <div className={classes.app_wrapper}>
      <Header />
      <main className={classes.main}>
        <div className={classes.item}>
          <div className={classes.wrapper}>
            <Login />
            <Signup />
          </div>
        </div>
          <div className={classes.item}>
            <NoLogin text="Продолжить без входа" />
          </div>
      </main>
      <Outlet/>
    </div>

  )
}

export default Start