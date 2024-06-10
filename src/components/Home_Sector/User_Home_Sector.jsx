

function ProductList ({products}) {
    return (
      <div>
          <div className='flex justify-center'>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Name</span>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Last Name</span>
            <span className='w-1/4 text-center text-lg font-bold border border-gray-600 bg-slate-200'>Position</span>
          </div>
          {products.filter(product => product.check).map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className='w-1/4 text-center text-lg border border-gray-600'> {product.name}</div>
            <div className='w-1/4 text-center text-lg border border-gray-600'> {product.price}</div>
            <div className='w-1/4 text-center text-lg border border-gray-600'> {product.image}</div>
          </div>
        ))}
      </div>
    )
}

export default ProductList;