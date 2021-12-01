const saludo = (name = 'World') => console.log(`Hola ${name}`)

const variables = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
}

module.exports = {
  saludo,
  variables
}
