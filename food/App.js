import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator ({
  Search: SearchScreen
},{ 
  initialRoutName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})


export default createAppContainer(navigator)


/*
 export default createAppContainer(navigator), makes sure that we export react component from App.js
*/