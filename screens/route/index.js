import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../loginScreens";
import Signup from "../signupScreen";
import ViewDoctor from "../ViewDoctorScreen";
import ViewPatient from "../ViewPatientScreen";


const Route =()=> {
    const Stack = createStackNavigator()
    return (
         <Stack.Navigator 
         initialRouteName = 'Login'
>
            <Stack.Screen
            name="Login"
            component={Login}/>
            <Stack.Screen
            name="Signup"
            component={Signup}/>
               <Stack.Screen
            name="ViewDoctor"
            component={ViewDoctor}/>
             <Stack.Screen
            name="ViewPatient"
            component={ViewPatient}/>
            
         </Stack.Navigator>
    )
}
export default Route
