import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import CreateMovie from "./pages/Movie/Create";
import PopularMovie from "./pages/Movie/Popular";
import NowPlayingMovie from "./pages/Movie/NowPlaying";
import TopRated from "./pages/Movie/TopRated";

import theme from "./utils/constants/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/Movie/Detail";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRated />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
