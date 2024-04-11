import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
      <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/bookings'}>Bookings</Link>
      <Link href={'/listing/503'} >Listing 503</Link>
    </View>
  )
}

export default index