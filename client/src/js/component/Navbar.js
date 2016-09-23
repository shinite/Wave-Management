//Navigation Bar
var React=require('React');
var {Link}=require('react-router')
var NavLink=require('./NavLink')

var Navbar=React.createClass({

  render:  function(){
    return(
      <div className="container-fluid" id="navbaar">
      <div className="row">
      <div className="col-md-12">
      <ul className="nav nav-pills">
      <li>
      <NavLink to="/home">Home</NavLink>
      </li>
      <li>
      <NavLink to="/newwave">New Wave</NavLink>
      </li>
      <li>
      <NavLink to="/viewwave" >View Waves</NavLink>
      </li>
      <li className="pull-right">
      <a href="#">Log in</a>
      </li>
      </ul>
      </div>
      </div>
      </div>
    )
  }
})

module.exports=Navbar;
