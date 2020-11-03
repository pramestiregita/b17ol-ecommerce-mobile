import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  orderNumb: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerDate: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
  cardBody: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  listName: {
    color: 'grey',
  },
  listValue: {
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  success: {
    fontSize: 15,
    color: 'green',
  },
  danger: {
    fontSize: 15,
    color: 'red',
  },
});
