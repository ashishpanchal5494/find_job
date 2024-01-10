import { useRouter, useSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, ActivityIndicator  } from 'react-native'
import { SafeAreaView } from 'react-native'
import { COLORS, SIZES, icons } from '../../contants'
import useFetch from '../../hook/useFatch'
import {Stack} from 'expo-router'
import { Company, ScreenHeaderBtn } from '../../components'
import { JobTabs } from '../../components'
import { RefreshControl, ScrollView } from 'react-native'
import DisplayTabContent from '../../components/DisplayTabContent'
import Footer from '../../components/jobdetails/footer/Footer'

const Tabs = ["About", "Qualifications", "Responsiblities"]

function JobDetails () {
    const params = useSearchParams()
    const router = useRouter()

    const { data, loading, error, refetchData } = useFetch('job-details', {
        job_id: params.id
      });

      const [refreshing , setRefreshing] = useState(false);
      const [activeTab, setActiveTab] = useState(Tabs[0])

      
      
    
   

      const onRefresh = () => {

      }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}

                />
            ),
            headerRight: () => (
                <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"
                />
            ),
            headerTitle: ""
        }}/>
            <>
            <ScrollView showsVerticalScrollIndicator ={false} refreshControl={<RefreshControl refreshing={refreshing}
            onRefresh={onRefresh}/>}>
                 {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
            <Text>No Data</Text>
        ): (
            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                loction={data[0].job_country}
                />
                <JobTabs
                Tabs={Tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                />
           <DisplayTabContent
           activeTab={activeTab}
           data={data}/>
            </View>
        )
        }
            </ScrollView>
            <Footer
            url={data[0]?.job_google_link ?? 'http://careers.google.com/jobs/results'}
            />

            </>

    </SafeAreaView>
  )
}

export default JobDetails

