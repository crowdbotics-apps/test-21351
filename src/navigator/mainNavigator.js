import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile137902Navigator from '../features/UserProfile137902/navigator';
import Settings137866Navigator from '../features/Settings137866/navigator';
import Settings137847Navigator from '../features/Settings137847/navigator';
import UserProfile137757Navigator from '../features/UserProfile137757/navigator';
import Tutorial137756Navigator from '../features/Tutorial137756/navigator';
import NotificationList137728Navigator from '../features/NotificationList137728/navigator';
import Settings137727Navigator from '../features/Settings137727/navigator';
import Settings137719Navigator from '../features/Settings137719/navigator';
import UserProfile137717Navigator from '../features/UserProfile137717/navigator';
import Settings137681Navigator from '../features/Settings137681/navigator';
import Settings137662Navigator from '../features/Settings137662/navigator';
import ArticleList1137657Navigator from '../features/ArticleList1137657/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile137902: { screen: UserProfile137902Navigator },
Settings137866: { screen: Settings137866Navigator },
Settings137847: { screen: Settings137847Navigator },
UserProfile137757: { screen: UserProfile137757Navigator },
Tutorial137756: { screen: Tutorial137756Navigator },
NotificationList137728: { screen: NotificationList137728Navigator },
Settings137727: { screen: Settings137727Navigator },
Settings137719: { screen: Settings137719Navigator },
UserProfile137717: { screen: UserProfile137717Navigator },
Settings137681: { screen: Settings137681Navigator },
Settings137662: { screen: Settings137662Navigator },
ArticleList1137657: { screen: ArticleList1137657Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
