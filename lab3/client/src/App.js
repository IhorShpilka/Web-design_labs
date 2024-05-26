import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Account from "./components/Account";
import MainIndex from "./components/MainIndex";
import KindInfo from "./components/KindInfo";

function App() {
    return (
        <div className="bg-body-tertiary d-flex flex-column min-vh-100">
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainIndex/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/posts/:post" element={<KindInfo />} />
                    <Route path="/germany" element={<About/>}/>
                    <Route path="/australia" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sign" element={<Sign/>}/>
                    <Route path="/account" element={<Account/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
