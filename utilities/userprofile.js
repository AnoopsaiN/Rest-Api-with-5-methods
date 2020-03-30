var uc = require('../model/UserConnection')

var completeuserconnection = [{
    connection: 'Paris',
    rsvp: 'maybe',
    triptopic: 'AbroadTrips',
    TripId: 't1'
  },
  {
    connection: 'Maldives',
    rsvp: 'maybe',
    triptopic: 'AbroadTrips',
    TripId: 't2'
  },
  {
    connection: 'NewYork',
    rsvp: 'maybe',
    triptopic: 'AbroadTrips',
    TripId: 't3'
  }];

  var completeuserconnectionv2 = [{
    connection: 'Araku Trekking',
    rsvp: 'maybe',
    triptopic: 'WeekendTrips',
    TripId: 't4'
  },
  {
    connection: 'St Lake Kayaking',
    rsvp: 'maybe',
    triptopic: 'WeekendTrips',
    TripId: 't5'
  },
  {
    connection: 'Nandi Hills Camping',
    rsvp: 'maybe',
    triptopic: 'WeekendTrips',
    TripId: 't6'
  }];
  
var onlyconnection =[]

function addtosc(Connection,rsvp,triptopic,TripId){

    var addtouserconnection = new uc(Connection,rsvp,triptopic,TripId);

    var a = addtouserconnection.Connection;
    var b =addtouserconnection.rsvp;
    var c =addtouserconnection.triptopic;
    var d =addtouserconnection.TripId;
    completeuserconnection.push({connection:a,rsvp:b,triptopic:c,TripId:d});
    onlyconnection.push(a);
    console.log(completeuserconnection);
    
    return completeuserconnection;
}






function updatetosc(Connection,rsvp){
console.log('aaa');
    for(var i=0; i<completeuserconnection.length ; i++){
        console.log(completeuserconnection[i].connection);
        console.log(completeuserconnection[i].rsvp);
        
        if (completeuserconnection[i].connection ==Connection){
           completeuserconnection[i].rsvp = rsvp
        }
    }

return completeuserconnection;
}

function fullupdatetosc(Connection,rsvp,tripid,triptopic){
  console.log(Connection);
  console.log(rsvp);
  console.log(triptopic);
  console.log(tripid);
      for(var i=0; i<completeuserconnection.length ; i++){
          
          if (completeuserconnection[i].TripId ==tripid){
             completeuserconnection[i].triptopic = triptopic;
             completeuserconnection[i].rsvp = rsvp;
             completeuserconnection[i].connection = Connection;
          }
      }
  
  return completeuserconnection;
  }


function deletetosc(TripId){
       console.log(TripId);
       for(var i=0; i<completeuserconnection.length; i++){
      if (completeuserconnection[i].TripId == TripId ){
          completeuserconnection.splice(i,1);
      }
       };
    }

 function deletesc(connection){
        console.log(connection);
        for(var i=0; i<onlyconnection.length; i++){
       if (onlyconnection[i] == connection ){
        onlyconnection.splice(i,1);
       }
        };
    }
 
    function getConnection(TripId){

      var RequestDetails;
    
      for(var i=0;i<completeuserconnection.length;i++){
        if(completeuserconnection[i].TripId === TripId){
          RequestDetails = completeuserconnection[i];
        }
      }

      if(RequestDetails == null){
        RequestDetails = null;
      }
      return RequestDetails;

      
}   
           




module.exports={
addtosc:addtosc,
updatetosc:updatetosc,
deletetosc:deletetosc,
deletesc:deletesc,
getConnection:getConnection,
fullupdatetosc:fullupdatetosc,
completeuserconnection:completeuserconnection,
}