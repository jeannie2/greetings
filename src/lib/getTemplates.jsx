// import path from 'path'
// import fs from 'fs'

const getTemplates = () => {
  // const structure = {}

  try {
    // const folders = fs.readdirSync(path.join(__dirname, '../api/templates'))
    /* folders.forEach((folder) => {
      structure[folder] = fs.readdirSync(path.join(__dirname, `../api/templates/${folder}`)).map((n) => n.split('.')[0])
    }) */
    const structure = {
      bday: ['bday1', 'bday2', 'bday3', 'bday4'],
      thankyou: ['thankyou1', 'thankyou2', 'thankyou3', 'thankyou4'],
      congrats: ['congrats1', 'congrats2', 'congrats3']
    }
    return structure
  } catch (err) {
    console.log(err) // eslint-disable-line
    return { error: err }
  }
}

export default getTemplates
