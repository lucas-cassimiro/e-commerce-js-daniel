import { Routes, Route } from "react-router-dom"
import { MainPage } from "./MainPage"
import { Home } from "./Home"
import { ProductDetail } from "./ProductDetail"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}
