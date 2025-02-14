import styled from "styled-components"

export const CardContainer = styled.div`
  color: #fff;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 40px 20px;
    background-color: hsla(260, 93%, 11%, 1);

    p:nth-child(3) {
      align-self: flex-end;
      color: hsla(134, 32%, 56%, 1);
    }

    button {
      padding-block: 1rem;
      width: 100%;
      background-color: hsla(261, 68%, 49%, 1);

      border-radius: 4px;
      color: #fff;
    }
  }
`;