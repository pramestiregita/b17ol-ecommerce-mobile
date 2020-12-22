import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  img: {
    width: '100%',
    height: 320,
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  btnWrapper: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderColor: '#E5E5E5',
  },
  btn: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  review: {
    marginLeft: 5,
    color: 'grey',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  colorWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  store: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  nameWrapper: {
    flex: 1,
  },
  name: {
    color: 'grey',
    fontSize: 16,
  },
  price: {
    color: '#DB3022',
    fontWeight: 'bold',
    fontSize: 28,
  },
  des: {
    marginVertical: 10,
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    color: 'grey',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
