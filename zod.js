const express = require('express');
const zod = require('zod');

const app = express();
const port = 3000;


app.use(express.json());

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    });

    const response = schema.safeParse(obj);//safeParse is a method used to validate an object against a predefined schema
    return response;
}

// POST route to handle login
app.post("/login", function (req, res){
    const response = validateInput(req.body);

    if (!response.success) {
        return res.status(400).json({
            msg: "Your inputs are invalid",
        });
    }

    res.json({
        msg: "Your inputs are valid",
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
