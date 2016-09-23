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

        <div id>

        <h2 id="wavehead">Insert New Wave</h2>

        <div id="Box">
        <form className="form-horizontal">

        <div className="form-group" >
        <label className="col-lg-4 control-label" for="inputName">Batch Name</label>
        <div className="col-lg-8">
        <input type="text" className="form-control" placeholder='Enter the Batch Name.' id='searchBox' onChange={this.changeName}/>
        </div>
        </div>

        <div className="form-group" >
        <label className="col-lg-4 control-label" for="inputName">Batch Type</label>
        <div className="col-lg-8">
        <input type="text" className="form-control" placeholder='Enter the Batch Type.' id='searchBox' onChange={this.changeType}/>
        </div>
        </div>

        <div className="form-group" >
        <label className="col-lg-4 control-label" for="inputName">Location</label>
        <div className="col-lg-8">
        <input type="text" className="form-control" placeholder='Enter the Location.' id='searchBox' onChange={this.changeLocation}/>
        </div>
        </div>

        <div className="form-group" >
        <label className="col-lg-4 control-label" for="inputName">No. of Participants</label>
        <div className="col-lg-8">
        <input type="text" className="form-control" placeholder='Enter the Number of Participants' id='searchBox' onChange={this.changeParticipants}/>
        </div>
        </div>

        <div className="form-group" >
        <label className="col-lg-4 control-label" for="inputName">Start Date</label>
        <div className="col-lg-8">
        <input type="date" className="form-control" placeholder='Planned Start Date' id='searchBox' onChange={this.changeStartDate}/>
        </div>
        </div>

        <div className="form-group" >
        <label className="col-lg-4 control-label" for="inputName">End Date</label>
        <div className="col-lg-8">
        <input type="date" className="form-control" placeholder='Planned End Date' id='searchBox' onChange={this.changeEndDate}/>
        </div>
        </div>

        </form>

        <div id="wavehead">
        <input type="button" className="btn btn-primary btn-medium"  id='searchButton'  value="Create Wave" onClick={this.sendtoParent}/>
        </div>
        </div>

        </div>
      )
    }
  })

  module.exports=ChildNewWave;
