import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./pages/homePage";
import PageDetail from "./pages/pagedetail";
import Login from "./pages/login";
import Register from "./pages/register";
import DetailBooking from "./pages/bookingticket";
import Footer from "./pages/homePage/footer";
import Header from "./pages/homePage/header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AdminPage from "./pages/admin";
import { fetchLocalUser } from "./service/user";
import { useSelector } from "react-redux";
import Loading from "./pages/component/Loading";

function App() {
  let user = useSelector((item) => item.userReducer.user);
  // const isAdmin = user.role;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/detail/:id" component={PageDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route
          exact
          path="/ticketbooking"
          component={!user ? Login : DetailBooking}
        />

        <Route
          path="/admin"
          component={user && user.role === "admin" ? AdminPage : Login}
          // component={AdminPage}
        />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
