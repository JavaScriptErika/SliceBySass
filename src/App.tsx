import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import Cards from "./components/cards/Cards";
import Footer from "./components/layout/Footer";

// Initialze the client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Hero />
      <Cards />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
