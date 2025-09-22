const express = require('express')
const app = express()
const port = 3000

let cards=[
  { id: 1, suit: "Diamonds", value: "Ace" },
  { id: 2, suit: "Clubs", value: "Ace" },
  { id:3 , suit: "Hearts", value: "10" } 
]



app.use(express.json());
//get all cards
app.get('/', (req, res) => {
  res.send('Hello from Server')
})
app.get('/cards', (req, res) => {
    res.json(cards)
})
 //get the card by id
app.get('/cards/:id', (req, res) => {

    const { id } = req.params
    const card = cards.find(c => c.id === parseInt(id))
    if (card) {
      res.json(card)
    } else {
      res.status(404).send('Card not found')
    }
   
})
//add the card
app.post('/cards', (req, res) => {
  const { suit, value } = req.body;
  const newCard = {
    id: cards.length + 1,
    suit: suit,
    value:value
  }
  cards.push(newCard);
  res.status(201).send("Card Added successfully")
})
app.delete('/cards/:id', (req, res) => { 

  const id = parseInt(req.params.id);
   const cardIndex = cards.findIndex(c => c.id === id);

  if (cardIndex !== -1) {
    cards.splice(cardIndex, 1);
    res.send('Card deleted successfully');
  } else {
    res.status(404).send('Card not found');
  }
})








app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
