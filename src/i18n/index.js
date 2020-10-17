import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import locales from './locales'

const resources = {...locales}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',

  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
