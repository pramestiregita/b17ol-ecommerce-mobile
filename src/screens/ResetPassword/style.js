import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
  },
  title: {
    marginTop: 25,
    marginBottom: 60,
  },
  titleText: {
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 15,
    color: 'red',
  },
  inputCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  input: {
    color: 'black',
    fontSize: 19,
  },
  btnWrapper: {
    flex: 1,
    marginTop: 30,
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    textTransform: 'capitalize',
    color: 'white',
  },
});
