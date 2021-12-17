import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <main>
      <AnimatePresence>
        <GlobalStyle key={1} />
        <Routes key={2} />
        <Toaster position="top-right" reverseOrder={false} key={3} />
      </AnimatePresence>
    </main>
  );
};

export default App;
