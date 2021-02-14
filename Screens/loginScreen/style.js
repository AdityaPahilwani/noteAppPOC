import {StyleSheet} from 'react-native';
import Colors from '../../Constants/colors';

const fontSize = 22;
const marginVertical = 10;
const padding = 10;
const borderRadius = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: fontSize,
    width: '100%',
    backgroundColor: Colors.textinputBg,
    borderRadius: borderRadius,
    padding: padding,
    marginVertical: marginVertical,
  },
  submitButton: {
    width: '100%',
    marginVertical: marginVertical,
    backgroundColor: Colors.primaryColor,
    padding: padding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
  },
  submitText: {
    fontSize: fontSize,
  },
});

export default styles;
