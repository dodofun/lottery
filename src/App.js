import React from 'react'
import {useColorScheme} from 'react-native'
import RootNavigator from './navigation'
import {ThemeProvider, lightTheme, darkTheme} from './theme'
import './i18n'

const App = () => {
  /**
   * The useColorScheme React hook provides and subscribes to color scheme
   * updates from the Appearance module. This will help automatically
   * switch from light theme to dark theme, based on user preference.
   */
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <RootNavigator />
    </ThemeProvider>
  )
}

export default App
