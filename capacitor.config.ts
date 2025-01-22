import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'twms.mobile',
  appName: 'Alrakeen TWMS',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
