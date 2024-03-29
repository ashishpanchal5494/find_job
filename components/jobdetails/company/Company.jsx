import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './company.style'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../contants'

function Company({companyLogo, jobTitle, companyName, loction }) {
  return (
   <View style={styles.container}>
    <View style={styles.logoBox}>
        <Image
        source={{uri: checkImageURL(companyLogo)
            ? companyLogo: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }}
            resizeMode='contain'
            style={styles.logoImage}
        />
    </View>
    <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
    </View>
    <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
    </View>
    <View style={styles.locationBox}>
    <Image
    source={icons.location}
    resizeMode='contain'
    style={styles.locationImage}
    />
    <Text style={styles.locationName}>{loction}</Text>
    </View>
   </View>
  )
}

export default Company
