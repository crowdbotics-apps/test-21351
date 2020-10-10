import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile137717Navigator from '../features/UserProfile137717/navigator';
import Settings137681Navigator from '../features/Settings137681/navigator';
import Settings137662Navigator from '../features/Settings137662/navigator';
import ArticleList1137657Navigator from '../features/ArticleList1137657/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
