 class qs {
  constructor(TripId,Tripname,Triptopic,details,startdate,enddate,time,place,image,username) {
    this.aTripId = TripId;
    this.aTripname = Tripname;
    this.aTriptopic =Triptopic;
    this.adetails =details;
    this.astartdate=startdate;
    this.aenddate=enddate;
    this.atime=time;
    this.aplace=place;
    this.aimage=image;
    this.ausername=username;
  }
  
  //getters and setters
  get TripId() {
    return  this.aTripId;
  }

  set TripId(TripId) {
    return  this.aTripId=TripId;
  }
  get Tripname() {
    return  this.aTripname;
  }

  set Tripname(Tripname) {
    return  this.aTripname=Tripname;
  }
  get Triptopic() {
    return  this.aTriptopic;
  }

  set Triptopic(Triptopic) {
    return  this.aTriptopic=Triptopic;
  }
  get details() {
    return  this.adetails;
  }

  set details(details) {
    return  this.adetails=details;
  }
  get startdate() {
    return  this.astartdate;
  }

  set startdate(startdate) {
    return  this.astartdate=startdate;
  }
  get enddate() {
    return  this.aenddate;
  }

  set enddate(enddate) {
    return  this.aenddate=enddate;
  }
  get time() {
    return  this.atime;
  }

  set time(time) {
    return  this.atime=time;
  }
  get place() {
    return  this.aplace;
  }

  set place(place) {
    return  this.aplace=place;
  }

  get image() {
    return  this.aimage;
  }

  set image(image) {
    return  this.aimage=image;
  }
  get username() {
    return  this.ausername;
  }

  set username(username) {
    return  this.ausername=username;
  }

  test() {
    console.log("test called");
    
  }
  
}


//var suck = new qs("t1","Paris","AbroadTrips","It will be a awesome trip to paris ,its will be 10 days trip and we will be covering all the important place in and around paris","5-25-2020","6-5-2020","20:00","Paris","./../assets/image/image2.jpg","Anoop")

module.exports = qs;