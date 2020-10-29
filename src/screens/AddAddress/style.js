import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    marginHorizontal: 25,
  },
  cardWrapper: {
    marginVertical: 5,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  item: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 15,
  },
  input: {
    fontSize: 12,
  },
  btn: {
    marginTop: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#884A6F',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
