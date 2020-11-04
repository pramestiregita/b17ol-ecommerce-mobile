import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: 150,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 10,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 15,
    textTransform: 'uppercase',
    top: 5,
    left: 5,
  },
  itemDesc: {
    padding: 10,
  },
  itemStore: {
    color: 'grey',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
  },
});
