import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../Items/Colors';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;

const OnboardStyles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.secondary_light,
  },
  container: {
    marginHorizontal: 16,
    height: windowHeight,
  }, 
  logo: {
    paddingTop: '8%',
    paddingBottom: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingVertical: '2%',
  },
  field_group: {
    paddingVertical: '2%',
  },
  divider_container: {
    paddingVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    height: 2,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#C8C8C8',
  }, 
  oauth_group: {
    paddingVertical: '2%',
  },
  navigation: {
    position: 'absolute',
    width: '100%',
    bottom: 24,
  },
  navigation_control: {
    marginBottom: 52,
  },
  progress_bar_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.primary1,
  },
  head2: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary2,
  },
  progress_bar_filled: {
    height: 3,
    width: '22%',
    borderRadius: 20,
    backgroundColor: Colors.progress_bar_filled,
  },
  progress_bar: {
    height: 3,
    width: '22%',
    borderRadius: 20,
    backgroundColor: Colors.progress_bar,
  },
  input: {
    fontSize: 20,
    color: Colors.secondary3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default OnboardStyles; 