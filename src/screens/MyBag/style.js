import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    margin: 13,
    flex: 1,
  },
  title: {
    marginBottom: 30,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  listWrapper: {
    flex: 1,
  },
  checkoutWrapper: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    color: 'grey',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
  },
});
