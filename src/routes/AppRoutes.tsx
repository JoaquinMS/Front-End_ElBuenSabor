import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import SobreNosotros from "../pages/SobreNosotros/SobreNosotros"
import IniciarSesion  from "../pages/IniciarSesion/IniciarSesion"



const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/sobrenosotros' element={<SobreNosotros/>}> </Route>
        <Route path='/iniciarsesion' element={<IniciarSesion/>}> </Route>     
    </Routes>
  )
}

export default AppRoutes