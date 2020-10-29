import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 25,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginVertical: 40,
  },
  inputWrapper: {
    marginVertical: 5,
  },
  label: {
    fontSize: 12,
    color: 'grey',
  },
  input: {
    padding: 0,
    borderBottomWidth: 1,
  },
  btn: {
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#884A6F',
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});