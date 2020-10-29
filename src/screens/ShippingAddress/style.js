import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 5,
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
