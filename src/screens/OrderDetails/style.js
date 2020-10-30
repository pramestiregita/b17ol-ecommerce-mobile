import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  parent: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 20,
  },
  orderDesc: {
    flexDirection: 'row',
  },
  orderNumb: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  orderDate: {
    color: 'grey',
  },
  track: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  trackNumb: {
    flex: 1,
    flexDirection: 'row',
  },
  trackName: {
    color: 'grey',
  },
  trackNo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  success: {
    color: 'green',
  },
  danger: {
    color: 'red',
  },
  info: {
    marginTop: 15,
  },
  title: {
    marginBottom: 10,
    fontSize: 15,
  },
  infoList: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  name: {
    width: '35%',
    marginRight: 3,
    fontSize: 15,
    color: 'grey',
  },
  value: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 15,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  btn1: {
    width: '48%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
  },
  btn1Text: {
    fontSize: 16,
  },
  btn2: {
    width: '48%',
    backgroundColor: '#884A6F',
    borderRadius: 25,
  },
  btn2Text: {
    fontSize: 16,
    color: 'white',
  },
});
