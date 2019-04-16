import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import {Rules} from './components/rules'
import {Norminette} from './components/norminette'
import {UnitTests} from './components/unitTests'


import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export const sendServerInformation = (message) => {
  alert(
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
  );
};

export default App;


/*
LUCAS ICI
 */
const Tabs = createMaterialTopTabNavigator({
    Rules: {
        screen: Rules,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon 
                    name='ios-hammer'
                    type='ionicon'
                    color='#000000'
                />
            },
        }),
        showIcon: true
    },
    Norminette: {
        screen: Norminette,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon 
                    name='ios-code'
                    type='ionicon'
                    color='#000000'
                />
            },
        }),
        showIcon: true
    },
    'Unit Tests': {
        screen: UnitTests,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon 
                    name='ios-flask'
                    type='ionicon'
                    color='#000000'
                />
            },
        }),
        showIcon: true
    },
} ,{
    showIcon: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#000',
        inactiveTintColor: '#696969',
        style: {
            backgroundColor: '#fff',
            borderWidth:1,
        },
        indicatorStyle: {
            backgroundColor: '#ff6900',
            top: 0,
        },
    }
});

/*const DashboardTabNavigator = createBottomTabNavigator(
  {
    Rules,
    UnitTests,
    Norminette,
  },
  {
    swipeEnabled: true,
    tabBarOptions : {
      activeTintColor: '#FFA500',
      style: {
          backgroundColor: '#F0F0F0',
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          headerTitle: 'EpiBuild: ' + routeName,
          headerBackTitle : null,

          headerStyle: {
            backgroundColor: '#E8E8E8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            width : 500,
          },
        };
      }
    }
);*/

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: Tabs
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
          headerTitle: 'EpiBuild',
          headerTitleStyle: {
            fontWeight: 'bold',
            width : 500,
          },
          headerLeft: (
              <Icon
                  style={{ paddingLeft: 10 }}
                  onPress={() => navigation.openDrawer()}
                  name="ios-menu"
                  type='ionicon'
                  size={30}
              />
          )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});