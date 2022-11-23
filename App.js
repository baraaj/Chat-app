import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authentification from './Screens/Authentification';
import Accueil from './Screens/Accueil';
import SignUp from './Screens/SignUp';
import Chat from './Screens/Chat';
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="auth" component={Authentification}></Stack.Screen>
      <Stack.Screen name="signup" component={SignUp}></Stack.Screen>
      <Stack.Screen name="Accueil" component={Accueil}></Stack.Screen>
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)};
