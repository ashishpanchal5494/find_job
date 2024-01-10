import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../contants' // Fixed typo here
import { TouchableOpacity } from 'react-native'


import useFetch from "../../../hook/useFatch"
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

function Nearbyjobs() {
  const router = useRouter();

  const { data, loading, error, refetchData } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  });



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
         data?.map((job) => (
          <NearbyJobCard
          job={job}
          key={`nearby-job-${job?.job_id}`}
          handleNavigate = {() => router.push( `/job-details/${job.job_id}`)}/>
         ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs


