import { CardContainer } from "./styles"
import { Link } from "react-router-dom"

export const CardProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}  >
          <CardContainer>
            <img src={product.image} alt={product.name} />

            <div>
              <p>{product.name}</p>
              <div>
                <p>Cor: {product.color}</p>
                <p>Tamanho: {product.size}</p>
              </div>

              <p>R$: {product.price},00</p>
              <button type="button">Adicionar ao carrinho</button>
            </div>
          </CardContainer>
        </Link>
      ))}
    </>
  );
};
