const express = require('express');
const gameRouts = require('./routes/game');

const app = express();
const path = require('path');
app.listen(3000, () =>
{
    console.log('Server is listening at http://localhost:3000/Let\'s play a game! ');
});

app.use(express.static(
    path.join(__dirname, 'public'),
));

gameRouts(app);

