import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreens';
import Signup from './screens/signupScreen';
import ViewDoctor from './screens/ViewDoctorScreen';
import ViewPatient from './screens/ViewPatientScreen';
import {createNavigationContainerRef, NavigationContainer} from "@react-navigation/native";
import Route from './screens/route';

export default function App() {
  // const navigationRef = createNavigationContainerRef();
  return (
   <NavigationContainer 
   >   
      <Route/>
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
