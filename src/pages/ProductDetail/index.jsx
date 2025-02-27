import { useParams } from "react-router-dom"
import { products } from "../../mocks"
import { SimilarProducts } from "./styles"

export const ProductDetail = () => {
  const { id } = useParams()

  const productFiltered = products.find(
    (product) => product.id === parseFloat(id)
  )

  const similarProducts = products
    .filter((product) => product.category === productFiltered.category)
    .slice(0, 4)

  // "O que eu devo aprender de JavaScript antes de ir pro React?" 
  // => ECMASCRIPT => JavaScript / compiladores (vite, esbuild)
  // Map, filter, reduce, some, every, find, findIndex
  // Spread operator
  // Desestruturação de objetos e arrays
  // Promises

  // Typescript => 
  // Context API
  // Criar custom hooks

  console.log(similarProducts)

  return (
    <section className="container">
      <div>
        <img src={productFiltered.image} alt={productFiltered.name} />
        <p>{productFiltered.name}</p>
      </div>
      <p>Produtos semelhantes</p>
      <SimilarProducts>
        {similarProducts.map((product) => (
          <li key={product.id}><img src={product.image} alt={product.name}/></li>
        ))}
      </SimilarProducts>
    </section>
  )
}
