import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const login = () => {
  const {isSignedIn} = useAuth()
  useWarmUpBrowser()
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={[defaultStyles.inputField, {marginBottom:30}]}/>
      <TouchableOpacity  style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.separatorView}>
        <View style={{
          flex:1,
          borderBottomColor:'#000',
          borderBottomWidth:StyleSheet.hairlineWidth
        }}></View>
        <Text style={styles.separator}>or</Text>
        <View style={{
          flex:1,
          borderBottomColor:'#000',
          borderBottomWidth:StyleSheet.hairlineWidth
        }} ></View>
        <Text></Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name='call-outline' style={defaultStyles.btnIcon} size={28} />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 26,
    backgroundColor: '#fff'
  },
  separatorView: {
    flexDirection:'row',
    marginVertical: 30,
    alignItems: 'center',
    gap: 10
  },
  separator: {
    fontFamily: 'mon-sb',
    color: Colors.grey
  },
  btnOutline:{
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey
  },
  btnOutlineText:{
    color: Colors.grey,
    fontSize: 16,
    fontFamily: 'mon-b'
  }
})
export default login