import React from 'react';
import Routes from './routes';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Failed child context type']);
YellowBox.ignoreWarnings(['Async Storage has been extracted from react-native core']);

const App =  ()  => <Routes />;
export default App;
