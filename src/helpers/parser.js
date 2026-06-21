const formats = {
  json: JSON.parse,
}

const parser = (formant, data) => {
  if (!formats[formant]) {
    throw new Error('Такого формата нет')
  }
  return formats[formant](data)
}

export default parser
