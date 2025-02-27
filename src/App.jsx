import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes'
import { GlobalStyle } from './styles/globals'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App

// Rotas no React => react router dom - [X]
// Rotas dinâmicas no React com useParams do React router - []

// O que são rotas? 
// - Rota é um caminho, uma direção que vai te levar pra algum lugar
// - A rota é uma direção/caminho que vai te levar pra uma outra página do nosso site ou seção

// O que são rotas dinâmicas?
// - Rotas dinâmicas são rotas que vão receber um parâmetro na sua URL, obter esse parâmetro e fazer alguma coisa com ele
// YOUTUBE => milhões de usuários (canais do YOUTUBE)
// Rotas dinâmicas vão ser componentes que já vão estar preparados para receber esses dados e renderizar conforme o local correto
