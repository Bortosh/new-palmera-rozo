import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar/SidebarContainer"
import HeaderContainer from "./components/header/HeaderContainer"
import Layout from "./generalPalmeras/Layout"
import FooterContainer from "./components/footer/FooterContainer"
import styles from './app.module.css'
import routes from "./routes"

function App() {

  return (
    <>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', maxWidth: '100%' }}>
          <HeaderContainer />
          <div className={styles.app}>
          <Sidebar />
            <Routes>
              <Route path="/" element={<Layout />} >
                {
                  routes.map(({ id, index, path, element }) => (
                    <Route key={id} path={path} element={element} {...(index ? { index: true } : {})} />
                  ))
                }
              </Route>
            </Routes>
          </div>
        </div>
        <FooterContainer />
      </BrowserRouter>
    </>
  )
}

export default App
