import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid, Platform } from "react-native";

const getFCMTokenAndroid = async () => {
  let fcmToken = "not_available";
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    fcmToken = await messaging().getToken();
  } catch (err) {
    console.log("FCM ANDROID", err);
  }
  return fcmToken;
};

const getFCMTokenIOS = async () => {
  let fcmToken = "not_available";
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      fcmToken = await messaging().getToken();
    }
  } catch (err) {
    console.log("FCM IOS", err);
  }
  return fcmToken;
};

export const getFCMToken = async () => {
  let fcmToken = "not_available";
  Platform.OS === "ios"
    ? (fcmToken = await getFCMTokenIOS())
    : (fcmToken = await getFCMTokenAndroid());
  return fcmToken;
};
