// Outlet => vêm do react router
// é uma configuração que lembra muito um "espaço reservado" para as nossas páginas/rotas serem carregadas ali

import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export const MainPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}
