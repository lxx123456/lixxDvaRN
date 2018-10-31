import Picker from "react-native-picker";
import {Toast} from "antd-mobile-rn";
import styles from "js/Themes/TotalStyles";

/**
 * hide picker
 */

export function hidePicker(){
	Picker.isPickerShow(status => {
		if (status) {
			Picker.hide();
		}
	});
}

/**
 * show Common Picker
 */
export function showCommonPicker(dataObj, selectValue, callback){
	let nameArray = [];
	if (!dataObj || dataObj && !dataObj.data || dataObj.data.length == 0) {
		Toast.info("数据为空", 1);
		return;
	}
	for (let data of dataObj.data) {
		nameArray.push(data.value);
	}

	Picker.init({
		pickerData: nameArray,
		...styles.pickerStyle,
		selectedValue: [selectValue],
		onPickerConfirm: (pickedValue, pickedIndex) => {
			// console.log('source', pickedValue, pickedIndex);
			if (dataObj.data && dataObj.data.length > 0) {
				let index = 0;
				if (dataObj.data[pickedIndex[0]].value == pickedValue[0]) {
					index = pickedIndex[0];
				}
				callback(index);
			}
		}
	});
	Picker.show();
};
