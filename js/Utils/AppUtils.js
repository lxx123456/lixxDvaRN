import {Toast} from 'antd-mobile-rn';
import {Linking} from "react-native";


/**
 * 打开百度地图
 * @param url
 */
export function openBaiduApp(url){
	Linking.canOpenURL('baidumap://map').then(supported => {
		if (supported) {
			Linking.openURL(url);
		} else {
			Toast.info(`请先安装百度地图~`);
		}
	});
}
