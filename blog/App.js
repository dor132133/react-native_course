import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'
import { Provider as BlogProvider } from './src/context/BlogContext'
import showScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: showScreen,
  Create: CreateScreen,
  Edit: EditScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Blogs'
  }
});


const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
        <App/>
    </BlogProvider>
}