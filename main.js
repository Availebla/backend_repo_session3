//import the express library
const express = require ("express") 

//import Cross-origin-resource-sharing to allow running backend on same machine as frontend.
const cors = require("cors");

//import router from routers.js
const {router} = require("./routers");

//define server instance
let app = express();
app.use(cors());

//parse using json
app.use(express.json()); 

//tell the app to use router object for API Mappings
app.use(router); 

//to start the server at port 3000
app.listen(3000, (errors) => { 
    if (errors) {
        console.log(errors);
    } else {
        console.log("Server started on port 3000")
    }
});

//(b4 routers.js) go to browser type http://localhost:3000 to see "cannot Get/"
//Note: server will keep running until you type "Ctrl + C" into the terminal window
//(after routers.js), http://localhost:3000/home, will show "Welcome..."
//http://localhost:3000/sum?a=2&b=4 will give you "Sum is: 24" -> concatenation as it recognized params as strings instead of numbers