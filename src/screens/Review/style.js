import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  checkbox: {
    flexDirection: 'row',
  },
  check: {
    marginRight: 20,
  },
  checkText: {
    fontSize: 16,
  },
});
