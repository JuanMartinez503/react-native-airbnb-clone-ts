import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';


const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'back',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout=()=> {
  const router = useRouter();
const {isLoaded, isSignedIn}= useAuth();
// useEffect(()=>{
//   if(isLoaded && !isSignedIn){
//     router.push('/(modals)/login');
//   }
// }
// ,[isLoaded]);
  const [loaded, error] = useFonts({
    'mon' :require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return   <Stack>
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  <Stack.Screen name='(modals)/login' options={{
    title:'Log in or sign up',
    headerTitleStyle: { fontFamily: 'mon-sb' },
    headerLeft:()=> <TouchableOpacity onPress={()=>router.back()} >
      <Ionicons name='close-outline' size={28}/>
    </TouchableOpacity>,
    presentation: 'modal'
  }} 
  />
  <Stack.Screen name='listing/[id]' options={{
    headerTitle: ''
  }} />
  <Stack.Screen name='(modals)/bookings' options={{
    presentation: 'transparentModal',
    animation: 'fade',
    headerLeft:()=> <TouchableOpacity onPress={()=>router.back()} >
      <Ionicons name='close-outline' size={28}/>
    </TouchableOpacity>,
  }} />
  
</Stack>;

}

function RootLayoutNav() {

  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
    
  );
}
export default RootLayoutNav;