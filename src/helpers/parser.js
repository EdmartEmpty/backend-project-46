import { load } from 'js-yaml'

const formats = {
  json: JSON.parse,
  yml: load,
  yaml: load,
}

const parser = (formant, data) => {
  if (!formats[formant]) {
    throw new Error('Такого формата нет')
  }
  return formats[formant](data, 'utf-8')
}

export default parser
