import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    borderRadius: 6,
    marginBottom: 15,
  },
  selected: {
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  btn: {
    borderRadius: 6,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnText: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  change: {
    height: 20,
  },
  changeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
