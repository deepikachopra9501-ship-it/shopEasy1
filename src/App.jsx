
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Cart from "./components/Cart";
import "./App.css";

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <button className="theme-button" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>

            <Cart />
        </div>
    );
}

export default App;
