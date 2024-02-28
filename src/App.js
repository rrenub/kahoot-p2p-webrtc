import './App.css';
import HomeContainer from "./components/home/HomeContainer";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
