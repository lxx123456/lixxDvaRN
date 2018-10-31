import React, {Component} from "react";
import { connect } from 'react-redux';
import {
	Dimensions,
	Keyboard,
	View
} from 'react-native'
import {
	Container,
	Text
} from "native-base";
import CustomerTabs from 'js/Components/CustomerTabs'
import { isIphoneXTabBarHeight }from 'js/Components/isIphoneXDept'
import HeadStatusBar from 'js/Components/HeaderStatus'
import colors from 'js/Themes/Colors'
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {createAction} from 'js/Utils/CommonUtils'
import {
	CLICK_TABBAR
} from 'js/Constants/ActionTypes'

import Home from 'js/Pages/Home'
import Customer from 'js/Pages/Customer'
import Order from 'js/Pages/Order'
import Achieve from 'js/Pages/Achieve'
import Work from 'js/Pages/Work'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class MainPage extends Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		this.state = {
			active: true,
			tabSwitchIndex: 0,
			tabs: this.initTabs()
		};
	}
	render() {
		return (
			<Container style={{backgroundColor:colors.pageBackgroundColor}}>
				<HeadStatusBar/>
				<Container>
					{
						this.state.tabs.pageMap[this.props.tabIndex]
					}

				</Container>
				<View style={{backgroundColor: colors.dividerLineColor, width: deviceWidth, height: 1}}/>
				<View style={{height: isIphoneXTabBarHeight()}}>
					<ScrollableTabView
						initialPage={this.props.tabIndex - 1}
						renderTabBar={() => this._renderTabBar()}
					>
						{
							this.state.tabs.tabNames.map(tabName => {
								return <Text style={{height: 0}} key={tabName}></Text>
							})
						}

					</ScrollableTabView>
				</View>
			</Container>
		)
	}
	/****Tab bar***/
	_renderTabBar(){
		return (
			<CustomerTabs
				tabNames={this.state.tabs.tabNames}
				imageWidth={20}
				imageHeight={20}
				textSize={10}
				isShowBottomLine={false}
				textMarginTop={5}
				tabHeight={isIphoneXTabBarHeight()}
				inActiveColor={colors.textDarkGray}
				activeColor={colors.orange}
				tabLocalImageActiveNames={this.state.tabs.activeImageNames}
				tabLocalImageInActiveNames={this.state.tabs.inActiveImageNames}
				isShowLocalImage={true}
				activeTaba={this.props.tabIndex - 1}
				onChangeTab={(i) => this._onChangeTab(i)}
				isIndexTab={true}
			/>
		)
	};
	/**切换tabbar **/
	_onChangeTab = (i) =>{
		Keyboard.dismiss();

		this.props.dispatch(createAction(`app/${CLICK_TABBAR}`)((i + 1)))
	}
	/** 根据权限初始化footerTab数据 */
	initTabs = () => {
		let tabNames = []; //tab上显示的名字
		let activeImageNames = []; //激活时，各tab显示的图片
		let inActiveImageNames = []; //未激活时，各tab显示的图片
		let index = 1;
		let pageMap = {}; //页面与tabIndex的映射

		tabNames.push('首页');
		activeImageNames.push(require('js/Assets/foot_home_select.png'));
		inActiveImageNames.push(require('js/Assets/foot_home_unselect.png'));
		pageMap[index] = <Home navigation={this.props.navigation}/>;
		index++;

		tabNames.push('客户');
		activeImageNames.push(require('js/Assets/foot_customer_select.png'));
		inActiveImageNames.push(require('js/Assets/foot_customer_unselect.png'));
		pageMap[index] = <Customer navigation={this.props.navigation}/>;
		index++;

		tabNames.push('订单');
		activeImageNames.push(require('js/Assets/foot_order_select.png'));
		inActiveImageNames.push(require('js/Assets/foot_order_unselect.png'));
		pageMap[index] = <Order navigation={this.props.navigation}/>;
		index++;

		tabNames.push('业绩');
		activeImageNames.push(require('js/Assets/foot_achievement_select.png'));
		inActiveImageNames.push(require('js/Assets/foot_achievement_unselect.png'));
		pageMap[index] = <Achieve navigation={this.props.navigation}/>;
		index++;

		tabNames.push('工作');
		activeImageNames.push(require('js/Assets/foot_work_select.png'));
		inActiveImageNames.push(require('js/Assets/foot_work_unselect.png'));
		pageMap[index] = <Work navigation={this.props.navigation}/>;
		index++;

		return {
			tabNames,
			activeImageNames,
			inActiveImageNames,
			pageMap
		}

	}

}
function mapStateToProps(state) {
	return {
		tabIndex: state.app.getIn(['tabIndex']),
	};
}

export default connect(mapStateToProps)(MainPage);

const styles = {
	container: {
		backgroundColor: 'red',
	},
}