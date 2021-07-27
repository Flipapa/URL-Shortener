function sample() {
  const source = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const randomIndex = Math.floor(Math.random() * source.length)
  return source[randomIndex]
}

function generateRandomCode() {
  let randomCode = ''
  
  for (let i = 0; i < 5; i++) {
    randomCode += sample()
  }

  return randomCode
}

module.exports = generateRandomCode