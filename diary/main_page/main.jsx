import Header from "./main_comp/header_m"
import s from "./main.module.css"

const Main = () => {
  return (
    <div className={s.app_wrapper}>
      <Header />
      <main className={s.main}>
        
      </main>
    </div>
  )
}

export default Main