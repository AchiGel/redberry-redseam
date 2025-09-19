import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import ProductsLayout from "./layouts/ProductsLayout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <ProductsLayout />
      </div>
    </QueryClientProvider>
  );
};

export default App;
