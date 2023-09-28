import { Fragment } from "react";
import Home from "../../components/Dashboard/Home";
import Navbar from "../../components/Dashboard/Navbar";

const Dashboard = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />
        </Fragment>
    )
}

export default Dashboard;