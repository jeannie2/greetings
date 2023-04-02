import axios from 'axios'

export async function apiGetCards() {
  const { data: { cards } } = await axios({
    method: 'GET'
    // url: 'https://fswdi-api-todos.herokuapp.com/api/todos'
  })

  return cards
}

const testFolder = './public/templates'
const fs = require('fs')

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file)
  })
})
