import { products } from "../../mocks"
import { CardProduct } from "../../components/CardProduct"

import { Main } from "./styles"

export const Home = () => {
  return (
    <section className="container">
      <h1>Produtos</h1>
      <Main>
        <CardProduct products={products} />
      </Main>
    </section>
  )
}
