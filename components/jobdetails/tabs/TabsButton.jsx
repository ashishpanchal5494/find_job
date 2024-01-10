import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './tabs.style'

function TabsButton({name, activeTab, onHandleSearchType}) {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
  )
}

export default TabsButton
