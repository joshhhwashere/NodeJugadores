const express = require('express');
const app = express();

const DUMMY_TEAMS = [
    {
        name: 'Barcelona',
        players: ['Messi', 'Neymar', 'Suarez']
    },
    {
        name: 'Real Madrid',
        players: ['James', 'Bale', 'Cristiano']
    },
    {
        name: 'Manchester United',
        players: ['Rashford', 'Fernandes', 'Casemiro']
    }
];

app.get('/api/teams', (req, res, next) => {
    const teams = DUMMY_TEAMS.map(team => team);
    res.send(teams);
    next();
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
