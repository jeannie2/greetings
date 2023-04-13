import path from 'path'
import fs from 'fs'

const getTemplates = () => {
  const structure = {}

  try {
    const folders = fs.readdirSync(path.join(__dirname, '../../../../public/templates'))
    folders.forEach((folder) => {
      structure[folder] = fs.readdirSync(path.join(__dirname, `../../../../public/templates/${folder}`))
    })
    return { data: structure }
  } catch (err) {
    console.log(err) // eslint-disable-line
    return { error: err }
  }
}

export default getTemplates
