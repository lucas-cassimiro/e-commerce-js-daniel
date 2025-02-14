import { products } from "../../mocks"
import { CardProduct } from "../CardProduct"

import { Main } from "./styles"

export const MainPage = () => {
  return (
    <section className="container">
      <h1>Produtos</h1>
      <Main>
        <CardProduct products={products} />
      </Main>
    </section>
  )
}
