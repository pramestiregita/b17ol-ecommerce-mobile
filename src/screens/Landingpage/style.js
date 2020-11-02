import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#DB3022',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  img: {
    width: 70,
    resizeMode: 'contain',
  },
  content: {
    width: '80%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginBtn: {
    borderRadius: 25,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  login: {
    color: '#DB3022',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  signupBtn: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',
  },
  signup: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
