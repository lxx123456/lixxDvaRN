import {Dimensions,Alert,Platform,TouchableOpacity,Image} from 'react-native';
import {API,server} from "js/Config/api";
import {Toast} from 'antd-mobile-rn';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import {showAlert} from 'js/Utils/PermissionUtils';
const React = require('react-native');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const basePx = 375;



/**
 * 从图库或者相机进行获取,因为安卓平台不能进行多图选择，所以，需要区分不同平台
 */
export function openPicLibFunc(imagesData,maxImages) {
	let promise = new Promise((resolve, reject) =>{
		if (Platform.OS === 'ios') {
			ImagePicker.openPicker({
				multiple: true,
				maxFiles: maxImages - imagesData.length,
				waitAnimationEnd: false,
			}).then(images => {
				let handleImagesPromise = handleImagesData(images);
				handleImagesPromise.then((imagesData) => {
					resolve(imagesData);
				});
			})
		} else {
			ImagePicker.openPicker({
				width: 300,
				height: 300,
				cropping: false,
				cropperCircleOverlay: false,
				compressImageMaxWidth: 480,
				compressImageMaxHeight: 640,
				compressImageQuality: 0.5,
				mediaType: 'photo',
				compressVideoPreset: 'MediumQuality',
				multiple: true,
			}).then(images => {
				// console.log("从相机获取单个iamges:",images);
				// console.log("从相机获取单个iamges:",images instanceof Array);
				let handleImagesPromise = handleImagesData(images);
				handleImagesPromise.then((imagesData) => {
					resolve(imagesData);
				});
			}).catch(e => {
				Toast(e,2);
			});
		}

	});

	return promise;
}

/**
 * 从相机获取图片
 */
export function pickSingleWithCamera() {
	let promise = new Promise((resolve, reject) =>{
		ImagePicker.openCamera({
			cropping: false,
			width: Math.round((Dimensions.get('window').width - 20)),
			height: 300,
		}).then(images => {
			// console.log("拍照iamges:",images);
			// console.log("拍照iamges:",images instanceof Object);
			let handleImagesPromise = handleImagesData(images);
			handleImagesPromise.then((imagesData) => {
				resolve(imagesData);
			});
		})
	});
	return promise;
}


// /**
//  * 数据统一处理
//  */
// export function handlePhotoImages(images,resolve,reject) {
//   let handleImagesPromise = handleImagesData(images);
//   handleImagesPromise.then((imagesData) => {
//     // this._handleSubmit(imagesData);
//     resolve(imagesData);
//   });
// }


/**
 * 将上传的image变为file文件
 */
export function convertImageToFile(image){
	let file = '';
	if(image){
		let uri = image.uri;
		let index = uri.lastIndexOf("\/");
		let name  = uri.substring(index + 1, uri.length);
		file = {uri: uri, type: 'multipart/form-data', name: name, filename: name } ;
	}
	return file;
}

/**
 * 图片从相册、拍照过程的异常处理
 */
export function handleImagePickError(error){
	let errorStr = error+"";
	// console.log("error",error);
	Toast.hide();
	let missPermission  = "permission missing";
	if(errorStr && typeof(errorStr) == 'string'){
		if(errorStr.indexOf(missPermission)>=0){
			showAlert("请到设置中心确认权限");
		}else if(errorStr.indexOf("cancelled")>=0){
			console.log("取消操作")
		}else{
			Toast.fail(errorStr, 2);
		}
	}
}

/**
 * 上传图片
 */
export function uploadAttachment(files,loadingTime,description){
	let promise = new Promise((resolve, reject) =>{
		Toast.loading('加载中',loadingTime);
		let formData = new FormData();
		if(files && files instanceof Array){
			for(let file of files){
				formData.append('files', file);
			}
		}
		formData.append('Content-Type', 'image/jpg');
		formData.append('createName',GLOBAL.user.username);
		formData.append('description',description);
		const REQUEST_URL = API.addAttachmentReturn;
		fetch(REQUEST_URL,{
			method: 'POST',
			headers: {"X-Auth-Token": GLOBAL.token,},
			body:formData
		}).then((response) => response.json()).then((responseJson) => {
			Toast.hide();
			console.log("responseJson",responseJson);
			if (responseJson.success) {
				resolve(responseJson);
			}else{
				reject(responseJson.msg);
			}
		}).catch((error) => {
			Toast.hide();
			Toast.fail('图片上传'+error, 2);
		});
	});
	return promise;
}



/*** 数据处理 ****/
export function handleImagesData(images) {
	let promise = new Promise((resolve, reject) =>{
		let imagesData = [];
		if (images instanceof Array) {
			for (let i = 0; i < images.length; i++) {
				ImageResizer.createResizedImage(images[i].path, 600, 800, 'JPEG', 80)
					.then(({uri}) => {
						imagesData.push({
							uri: uri,
							width: 600,
							height: 800,
							mime: images[i].mime,
						});
					}).catch((err) => {
					return Alert.alert(err);
				});
			}
			setTimeout(() => {
				// this._handleSubmit(imagesData);
				resolve(imagesData);
			}, 600 * images.length); // 300 * images.length 发现有超时获取不到数据现象
		} else if (images instanceof Object) {
			ImageResizer.createResizedImage(images.path, 600, 800, 'JPEG', 80)
				.then(({uri}) => {
					imagesData.push({
						uri: uri,
						width: 600,
						height: 800,
						mime: images.mime,
					});
				}).catch((err) => {
				// console.log("err",err);
				return Alert.alert(err);
			});
			setTimeout(() => {
				// this._handleSubmit(imagesData);
				resolve(imagesData);
			}, 600);
		}



	});
	return promise;

}
