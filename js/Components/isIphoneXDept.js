//适配iphoneX
// import React, {Component} from 'react';
import {StatusBar,View, Platform,Dimensions} from 'react-native';

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

// screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export function isIphoneX() {
	return (
		Platform.OS === 'ios' &&
		((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
			(SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
	)
}
export function isIphoneXStatusBar() {
	return isIphoneX()?44:0
}
export function isIphoneXTabBar() {
	return isIphoneX()?34:0
}
export function isIphoneXTabBarHeight() {
	return isIphoneX()?83:63
}

