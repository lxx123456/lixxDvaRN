import {Clipboard, StyleSheet, Text, View, Dimensions, TouchableOpacity, NativeAppEventEmitter, NativeModules, Alert, Animated, BackHandler, Keyboard, DeviceEventEmitter, PermissionsAndroid} from 'react-native';
import {Toast} from 'antd-mobile-rn';



//Android权限
export const PERMISSION_CAMERA = PermissionsAndroid.PERMISSIONS.CAMERA;//拍照
export const PERMISSION_WRITE_STORAGE = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;//存储写
export const PERMISSION_READ_STORAGE = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;//存储读
export const PERMISSION_RECORD_AUDIO = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;//录音
export const DENIED = 'denied';
export const NEVER_ASK_AGAIN = "never_ask_again";






/*检查照相权限*/
export let _checkCameraPermission = async () => {
	let cameraCheck = await PermissionsAndroid.check(PERMISSION_CAMERA);
	let storageCheck = await PermissionsAndroid.check(PERMISSION_WRITE_STORAGE);
	return cameraCheck && storageCheck;
};


/*检查照相权限*/
export  let _checkPickerPermission = async () => {
	let storageCheck = await PermissionsAndroid.check(PERMISSION_WRITE_STORAGE);
	return storageCheck;
};

/*检查录音权限*/
export  let  _checkAudioPermission = async () => {
	let audioCheck = await PermissionsAndroid.check(PERMISSION_RECORD_AUDIO);
	let storageCheck = await PermissionsAndroid.check(PERMISSION_WRITE_STORAGE);
	return audioCheck && storageCheck;
};


/*请求相机权限*/
export  let  _requestCameraPermission = async () => {
	let permissions = [];
	let cameraCheck = await PermissionsAndroid.check(PERMISSION_CAMERA);
	let storageCheck = await PermissionsAndroid.check(PERMISSION_WRITE_STORAGE);
	if(!cameraCheck){
		permissions.push(PERMISSION_CAMERA);
	}
	if(!storageCheck){
		permissions.push(PERMISSION_WRITE_STORAGE);
	}

	let isOk = false;
	if(permissions && permissions.length>0){
		let resultObj = await PermissionsAndroid.requestMultiple(permissions);
		// console.log("resultCameraObj",resultObj);

		if(resultObj){
			if(resultObj[PERMISSION_CAMERA] == DENIED || resultObj[PERMISSION_CAMERA] == NEVER_ASK_AGAIN){
				showAlert("无法调用相机，请到设置中心检查相机权限");
			}else if(resultObj[PERMISSION_WRITE_STORAGE] == DENIED || resultObj[PERMISSION_WRITE_STORAGE] == NEVER_ASK_AGAIN){
				showAlert("无法调用相机，请到设置中心检查存储权限");
			}else{
				isOk = true;

			}
		}
	}
	return isOk;
};



/*请求相册权限*/
export  let  _requestPickerPermission = async () => {
	let permissions = [];
	let storageCheck = await PermissionsAndroid.check(PERMISSION_WRITE_STORAGE);
	if(!storageCheck){
		permissions.push(PERMISSION_WRITE_STORAGE);
	}

	let isOk = false;
	if(permissions && permissions.length>0){
		let resultObj = await PermissionsAndroid.requestMultiple(permissions);
		// console.log("resultPickerObj",resultObj);
		if (!resultObj  || resultObj[PERMISSION_WRITE_STORAGE] == DENIED || resultObj[PERMISSION_WRITE_STORAGE] == NEVER_ASK_AGAIN) {
			showAlert("无法打开相册，请到设置中心检查存储权限");
		} else {
			isOk = true;
		}
	}
	return isOk;
};

/*请求录音权限*/
export  let  _requestAudioPermission = async () => {
	let permissions = [];
	let audioCheck = await PermissionsAndroid.check(PERMISSION_RECORD_AUDIO);
	let storageCheck = await PermissionsAndroid.check(PERMISSION_WRITE_STORAGE);
	if(!audioCheck){
		permissions.push(PERMISSION_RECORD_AUDIO);
	}
	if(!storageCheck){
		permissions.push(PERMISSION_WRITE_STORAGE);
	}

	let isOk = false;
	if(permissions && permissions.length>0){
		let resultObj = await PermissionsAndroid.requestMultiple(permissions);
		// console.log("resultAudioObj",resultObj);
		if(resultObj){
			if(resultObj[PERMISSION_RECORD_AUDIO] == DENIED ||resultObj[PERMISSION_RECORD_AUDIO] == NEVER_ASK_AGAIN){
				showAlert("无法录音，请到设置中心检查录音权限");
			}else if(resultObj[PERMISSION_WRITE_STORAGE] == DENIED || resultObj[PERMISSION_WRITE_STORAGE] == NEVER_ASK_AGAIN){
				showAlert("无法录音，请到设置中心检查存储权限");
			}else{
				isOk = true;
			}
		}
	}
	return isOk;
};


/* Alert 显示 */
export function showAlert(info){
	Alert.alert('', info, [{text: '确定'}]);
};
