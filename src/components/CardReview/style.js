import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  reviewWrapper: {
    position: 'relative',
    marginVertical: 20,
  },
  card: {
    position: 'absolute',
    top: 35,
    left: 30,
    borderRadius: 15,
    padding: 20,
    width: '90%',
  },
  avatar: {
    zIndex: 999,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  date: {
    color: 'grey',
    fontSize: 14,
  },
  des: {
    marginVertical: 10,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  likeText: {
    marginRight: 5,
  },
});
