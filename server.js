
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://washr-data.firebaseio.com"
});


var database = admin.database();


var ref = database.ref('/orders/');
var childref = ref.push();
console.log("new random key returned by firebase", childref.key);
childref.set({orderStatus: "in process"})

var ancestorRef = database.ref('/orders/')
ancestorRef.once('value').then(d => {
    var obj = d.val();
    console.log(Object.keys(obj))
});
