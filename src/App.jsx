import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes"; // Verifique se o nome e o caminho estão corretos

const App = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default App; // ✅ Use 'export default' ao invés de 'export { App }'