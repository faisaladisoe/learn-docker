const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
      "id": '1',
      "title": 'Book Review: The Bear & The Nightingale'
    },
    {
      "id": '2',
      "title": 'Game Review: Pokemon Brilliant Diamond'
    },
    {
      "id": '3',
      "title": 'Show Review: Alice in Borderland'
    },
    {
      'id': '4',
      'title': 'The Midnight Library'
    },
    {
      'id': '5',
      'title': 'The Alchemist'
    },
    {
      'id': '6',
      'title': 'One Up on Wall Street'
    },
    {
      'id': '7',
      'title': 'Common Stock and Uncommon Profit'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is listening for requests on port ${PORT}`);
});