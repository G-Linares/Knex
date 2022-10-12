import React from "react";
import ProductList from "./components/ProductList";
import Chat from "./components/Chat";

const App = () => {
  return (
    <>
      <section className="p-4 flex justify-center">
        <ProductList />
      </section>
      <section className="p-4 flex justify-center">
        <Chat />
      </section>
    </>
  );
};

export default App;
