var React= require('react');
var ReactDOM=require('react-dom');

var {hashHistory,Route, Router, IndexRoute}=require('react-router')

var ChildNewWave=React.createClass({

  getInitialState: function() {
    return (
      {
        data: {waveName: " ", waveType:" ",Location:" ",NumberOfParticipants:" ",plannedStartDate:" ",plannedEndDate:" "}
      })
    },

  changeName: function(e){
    this.state.data.waveName=e.target.value;
  },

  changeType: function(e){
    this.state.data.waveType=e.target.value;
  },

  changeLocation: function(e){
    this.state.data.Location=e.target.value;
  },

  changeParticipants: function(e){
    this.state.data.NumberOfParticipants=e.target.value;
  },

  changeStartDate: function(e){
    this.state.data.plannedStartDate=e.target.value;
  },

  changeEndDate: function(e){
    this.state.data.plannedEndDate=e.target.value;
  },

  sendtoParent: function(){
    this.props.wave(this.state.data);
  },

  render: function(){
    return (
      <div id="Box">
      <input type="text" className="form-control" placeholder='Batch Name.' id='searchBox' onChange={this.changeName}/>
      <input type="text" className="form-control" placeholder='Batch Type.' id='searchBox' onChange={this.changeType}/>
      <input type="text" className="form-control" placeholder='Location.' id='searchBox' onChange={this.changeLocation}/>
      <input type="text" className="form-control" placeholder='Number of Participants' id='searchBox' onChange={this.changeParticipants}/>
      <input type="date" className="form-control" placeholder='Planned Start Date' id='searchBox' onChange={this.changeStartDate}/>
      <input type="date" className="form-control" placeholder='Planned End Date' id='searchBox' onChange={this.changeEndDate}/>
      <input type="button" className="btn btn-primary btn-medium"  id='searchButton'  value="Create Wave" onClick={this.sendtoParent}/>
      </div>
    )
  }
})

module.exports=ChildNewWave;
