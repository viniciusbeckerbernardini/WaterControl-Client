import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login';
import Main from './pages/Main';
import Registry from "./pages/Registry";
import Report from "./pages/Report";

export default createAppContainer(
    createStackNavigator({
        Login,
        Main,
        Registry,
        Report
    })
);
