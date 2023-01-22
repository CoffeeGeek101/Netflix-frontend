import style from "./app.css"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import SignIn from "./pages/signIn/SignIn";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

const App = () => {
  const user = true;
  return (
      <Router>
        <Routes>
          <Route path="/" 
          element={user ? <Home/> : <Navigate to="/register" replace/>}/>
          <Route path="/register" 
          element={!user ? <Register/> : <Navigate to="/" replace/>} />
          <Route path="/signin"
           element={!user ? <SignIn/> : <Navigate to="/" replace />}/>
          { user && 
           <>
           <Route path="/movies" element={<Home type="movies"/>} />
           <Route path="/series" element={<Home type="series"/>} />
           </>
          }
        </Routes>
      </Router>
  );
};

export default App;