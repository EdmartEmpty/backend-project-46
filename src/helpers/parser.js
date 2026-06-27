import { load } from 'js-yaml'

const formats = {
  json: JSON.parse,
  yaml: load,
}

const parser = (formant, data) => {
  if (!formats[formant]) {
    return 'Такого формата нет'
  }
  return formats[formant](data, 'utf-8')
}

export default parser
