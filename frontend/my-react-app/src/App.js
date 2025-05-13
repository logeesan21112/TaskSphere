/*
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddTask from './pages/AddTask'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"82vh"}}>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/add' element={<AddTask/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
*/

/*
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Homee";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
			</Routes>
		</div>
	);
}

export default App;
*/


import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- Add this

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      setUser(null); // make sure it is null on error
    } finally {
      setLoading(false); // done loading
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <div>Loading...</div>; // or your <Loader /> component

  return (
    <Routes>
      {/* Unauthenticated Routes */}
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />

      {/* Authenticated Routes */}
      <Route
        path="/*"
        element={user ? <MainLayout user={user} /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;




