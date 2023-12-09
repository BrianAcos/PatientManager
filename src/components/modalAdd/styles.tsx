import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backdrop: {flex: 1, backgroundColor: '#1B1B1B'},
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  title: {fontSize: 20, textAlign: 'center', marginBottom: 20},
  input: {
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 50,
    paddingTop: 10,
  },
  buttonDismiss: {backgroundColor: '#FF2400'},
  buttonDismissText: {color: 'white'},
  buttonSubmit: {backgroundColor: '#5CDB5C'},
});

export default styles;
