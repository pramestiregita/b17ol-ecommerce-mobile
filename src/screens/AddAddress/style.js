import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    margin: 25,
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
    fontSize: 15,
  },
  btn: {
    marginTop: 10,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
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
