import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  btnWrapper: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
