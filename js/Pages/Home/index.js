import React, {Component} from 'react';
import colors from 'js/Themes/Colors'
import HeadStatusBar from 'js/Components/HeaderStatus'
import HeadBar from 'js/Components/HeaderBar'
import Picker from "react-native-picker";
import {loadDateData} from 'js/Utils/DatesUtils'
import totalStyle from 'js/Themes/TotalStyles'
import {spiltStringToArray} from 'js/Utils/CommonUtils'
import moment from 'moment';
import {Toast} from 'antd-mobile-rn'
import PolyImageUpLoad from 'js/Components/PolyImageUpLoad'
import {Container,Icon} from 'native-base';
import {
	Animated,
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
	Clipboard,
	NativeAppEventEmitter,
	NativeModules,
	Keyboard,
	DeviceEventEmitter
} from 'react-native';
import constants from 'js/Constants/SystemConstants'
import BasePage from  '../BasePage/BaseComponent'

const startDate = '选择开始时间';
const endDate = '选择结束时间';

const {width, height} = Dimensions.get('window');
const ChatInputHeightMin = 56;//键盘高度
const sWidth = width-55*4;


class Home extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props){
		super(props)
		this.state = {
			pageName:'Home',
			selectDate: startDate,
			selectEndDate: endDate,
			datesArray: loadDateData(),
			appointUploadInfo:{
				fileList: [],
				uploading: false
			},
			isInitialized:false,
			inputViewHeight: new Animated.Value(ChatInputHeightMin),
			inputViewWidth: 0,
			inputContent:'',
			showType: 0,
			menuViewH:220,
		}
		this._isListenKeyBoard = true;
	}

	render() {
		return (
			<Container style={{backgroundColor: colors.pageBackgroundColor}}>
				<HeadBar
					titleText={"首页"}
					leftVisible={false}
					rightVisible={false}/>
				<TouchableOpacity onPress={()=> {this.props.navigation.navigate('aa')}}>
					<Text style={{marginTop:100}}>点击11</Text>
				</TouchableOpacity>
				{/*<TouchableOpacity onPress={()=> {this.showDatePicker()}}>*/}
					{/*<Text style={{marginTop:100}}>哈哈哈哈</Text>*/}
				{/*</TouchableOpacity>*/}
				{/*<View style={{flex: 1}}>*/}
				{/*<MessageList />*/}
				{/*<ChatInput />*/}
				{/*</View>*/}
				{/*<View style={{flex: 1}}>*/}
					{/*<View style={{...totalStyle.item,marginLeft:15}}>*/}
						{/*<Text style={{...totalStyle.label}}>预约测量附件({this.state.appointUploadInfo.fileList.length}/30)</Text>*/}
					{/*</View>*/}
					{/*<View style={{backgroundColor:'white' ,alignItems:'center',flexDirection:'row',flexWrap:'wrap',flex:1,marginTop:5}}>*/}
						{/*<PolyImageUpLoad max={30}*/}
														 {/*navigation={this.props.navigation}*/}
														 {/*description='预约测量附件'*/}
														 {/*onChange={(uploadInfo)=>{*/}
															 {/*this.setState({appointUploadInfo: uploadInfo})}*/}
														 {/*}/>*/}
					{/*</View>*/}
				{/*</View>*/}
			</Container>
		)
	}
	onSendText=(text)=>{

	}

	showDatePicker() {


		// this._initCommonPicker(this.state.selectDate, (value) => {
		// 	const newEndDate = this.state.selectEndDate;
		// 	//开始时间不能晚于结束时间
		// 	if(newEndDate != endDate && moment(value).valueOf() > moment(newEndDate).valueOf()){
		// 		Toast.fail('开始时间不能晚于结束时间');
		// 		return false;
		// 	}
		// 	this.setState({selectDate: value});
		// });
	}
	/************initPicker************/
	_initCommonPicker = (selectValue, callback) => {
		console.log('!!时间',selectValue,callback)
		Picker.init({
			pickerData: this.state.datesArray,
			...totalStyle.pickerStyle,
			selectedValue: spiltStringToArray(selectValue),
			onPickerConfirm: (pickedValue, pickedIndex) => {
				// console.log('date', pickedValue, pickedIndex);
				callback(pickedValue.join('-'));
			}
		});
		Picker.show();
	};
}

const styles = {
	iconRow: {
		flexDirection: 'row',
		// paddingHorizontal:sWidth/5-1,
		flexWrap:'wrap',
		paddingVertical:30,
		flex:1,
	},
	actionCol:{
		alignItems:"center",
		marginRight:sWidth/8,
		marginLeft:sWidth/8,
		height:95,
	},
	iconTouch: {
		justifyContent:'center',
		alignItems:'center',
	},
}


export default BasePage(Home)
