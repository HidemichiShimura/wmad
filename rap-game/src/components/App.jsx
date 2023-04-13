import { createGlobalStyle } from "styled-components";

import { Content } from "../components";

const GlobalStyle = createGlobalStyle`
  h1, ul, li {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  body {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #121212;
    color: white;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Content />
      </div>
    </>
  );
}
