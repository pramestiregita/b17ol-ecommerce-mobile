import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    paddingBottom: 30,
  },
  headerWrapper: {
    position: 'relative',
  },
  header: {
    width: '100%',
  },
  headerText: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    left: 20,
    bottom: 20,
  },
  content: {
    marginLeft: 20,
    marginTop: 20,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subTitle: {
    color: 'grey',
  },
});
