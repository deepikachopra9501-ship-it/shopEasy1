import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <h1>ShopEasy</h1>

            <p>Current Theme: {theme}</p>

            <button onClick={toggleTheme}>
                Change Theme
            </button>
        </div>
    );
}

export default App;
