// Express kirjaston käyttö

const express = require("express")
const app = express()

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-01-10T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-01-10T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-01-10T19:20:14.298Z",
      important: true
    }
]

app.get('/', (req,res) => {
    res.send('<h1>JUUKELIS PUUKELIS</h1>')
})

app.get('/api/notes', (req,res) => {
    res.json(notes)
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// console.log("heippudei")

// Muutetaan sovellus web palvelimeksi

// const http = require("http")

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       date: "2022-01-10T17:30:31.098Z",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only Javascript",
//       date: "2022-01-10T18:39:34.091Z",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       date: "2022-01-10T19:20:14.298Z",
//       important: true
//     }
// ]

// const app = http.createServer((request, response) =>
// {
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.end(JSON.stringify(notes))
// })

// const PORT = 3002
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)