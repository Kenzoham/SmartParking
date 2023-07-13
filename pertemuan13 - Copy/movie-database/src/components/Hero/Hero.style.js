// Hero.style.js
import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;

  display: flex;
  flex-direction: column;
  text-align: center;

  > div:nth-child(1) {
    margin-bottom: 1rem;

    > h2 {
      color: #f72585;
      margin-bottom: 1rem;
      font-size: 2.44rem;
    }

    > h3 {
      color: #b5179e;
      margin-bottom: 1rem;
      font-size: 1.59rem;
    }

    > p {
      color: #64748b;
      margin-bottom: 1.8rem;
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div:nth-child(2) > img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    > div:nth-child(2) {
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    > div:nth-child(1) {
      flex-basis: 40%;
    }

    > div:nth-child(2) {
      flex-basis: 60%;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default StyledHero;
