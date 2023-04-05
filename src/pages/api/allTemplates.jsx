// RENAME THIS FILE
import path from 'path'
import fs from 'fs'

// const apiGetFiles = async (req, res) => {
export default (req, res) => {
  const structure = {}

  try {
    const folders = fs.readdirSync(path.join(__dirname, '../../../../public/templates'))
    folders.forEach((folder) => {
      structure[folder] = fs.readdirSync(path.join(__dirname, `../../../../public/templates/${folder}`))
    })
    res.json(structure)
  } catch (err) {
    console.log(err) // eslint-disable-line
    res.status(400).json(err)
  }
}
