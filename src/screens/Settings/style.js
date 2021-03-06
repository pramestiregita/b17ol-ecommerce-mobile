import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inputCard: {
    justifyContent: 'center',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notif: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    height: 500,
  },
  bottomTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginVertical: 3,
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
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
