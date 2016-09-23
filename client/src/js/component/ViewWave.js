var React=require('react')
var ChildViewWave= require('./ChildViewWave')

var ViewWave=React.createClass({

  getInitialState: function(){
    return({data: []})
  },

  componentWillMount: function(){
    console.log("Get the Db");
    $.ajax({
      url: "http://localhost:8085/wave/display",
      dataType: 'json',
      type:"GET",
      async: true,
      cache: false,
      success: function(mydata)
      {
        this.setState({data : mydata});
        console.log(mydata);
      }  .bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/movie/display", status, err.toString());
      }.bind(this)
    });
  },
  render:function(){
    var movieList = this.state.data.map(function(arr) {
      return (
        <div>
          <ChildViewWave data={arr}/>
        </div>
      );
    }.bind(this));
    return (
      <div className="movieL">
      {movieList}
      </div>
    );
  }
});
module.exports=ViewWave;
