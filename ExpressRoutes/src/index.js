const express = require('express');
const server = express();

// this is how express knows you're using json - DO NOT FORGET!
server.use(express.json());

const myPlants = [{
        "id": "1",
        "details": [
            {"plant": "Cante", "quantity": "1"}
        ]
    }];

function checkUserId(req, res, next){
    const { id } = req.params;

    // does the userId exist?
    const userExists = myPlants.find((item) => {
        return item.id === id;
    });

    // if the id exists, what's its index?
    if (userExists !== undefined){
        req.userIndex = myPlants.indexOf(userExists);
    } else {
        req.userIndex = undefined;
        res.json({ Error: "invalid user"}); // returns an error for all cases user doesn't exist
    }
    return next();
}

function isUserRegistered(req, res, next){
    const { id } = req.body;
    const userExists = myPlants.find((item) => {
        return item.id === id;
    });

    // if the userId does not exist
    if (userExists === undefined){
        return next() // you can create it
    } else {
        res.json({ Error: "User already exists!" }); // otherwise, you can't!
    }
}

server.get('/plants', (req, res) => {
    return res.json(myPlants);
});

server.get('/plants/:id', checkUserId, (req, res) => {
    return res.json(myPlants[req.userIndex]);
});

server.post('/plants', isUserRegistered, (req, res) => {
    const { id, details } = req.body;
    myPlants.push( {id, details} );
    return res.json({ success: `User ID created: ${id}` });
});

server.post('/plants/:id/details', checkUserId, (req, res) => {
    const { plant, quantity } = req.body;

    if (req.userIndex !== undefined){
        myPlants[req.userIndex].details.push({plant, quantity});
        return res.json(myPlants[req.userIndex].details);
    }
});

server.put('/plants/:id', checkUserId, (req, res) => {
    const { plant } = req.body;

    if (req.userIndex !== undefined) {
        myPlants.details = myPlants[req.userIndex].details.push({plant});
        return res.json(myPlants[req.userIndex]);
    }

});

server.delete('/plants/:id', checkUserId, (req, res) => {
    const index = req.userIndex;

    // it avoids errors in case of undefined userID index
    if (index !== undefined) {
        myPlants.splice(req.userIndex, 1);
        return res.json({ msg: "User deleted!" });
    } // else is already defined in function checkUserId
});

server.listen(3333);
