import { CardContainer } from "./styles"

export const CardProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <CardContainer key={product.id}>
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
      ))}
    </>
  )
}
