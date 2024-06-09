import { useState } from 'react';

function ProductForm({ setProducts, products }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [idCount, setIdCount] = useState(0);

  const handleSubmit = (s) => {
    s.preventDefault();
    const newProduct = {
      name,
      price,
      image,
      id: idCount,
      check: true
    };
    setIdCount(idCount + 1);
    setProducts([...products, newProduct]);
    setName("");
  };

  const del = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, check: false } : product
    ));
  };

  const delAll = () => {
    setProducts ([]);
  }

  return (
    <>
      <div className=" px-12">
      <h1 className=' text-2xl font-extrabold '>Create User Here</h1>
      <form onSubmit={handleSubmit} className="mt-8 mb-12 gap-5 flex">
        <input
          type="text"
          value={name}
          onChange={(s) => setName(s.target.value)}
          placeholder="  Name"
          required
          className="border rounded mb-2 w-1/4 h-10 p-1"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="  Last Name"
          required
          className="border rounded mb-2 w-1/4 h-10 p-1"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="  Position"
          required
          className="border rounded mb-2 w-1/4 h-10 p-1"
        />
        <button type="submit" className="bg-purple-600 text-white rounded">
          Save
        </button>
      </form>
      </div>

      <div>
          <div className='flex px-10'>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Name</span>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Last Name</span>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Position</span>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Action</span>
          </div>
          {products.filter(product => product.check).map((product) => (
          <div key={product.id} className="flex px-10">
            <div className='w-1/4 text-center text-lg border border-gray-600'> {product.name}</div>
            <div className='w-1/4 text-center text-lg border border-gray-600'> {product.price}</div>
            <div className='w-1/4 text-center text-lg border border-gray-600'> {product.image}</div>
            <button onClick={() => del(product.id)} className=" text-red-500 p-2 rounded w-1/4 text-center text-lg border border-gray-600">Delete</button>
          </div>
        ))}
      </div>
      <div className='flex justify-end mr-96 my-20'><button onClick={delAll} className=' w-28 '>Delete All</button></div>
      
    </>
  );
}

export default ProductForm;