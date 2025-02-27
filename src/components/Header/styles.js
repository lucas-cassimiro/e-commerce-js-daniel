import styled from "styled-components"

export const HeaderContainer = styled.header`
  border-bottom: 1px solid hsla(261, 68%, 49%, 1);
  padding: 20px 0;

  color: #fff;

  div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    
    }

    div a:first-child {
        padding: 1rem 2rem;
        background-color: hsla(261, 68%, 49%, 1);
        border-radius: 4px;
    }
  }

  nav ul {
    display: flex;
    gap: 40px;
  }
`;
