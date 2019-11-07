import { Navigation } from "react-native-navigation";
import App from "./App";
import Welcome from "./screens/Welcome";
import TabView from "./screens/tabview";
import Lesson from "./screens/lesson";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/register";
import Mirror from "./screens/mirror";
import VideoPlayer from "./screens/videoplayer";
import New from "./screens/new";
import PDF from "./screens/pdfview";
import Profile from "./screens/profile";
import ProfileEdit from './screens/profile_edit';
import Qpay from './screens/qpay';
import LectureInfo from "./screens/LectureInfo";
import { Dimensions } from "react-native";

let scrX = Dimensions.get("window").width;

Navigation.registerComponent(`Main`, () => App);
Navigation.registerComponent(`Login`, () => Login);
Navigation.registerComponent(`New`, () => New);
Navigation.registerComponent(`PDF`, () => PDF);
Navigation.registerComponent(`VideoPlayer`, () => VideoPlayer);
Navigation.registerComponent(`Register`, () => Register);
Navigation.registerComponent(`Welcome`, () => Welcome);
Navigation.registerComponent(`Home`, () => Home);
Navigation.registerComponent(`TabView`, () => TabView);
Navigation.registerComponent(`Lesson`, () => Lesson);
Navigation.registerComponent(`Mirror`, () => Mirror);
Navigation.registerComponent(`Profile`, () => Profile);
Navigation.registerComponent(`ProfileEdit`, () => ProfileEdit);
Navigation.registerComponent(`Qpay`, () => Qpay);
Navigation.registerComponent(`LectureInfo`, () => LectureInfo);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      drawBehind: false,
      animate: false,
      background: {
        color: "#FDE757"
      },
      buttonColor: "black",
      noBorder: true,
      elevation: false,
      borderHeight: 0,
      backButton: {
        color: "#fff"
      }
    },
    statusBar: {
      visible: true,
      style: "light",
      backgroundColor: "#007690"
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: "Main",
            children: [
              {
                component: {
                  name: "Main",
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: false
                    }
                  }
                }
              }
            ]
          }
        },
        left: {
          enabled: false,
          component: {
            name: "Welcome",
            passProps: {}
          }
        },
        options: {
          sideMenu: {
            left: {
              visible: false,
              enabled: false,
              width: scrX * 0.7
            }
          }
        }
      }
    }
  });
  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      drawBehind: false,
      animate: false,
      background: {
        color: "#FDE757"
      },
      buttonColor: "black",
      noBorder: true,
      elevation: false,
      borderHeight: 0,
      backButton: {
        color: "#fff"
      }
    },
    statusBar: {
      visible: true,
      style: "light",
      backgroundColor: "#007690"
    }
  });
});
