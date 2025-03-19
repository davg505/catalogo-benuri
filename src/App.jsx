import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes"; // Verifique se o nome e o caminho estão corretos

const App = () => {
  return (
    <BrowserRouter basename="/catalogo-benuri">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App; // ✅ Use 'export default' ao invés de 'export { App }'