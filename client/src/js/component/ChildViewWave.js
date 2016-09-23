var React=require('react')

var ChildViewWave=React.createClass({

  DeleteMovie: function(){
  console.log("inside delete");
  this.props.changeState(this.props.data.waveName);
  },
  render: function(){
    return (
      <div className="jumbotron">
      <h3>waveName : {this.props.data.waveName}</h3>
      <h3>waveType : {this.props.data.waveType}</h3>
      <h3>Location : {this.props.data.Location}</h3>
      <h3>NumberOfParticipants : {this.props.data.NumberOfParticipants}</h3>
      <h3>plannedStartDate : {this.props.data.plannedStartDate}</h3>
      <h3>plannedEndDate : {this.props.data.plannedEndDate}</h3>
      <input type="button" className="btn btn-primary btn-medium"  id='searchButton'  value="Delete Wave" onClick={this.DeleteMovie}/>
      </div>
    );
  }
});
module.exports=ChildViewWave;
