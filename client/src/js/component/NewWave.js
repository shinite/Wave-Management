var React= require('react');
var ReactDOM=require('react-dom');
var ChildNewWave=require('./ChildNewWave');
var {hashHistory,Route, Router, IndexRoute}=require('react-router')

var NewWave=React.createClass({

  NewWave:function(Mydata){
    console.log(Mydata);
    $.ajax({
      url: "http://localhost:8085/wave/add",
      dataType: 'json',
      type:"POST",
      cache: false,
      data:Mydata,
      success: function()
      {
        alert("New Wave successfully Created")
        console.log("yes");
        console.log("successfully sent");
      },
      error: function(xhr, status, err) {
        alert("New Wave Not Submitted")
        console.error("http://localhost:8085/wave/add", status, err.toString());
      }
    });
  },


  render: function(){
    return (
      <div>
      <ChildNewWave  wave={this.NewWave} />
      </div>
    )}

  })

  module.exports=NewWave;
