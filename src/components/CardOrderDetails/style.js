import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 5,
  },
  itemImg: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 104,
    height: 104,
  },
  itemDesc: {
    flex: 1,
    padding: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemStore: {
    color: 'grey',
  },
  itemDetails: {
    flexDirection: 'row',
  },
  detailName: {
    color: 'grey',
  },
  itemColor: {
    flexDirection: 'row',
  },
  itemSize: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  itemUnit: {
    flex: 1,
    flexDirection: 'row',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
