import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ListingId = () => {
    const {id} = useLocalSearchParams<{id:string}>()
    console.log('id', id)
  return (
    <View>
      <Text>ListingId</Text>
    </View>
  )
}

export default ListingId