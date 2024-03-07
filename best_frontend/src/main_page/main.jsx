import Header from "./main_comp/header_m"
import Nav from "./main_comp/nav"
import Left from './main_comp/left'
import s from "./main.module.css"

const Main = () => {
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
