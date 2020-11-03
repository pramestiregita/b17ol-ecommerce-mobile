import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    margin: 13,
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
  },
  titleText: {
    fontWeight: 'bold',
  },
  profileWrapper: {
    flexDirection: 'row',
  },
  profile: {
    marginLeft: 15,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'grey',
  },
  listWrapper: {
    marginTop: 30,
  },
  listLeft: {
    flexDirection: 'column',
  },
  listTitle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  listDesc: {
    marginTop: 8,
    fontSize: 13,
    color: 'grey',
  },
  listIcon: {
    color: 'grey',
  },
});
