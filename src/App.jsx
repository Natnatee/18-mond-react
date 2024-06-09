import { useState} from "react";
import "./App.css";
import ProductList from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import ProductForm from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";

function App () {
  const [products, setProducts] = useState([])

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const checkOne = () => {
    setFirst(true);
    setSecond(true);
  };

  const checkTwo = () => {
    setFirst(true);
    setSecond(false);
  };

  return (
    <div className="flex flex-col  ">
      <div className=' text-6xl font-extrabold text-center'>Generation Thailand</div>
      {first ? second ? <div className=' text-6xl font-extrabold text-center'>Home - User Sector</div>
                      : <div className=' text-6xl font-extrabold text-center'>Home - Admin Sector</div> 
                      : <div className=' text-6xl font-extrabold text-center'>React-Assessment</div>}
      <div className="flex justify-evenly py-11">
                        <button onClick={checkOne} className="text-lg font-bold shadow-md p-3">User Home Sector</button>
                        <button onClick={checkTwo} className="text-lg font-bold shadow-md p-3">Admin Home Sector</button>
      </div>

      {first ? second ? <ProductList products={products} />:  <ProductForm products={products} setProducts={setProducts} /> : <div></div>}
    </div>
  );
}
export default App;