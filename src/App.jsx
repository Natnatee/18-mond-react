import { useState} from "react";
import ProductList from "./components/Home_Sector/User_Home_Sector";
import ProductForm from "./components/Home_Sector/Admin_Home_Sector";

function App ({ products, setProducts }) {

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