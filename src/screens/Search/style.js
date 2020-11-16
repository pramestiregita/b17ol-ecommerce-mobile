import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  search: {
    borderBottomWidth: 0,
  },
  searchIcon: {
    color: 'grey',
    marginRight: 10,
  },
});
