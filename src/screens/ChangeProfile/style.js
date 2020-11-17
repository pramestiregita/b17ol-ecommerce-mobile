import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputCard: {
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  input: {
    color: 'black',
    fontSize: 19,
    borderBottomWidth: 0,
  },
  labelText: {
    fontSize: 16,
    color: 'grey',
  },
  gender: {
    color: 'black',
  },
  btn: {
    marginVertical: 20,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  alertWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alert: {
    fontStyle: 'italic',
    color: '#e74b5b',
  },
  alertIcon: {
    marginRight: 5,
    color: '#e74b5b',
  },
});
