var mongoose=require('mongoose')
var schema=mongoose.Schema;

var waves=new schema({
  waveName: String,
  waveType: String,
  Location: String,
  NumberOfParticipants: Number,
  plannedStartDate: String,
  plannedEndDate: String,
  actualStartDate:String,
  actualEndDate:String,
  ParticipantsMovingOut: Number
})
module.exports=mongoose.model('MyWave',waves);
