import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../contants' // Fixed typo here
import { TouchableOpacity } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { FlatList } from 'react-native'
import useFetch from "../../../hook/useFatch"

function Popularjobs() {
  const router = useRouter();

  const { data, loading, error, refetchData } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  });

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                handleCardPress={() => router.push( `/job-details/${item.job_id}`)}
                selectedJob={selectedJob}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs

