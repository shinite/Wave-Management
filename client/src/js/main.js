var React= require('react');
var ReactDOM=require('react-dom');
var Home= require('./component/Home')
var Navbar=require('./component/Navbar')
var NewWave=require('./component/NewWave')
var ViewWave=require('./component/ViewWave')
var {hashHistory,Route, Router, IndexRoute}=require('react-router')

var Main=React.createClass({
  render: function() {
    return (
      <div>
      <Navbar/>
      {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/newwave" component={NewWave}/>
      <Route path="/viewwave" component={ViewWave}/>
    </Route>  
  </Router>,document.getElementById('content')
);
