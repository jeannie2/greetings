import path from 'path'
import fs from 'fs'

const getTemplates = () => {
  const structure = {}

  try {
    const folders = fs.readdirSync(path.join(__dirname, '../api/templates'))
    folders.forEach((folder) => {
      structure[folder] = fs.readdirSync(path.join(__dirname, `../api/templates/${folder}`)).map((n) => n.split('.')[0])
    })
    return structure
  } catch (err) {
    console.log(err) // eslint-disable-line
    return { error: err }
  }
}

export default getTemplates
