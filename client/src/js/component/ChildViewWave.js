var React=require('react')

var ChildViewWave=React.createClass({
  render: function(){
      return (
        <div className="jumbotron">
        <h3>waveName : {this.props.data.waveName}</h3>
        <h3>waveType : {this.props.data.waveType}</h3>
        <h3>Location : {this.props.data.Location}</h3>
        <h3>NumberOfParticipants : {this.props.data.NumberOfParticipants}</h3>
        <h3>plannedStartDate : {this.props.data.plannedStartDate}</h3>
        <h3>plannedEndDate : {this.props.data.plannedEndDate}</h3>
        </div>
      );
    }
});
module.exports=ChildViewWave;
