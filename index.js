const express = require('express')
const app = express()
const port = 3100
let counter = 100
const data = [
  {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
  },
  {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
  },
  {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
  },
  {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
  },
  {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
  },
  {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
  },
  {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
  },
  {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
  }
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send(data)
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  const index = data.findIndex(x => x.id === +id)

  if (index < 0) {
    return
  }

  res.send(data[index])
})

app.post('/', (req, res) => {
  const { description, name } = req.body
  data.push({ id: +counter, description, name })
  res.send('Got a POST request')
  counter++
})

app.put('/:id', (req, res) => {
  const { id } = req.params
  const { description, name } = req.body
  const index = data.findIndex(x => x.id === +id)

  if (index < 0) {
    return
  }

  data[index] = { id: +id, description, name }
  res.send('Got a PUT request')
})

app.delete('/:id', (req, res) => {
  const { id } = req.params
  const index = data.findIndex(x => x.id === +id)

  if (index < 0) {
    return
  }

  data.splice(index, 1)
  res.send('Got a DELETE request')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})