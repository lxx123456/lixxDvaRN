import {Dimensions} from 'react-native';
import district from 'js/ResourceJson/district.json';

const React = require('react-native');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


/**
 * 省市区县
 * index:0 为名称数组
 * inde:1  为相应的code数组
 * @returns {Array}
 * @private
 */
export function loadDistrictData() {
	let returnData = [];
	let data = [];//名称
	let dataCode = [];//code
	let len = district.length;
	for (let i = 0; i < len; i++) {
		let city = [];
		let cityCode = [];
		for (let j = 0, cityLen = district[i]['city'].length; j < cityLen; j++) {
			let _city = {};
			let _cityCode = {};
			let county = [];
			let countyCode = [];
			for (let m = 0, countyLen = district[i]['city'][j]['district'].length; m < countyLen; m++) {
				county.push(district[i]['city'][j]['district'][m]['name']);
				countyCode.push(district[i]['city'][j]['district'][m]['id']);
			}
			_city[district[i]['city'][j]['name']] = county;
			_cityCode[district[i]['city'][j]['id']] = countyCode;
			city.push(_city);
			cityCode.push(_cityCode);
		}
		let _data = {};
		let _dataCode = {};
		_data[district[i]['name']] = city;
		_dataCode[district[i]['id']] = cityCode;
		data.push(_data);
		dataCode.push(_dataCode);
	}
	returnData.push(data);
	returnData.push(dataCode);
	// console.log("返回的data",JSON.stringify(data));
	// console.log("返回的dataCode",JSON.stringify(dataCode));
	return returnData;
}


/**
 * 根据索引获取省市区code
 * code: _loadAreaData()[1]
 * pickedIndex:[x,x,x]
 * @return
 *  [0]:provinceCode ;
 *  [1]:cityCode ;
 *  [2]:countyCode ;
 */
export function loadDistrictCode(code, pickedIndex) {
	let returnCode = [];
	// let code = _loadAreaData()[1];
	let tmp;
	let cityArr, countyArr;
	for (let key in code[pickedIndex[0]]) {
		tmp = key;
		cityArr = code[pickedIndex[0]][key][pickedIndex[1]];
	}
	// console.log("provinceCode", tmp);
	returnCode.push(tmp);
	for (let key in cityArr) {
		tmp = key;
		countyArr = cityArr[key];
	}
	// console.log("cityCode", tmp);
	returnCode.push(tmp);
	// console.log("countyCode", countyArr[pickedIndex[2]]);
	returnCode.push(countyArr[pickedIndex[2]]);

	// console.log("returnDistrictCode",returnCode)
	return returnCode;
}


/**
 * 根据索引获取省市区名称
 * address: loadAreaData()[0]
 * pickedIndex:[x,x,x]
 * @return
 *  [0]:province ;
 *  [1]:city ;
 *  [2]:county ;
 */
export function loadDistrictAddress(address, pickedIndex) {
	let returnAddress = [];
	// let address = loadAreaData()[0];
	let tmp;
	let cityArr, countyArr;
	for (let key in address[pickedIndex[0]]) {
		tmp = key;
		cityArr = address[pickedIndex[0]][key][pickedIndex[1]];
	}
	// console.log("province", tmp);
	returnAddress.push(tmp);
	for (let key in cityArr) {
		tmp = key;
		countyArr = cityArr[key];
	}
	// console.log("city", tmp);
	returnAddress.push(tmp);
	// console.log("county", countyArr[pickedIndex[2]]);
	returnAddress.push(countyArr[pickedIndex[2]]);

	// console.log("returnAddress",returnAddress);
	return returnAddress;
}


/**
 * 根据code获取省市区索引
 * code:loadAreaData()[1]
 * pickedCode: code[0]: province; code[1]: city; code[2]: county ;
 * @return
 *  [0]:provinceIndex ;
 *  [1]:cityIndex ;
 *  [2]:countyIndex ;
 */
export function loadDistrictAddressIndex(code, pickedCode) {
	let returnAddressIndex = [];
	// let address = loadAreaData()[0];
	// let code = loadAreaData()[1];
	// console.log("code", JSON.stringify(code));
	// console.log('pickedCode', pickedCode);
	if(!pickedCode){
		return;
	}

	let tmp;
	let cityIndexArr, countyIndexArr;
	for (let i = 0; i < code.length; i++) {
		for(let key in code[i]){
			if(key===pickedCode[0]){
				tmp = i;
				cityIndexArr = code[i][key];
				break;
			}
		}
	}
	// console.log("cityIndexArr", cityIndexArr);
	// console.log("provinceIndex", tmp);
	returnAddressIndex.push(tmp);

	for (let i = 0; i < cityIndexArr.length; i++) {
		for (let key in cityIndexArr[i]) {
			if (key === pickedCode[1]) {
				tmp = i;
				countyIndexArr = cityIndexArr[i][key];
				break;
			}
		}
	}
	// console.log("countyIndexArr", countyIndexArr);
	// console.log("cityIndex", tmp);
	returnAddressIndex.push(tmp);

	for (let i = 0; i < countyIndexArr.length; i++) {
		if (countyIndexArr[i] === pickedCode[2]) {
			tmp = i;
			break;
		}
	}
	// console.log("countyIndex", tmp);
	returnAddressIndex.push(tmp);

	// console.log("returnAddressIndex", returnAddressIndex)
	return returnAddressIndex;
}
