import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #4cc9f0;
  padding: 1rem;
  color: #fff;
  a {
    text-decoration: none;
  }
  > nav {
    display: flex;
    flex-direction: column;
  }

  > nav > .navbar-brand {
    > h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }

  > nav > .navbar-list {
    display: flex;
    flex-direction: column;
    > ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      > li {
        margin-bottom: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    > nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    > nav > .navbar-brand {
      margin-bottom: 0;
    }

    > nav > .navbar-list {
      flex-direction: row;
      > ul {
        flex-direction: row;
        > li {
          margin: 0 1rem;
        }
      }
    }
  }
`;

export default StyledNavbar;
