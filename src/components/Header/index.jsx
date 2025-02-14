import { HeaderContainer } from "./styles";
import Logo from "/logo.png";

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
          <img src={Logo} alt="Logo da empresa Dev em Dobro" />

          <nav>
            <ul>
              {menu.map((menu, index) => (
                <li key={index}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <a>Entrar ou cadastrar-se</a>
            <a>
              <img src="" alt="" />
            </a>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};
