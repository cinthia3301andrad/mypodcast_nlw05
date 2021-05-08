import { Header } from "../components/Header/index";

import { GlobalStyle } from "../styles/global";
import { Wrapper } from "../styles/app";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PlayerContextProvider>
        <GlobalStyle />
        <Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Wrapper>
      </PlayerContextProvider>
    </>
  );
}

export default MyApp;
