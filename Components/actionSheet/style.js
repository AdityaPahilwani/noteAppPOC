import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Constants/colors';
const {width, height} = Dimensions.get('window');
const borderRadius = 20;
const heightAction = height * 0.6;
const backdropHeight = height - heightAction;
const marginVertical = 10;
const paddingAlign=10
export default styles = StyleSheet.create({
  actionContainer: {
    position:'absolute',
    bottom:0,
    width: width,
    height: heightAction,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    backgroundColor: 'white',
    borderTopColor: 'black',
    borderWidth: 2,
    elevation: 4,
    padding: 10,
  },
  backdrop: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  workFlowText: {
    paddingHorizontal:paddingAlign,
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: Colors.cardBg,
    padding: paddingAlign,
    borderRadius: 10,
    elevation: 4,
    marginVertical: marginVertical,
  },
  buttonText: {
    fontSize: 22,
  },
});
