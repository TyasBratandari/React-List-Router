import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Gallery from "./Gallery"
import Cart from "./Cart";
import Pegawai from "./Pegawai";
class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/cart" component={Cart} />
                <Route path="/pegawai" component={Pegawai} />
            </Switch>
        )
    }
}
export default Main;
