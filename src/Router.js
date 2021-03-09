import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ChangePassword from "./Components/Auth/ChangePassword";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/Home/Home";
import AddMovies from "./Components/Movies/AddMovies/AddMovies";
  
  export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />


            {/* auth pages route*/}
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/forgotPassword' component={ForgotPassword}/>
                <Route path='/changePassword' component={ChangePassword}/>


            <Route path='/addMovie' component={AddMovies}/>

                <Route path='*'>
                    <div 
                        style={{
                            display : 'flex' , 
                            justifyContent: 'center' , 
                            alignItems: 'center',
                            width : '100%',
                            height: '100vh',
                        }}
                    >
                        <h1 style={{color: 'red'}}>
                            page is not found
                        </h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}