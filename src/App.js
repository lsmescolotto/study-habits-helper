import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Routes />
      <Toaster />
    </main>
  );
};

export default App;
