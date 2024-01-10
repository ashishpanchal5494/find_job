import React from 'react'
import { View, Text } from 'react-native'

import styles from '../tabs/tabs.style'
import { FlatList } from 'react-native'
import TabsButton from './TabsButton'
import { SIZES } from '../../../contants'


function Tabs({Tabs, activeTab, setActiveTab}) {
  return (
    <View style={styles.container}>
       <FlatList
       data={Tabs}
       renderItem={({item}) => (
       <TabsButton
       name={item}
       activeTab={activeTab}
       onHandleSearchType={() => setActiveTab(item)}
       />
       )}
       horizontal
       showsHorizontalScrollIndicator={false}
       keyExtractor={item => item}
       contentContainerStyle={{columnGap: SIZES.small / 2}}
       />
    </View>
  )
}

export default Tabs
