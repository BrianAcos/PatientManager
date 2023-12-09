import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userContainer: {
    padding: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  extraDataContainer: {
    paddingTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 3,
  },
  website: {paddingTop: 10, paddingBottom: 20, fontWeight: 'bold'},
});

export default styles;
