import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import App from './App.jsx';
import PageOne from "./components/page/Owner.jsx";
import PageTwo from './components/pagePractive/LayoutPractice.jsx';
import Context from './components/pagePractive/UseContext.jsx';
import Effect from './components/pagePractive/UseEffect.jsx';
import Api from "./components/pagePractive/Api.jsx";

const MainApp = () => {
  const [products, setProducts] = useState([]);

  const router2 = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Layout />
          <App products={products} setProducts={setProducts} />
        </>
      ),
    },
    {
      path: "/owner",
      element: (
        <>
          <Layout />
          <PageOne products={products} setProducts={setProducts} />
        </>
      ),
    },
    {
      path: "/practice",
      element: (
        <>
          <Layout />
          <PageTwo />
        </>
      ),
    },
    {
      path: "/practice/UseContext",
      element: (
        <>
          <Layout />
          <PageTwo />
          <Context />
        </>
      ),
    },
    {
      path: "/practice/UseEffect",
      element: (
        <>
          <Layout />
          <PageTwo />
          <Effect />
        </>
      ),
    },
    {
      path:  "/practice/Api",
      element: (
        <>
          <Layout />
          <PageTwo />
          <Api />
        </>
      ),
    },
  ]);

  
  return (
    <RouterProvider router={router2} />
  );
};

export default MainApp;