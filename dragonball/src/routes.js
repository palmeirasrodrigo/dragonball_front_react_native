import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

//import Login2 from './pages/Login2';
import TimeLine from './pages/TimeLine';
import QuestaoPequeno from './pages/QuestaoPequeno';
import New from './pages/New';
import Videu from './pages/Videu';
import DoubleTap from './pages/DoubleTap';
import EpisodiosPequeno from './pages/EpisodiosPequeno';
import EpisodiosZ from './pages/EpisodiosZ';
import EpisodiosGt from './pages/EpisodiosGt';
import EpisodiosSuper from './pages/EpisodiosSuper';
import Inicial from './pages/Inicial';
import Inicial2 from './pages/Inicial2';
import Login from './pages/Login';
import Splash from  './pages/Splash';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Splash,
        App: createStackNavigator({
            Inicial,
            Inicial2,
            TimeLine,
            DoubleTap,
            QuestaoPequeno,
            New,
            Videu,
            EpisodiosPequeno,
            EpisodiosZ,
            EpisodiosGt,
            EpisodiosSuper,
            
        }),
    })
);

export default Routes;

