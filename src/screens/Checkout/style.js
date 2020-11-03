import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    margin: 13,
  },
  title: {
    marginBottom: 10,
    marginTop: 5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerName: {
    fontWeight: 'bold',
  },
  headerChange: {
    fontWeight: 'bold',
    color: '#DB3022',
  },
  paymentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payCard: {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  payName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 13,
  },
  total: {
    paddingHorizontal: 13,
    paddingTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listName: {
    color: 'grey',
    fontSize: 15,
  },
  listValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
  },
  btnText: {
    fontSize: 15,
    color: 'white',
    textTransform: 'uppercase',
  },
});
