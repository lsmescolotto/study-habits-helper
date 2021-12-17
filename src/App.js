import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <main>
      <AnimatePresence>
        <GlobalStyle />
        <Routes />
        <Toaster position="top-right" reverseOrder={false} />
      </AnimatePresence>
    </main>
  );
};

export default App;
