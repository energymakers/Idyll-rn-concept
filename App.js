import React, {useEffect, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, Button} from 'react-native';
import mainRoute from './src/navigation/main';
// import authRoute from './src/navigation/auth';
// import bottomNavigation from './src/navigation/bottomNav';
import SplashScreen from 'react-native-splash-screen';

// Navigate to home or auth based on auth status
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleStart = () => {
    setIsAuthenticated(true);
  };
  useEffect(() => {
    // TODO: update routing logic when auth is ready
    if (isAuthenticated) {
      Navigation.setRoot(mainRoute);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Button title="Start" onPress={handleStart} />
    </View>
  );
};

export default App;
