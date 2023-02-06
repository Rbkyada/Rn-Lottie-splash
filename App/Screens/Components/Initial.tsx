import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { isLoggedIn } from '@Services/UserService';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import { Route } from '@Routes/AppRoutes';
import { goToNextScreen } from '@Utils/Helper';

const Initial = () => {
  const navigation = useNavigation();

  useEffect(() => {
    isUserLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUserLogin = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (!isUserLoggedIn) {
      goToNextScreen(navigation, Route.LoginScreen);
      return;
    }
    goToNextScreen(navigation, Route.HomeScreen);
  };

  return <View />;
};

export default Initial;
