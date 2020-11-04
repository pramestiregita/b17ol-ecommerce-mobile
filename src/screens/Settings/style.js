import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inputCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  input: {
    color: 'black',
    fontSize: 19,
    borderBottomWidth: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notif: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
