import { HeaderContainer } from "./styles"
import Logo from "/logo.png"
import IconCart from '/icon-cart.png'
import { Link } from "react-router-dom"

const menu = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Produtos", href: "/products" },
  { name: "Perguntas frequentes", href: "/asked" },
  { name: "Fale conosco", href: "/talk" },
];

export const Header = () => {
  return (
    <HeaderContainer>
      <div className='container'>
        <div>
          <Link to='/'>
            <img src={Logo} alt="Logo da empresa Dev em Dobro" />
          </Link>

          <nav>
            <ul>
              {menu.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.href}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Link to='/login'>Entrar ou cadastrar-se</Link>
            <Link to='/cart'>
              <img src={IconCart} alt="Ícone do carrinho de compras" />
            </Link>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};
