import {StyleSheet} from 'react-native';
import Colors from '../../Constants/colors';
const marginVertical = 10;
const buttonSize = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageWrapperForAdmin: {
    width: '100%',
    alignItems: 'flex-end',
  },
  messageWrapperForUser: {
    width: '100%',
    alignItems: 'flex-start',
  },
  chatText: {
    fontSize: 22,
  },
  card: {
    maxWidth: '80%',
    backgroundColor: Colors.cardBg,
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    marginVertical: marginVertical,
  },
  textInputArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    fontSize: 22,
    width: '80%',
    backgroundColor: Colors.textinputBg,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: marginVertical,
  },
  sendButton: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    overflow: 'hidden',
    elevation: 3,
  },
});

export default styles;
