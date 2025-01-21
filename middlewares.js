//checking if the both the hearts are healthy

const express = require("express");
const port = 3000;
const app = express();

app.get("/", function (req, res) {
    const kidneyID = req.query.kidneyID; 
    const username = req.headers.username; //note through postman how you can pass those
    const password = req.headers.password; 

  
    if (username !== "himanshu" || password !== "pass") {
        res.status(403).json({
            msg: "User doesn't exist",
        });
        return;
    }


    if (kidneyID != 1 && kidneyID != 2) {
        res.status(400).json({
            msg: "Wrong inputs",
        });
        return;
    }

    // Success case
    res.send("Both the hearts are healthy");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


//as you have probably seen this methos is too big and is not usable 
//better way
const express = require("express");

// const port = 3000; already called so commenting out
// const app = express();

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "himanshu" || password !== "pass") {
        res.status(403).json({
            msg: "User doesn't exist",
        });
        return;
    }
    next(); 
}

function kidneyMiddleware(req, res, next) {
    const kidneyID = req.query.kidneyID;

    if (kidneyID != 1 && kidneyID != 2) {
        res.status(411).json({
            msg: "Wrong inputs",
        });
        return;
    }
    next(); 
}

app.get("/", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Both the hearts are healthy");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//but there is a problem it's not neccessary that the user will always enter 1,2 in the input it can enter anaything
// to tackle this issue zod came into picture