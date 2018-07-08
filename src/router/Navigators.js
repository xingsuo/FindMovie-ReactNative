import { StackNavigator, createMaterialTopTabNavigator, } from 'react-navigation';

import NowPlaying from '../screens/NowPlaying';
import Popular from '../screens/Popular';

const AppActivityTabNavigator = createMaterialTopTabNavigator(
    {
        NowPlaying: {
          screen: NowPlaying,
          navigationOptions: {
            tabBarLabel: 'Now Playing',
          },
        },
        Popular: {
          screen: Popular,
          navigationOptions: {
            tabBarLabel: 'Week',
          },
        },
      },
      {
        // ...TabNavigator.Presets.AndroidTopTabs,
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
          upperCaseLabel: false,
          allowFontScaling: false,
          style: {
            height: 50,
            backgroundColor: '#e8f2f7',
            shadowColor: '#858585',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 1.6,
            shadowOpacity: 0.2,
          },
          indicatorStyle: {
            borderBottomColor: '#1e90ff',
            borderBottomWidth: 3,
          },
          tabStyle: {
            height: 50,
            marginBottom: 13,
          },
          labelStyle: {
            // fontFamily: 'Roboto',
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 24,
            color: '#2d3138',
          },
          activeTintColor: '#2d3138',
          inactiveTintColor: '#2d3138',
        },
      }
);

export default AppActivityTabNavigator;