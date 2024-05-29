// Exercise:
// 1. Create a React function component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
function HelloEarth ({b}) {
    return (
        <div className="flex flex-col">
      <h1>Hello, {b}</h1>
      <h6>This React component is made by a function declaration, we call it a function component</h6>
    </div>
    )
}

export default HelloEarth;