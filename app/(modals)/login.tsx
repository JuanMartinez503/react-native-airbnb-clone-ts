import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'


const login = () => {
  const {isSignedIn} = useAuth()
  console.log(isSignedIn)
  return (
    <View>
      <Text>login Juan</Text>
    </View>
  )
}

export default login