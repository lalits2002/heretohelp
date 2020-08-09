import { createStackNavigator, createAppContainer } from 'react-navigation';

import Volunteer from '../component/home/Volunteer;';
import Victim from '../component/home/Help-need;';
import Loadscreen from '../component/home/Load';

const Herescreen = createStackNavigator({
  Startscreen: Loadscreen,
  Helper: Volunteer,
  NeedHelp: Victim,
  
  
});

export default createAppContainer(Herescreen);
