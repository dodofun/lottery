import React, {useContext} from 'react'
import {ScrollView, StyleSheet, Text} from 'react-native'
import {ThemeContext} from '../theme'

const DetailScreen = ({route, navigation}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <ScrollView style={styles.container(theme)}>
      <Text>detailScreen.heading</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: (theme) => ({
    backgroundColor: theme.backgroundColor,
  }),
})

export default DetailScreen
