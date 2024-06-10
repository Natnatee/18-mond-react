import { useContext } from "react";
import { ThemeContext, Context2 } from "./ComponentContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-10 justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
};

function Context() {
  return (
    <Context2>
      <ThemedComponent />
    </Context2>
  );
}

export default Context;