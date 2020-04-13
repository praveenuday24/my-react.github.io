import React , {Component} from "react";
import AccountDashboard from "../../container/AccountDashboard/AccountDashboard";
import './Layout.css';

class Layout extends Component{
    render(){
        return(
        <div className="dashboard-conatiner"> 
            <AccountDashboard></AccountDashboard>
        </div>
        )
    }
}
export default Layout; 