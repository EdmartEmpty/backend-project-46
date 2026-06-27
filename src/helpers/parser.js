const formats = {
  json: JSON.parse,
}

const parser = (formant, data) => {
  if (!formats[formant]) {
    return 'Такого формата нет'
  }
  return formats[formant](data)
}

export default parser
