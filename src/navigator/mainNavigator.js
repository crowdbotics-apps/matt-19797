import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList94461Navigator from '../features/ArticleList94461/navigator';
import ArticleList94460Navigator from '../features/ArticleList94460/navigator';
import ArticleList94459Navigator from '../features/ArticleList94459/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList94461: { screen: ArticleList94461Navigator },
ArticleList94460: { screen: ArticleList94460Navigator },
ArticleList94459: { screen: ArticleList94459Navigator },

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
