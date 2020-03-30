var express =require('express');
var userprofile =require('../utilities/userprofile')
var router = express.Router();
 var app = express();
 app.set('view engine', 'ejs');

var bodyParser= require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
const fetch = require('node-fetch');

/**
* @swagger
* /api/v1/savedConnections:
*   get:
*     description: request all trips
*     responses:
*       '200':
*         description: OK
*/

router.get('/',function(req,res){

res.send(userprofile.completeuserconnection) ;
})

/**
* @swagger
* /api/v1/savedConnections:
*   post:
*     description: add a trip
*     parameters:
 *       - name: connection
 *         in: formData
 *         type: string
 *         required: true
 *       - name: rsvp
 *         in: formData
 *         type: string
 *         required: true
 *       - name: triptopic
 *         in: formData
 *         type: string
 *         required: true
 *       - name: TripId
 *         in: formData
 *         type: string
 *         required: true   
 *     
*     responses:
*       '200':
*         description: OK
*/

router.post('/', (req,res) => {
console.log("body: ", req.body);
  userprofile.addtosc(req.body.connection,req.body.rsvp,req.body.triptopic,req.body.TripId)
  res.send(userprofile.completeuserconnection) ;


});

/**
* @swagger
* /api/v1/savedConnections:
*   delete:
*     description: delete an particular trip
*     parameters:   
 *       - name: TripId
 *         in: formData
 *         type: string
 *         required: true
*     responses:
*       '200':
*         description: OK
*/

router.delete('/', (req, res) =>{
    console.log("delete api lo : ", req.body.TripId);
 userprofile.deletetosc(req.body.TripId);
 res.send(userprofile.completeuserconnection) ;
});

/**
* @swagger
* /api/v1/savedConnections:
*   put:
*     description: update an particular trip
*     parameters:
 *       - name: connection
 *         in: formData
 *         type: string
 *         required: true
 *       - name: rsvp
 *         in: formData
 *         type: string
 *         required: true   
*     responses:
*       '200':
*         description: OK
*/
router.put('/', (req, res) =>{
    console.log("put: ", req.body.connection,req.body.rsvp);
    userprofile.updatetosc(req.body.connection,req.body.rsvp);
    res.send(userprofile.completeuserconnection) ;
    
});

/**
* @swagger
* /api/v1/savedConnections:
*   patch:
*     description: update an particular trip
*     parameters:
 *       - name: connection
 *         in: formData
 *         type: string
 *         required: true
 *       - name: rsvp
 *         in: formData
 *         type: string
 *         required: true   
 *       - name: TripId
 *         in: formData
 *         type: string
 *         required: true
 *       - name: triptopic
 *         in: formData
 *         type: string
 *         required: true 
*     responses:
*       '200':
*         description: OK
*/

router.patch('/', (req, res) =>{
  console.log("patch: ", req.body.connection,req.body.rsvp,req.body.TripId,req.body.triptopic);
  userprofile.fullupdatetosc(req.body.connection,req.body.rsvp,req.body.TripId,req.body.triptopic);
  res.send(userprofile.completeuserconnection) ;
  
});



module.exports = router;



