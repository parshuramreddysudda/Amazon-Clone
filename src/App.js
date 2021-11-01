import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import { ToastContainer, toast } from 'react-toastify';
import Login from './Components/Login'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './Components/Login/firebase';


function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser.multiFactor.user.email
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
        dispatch({
          type: "RESET_BASKET",
          basket: []
        })
      }
    })

    return () => {
      unSubscribe()
    }

  }, [])

  return (

    <Router>

      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <ToastContainer />
      </div>

    </Router>
  );
}

export default App;
