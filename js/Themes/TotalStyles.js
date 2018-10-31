import colors from "./Colors";
import {Dimensions, StyleSheet} from 'react-native';
import{px2dp} from 'js/Utils/CommonUtils'

const React = require('react-native');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const InputHeight = px2dp(28);
/**
 * 总体样式定义
 */
export default {

	/*****************************************布局样式***************************************************/
	/** flexView样式*/
	flexViewStyle: {
		flex: 1,
		display: 'flex',
		width:'100%',
		backgroundColor:'white'
	},

	/**rowFlexView样式*/
	rowFlexViewStyle: {
		flexDirection: 'row',
		display: 'flex',
		width:'100%',
	},


	rowStyle:{
		flexDirection: 'row',
		flex: 1,
	},

	// /**Separator 分割线样式*/
	// separatorStyle: {
	//   height: 0.5,
	//   width: '100%',
	//   backgroundColor: colors.colorD
	// },


	/**带底线的布局样式*/
	item: {
		borderBottomWidth: 0.5,
		borderBottomColor: colors.lightBorderColor,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	item2: {
		borderBottomWidth: 0.5,
		borderBottomColor: colors.lightBorderColor,
		backgroundColor: colors.white,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: 15,
	},
	/**子条目label布局样式*/
	label: {
		minWidth: 75,
		fontSize: 15,
		color: colors.colorTwo,
		paddingTop: 5
	},
	/**子条目textTnput布局样式*/
	textInput: {
		flex: 1,
		paddingVertical: 0,
		height: 30,
		fontSize: 13,
		paddingHorizontal: 10,
	},
	/** 上边框border样式*/
	borderTopStyle: {
		borderTopWidth: 0.5,
		borderTopColor: colors.dividerLineColor,
		flexDirection: "row",
	},


	/**按钮背景绿色样式*/
	btnGreenStyle: {
		borderRadius: 3,
		backgroundColor: colors.orange
	},

	/**居右样式*/
	flexEndTextStyle: {
		justifyContent: 'flex-end',
		display: 'flex',
		flexDirection: 'row'
	},

	/**居中样式*/
	// centerStyle: {
	//   justifyContent: 'center',
	//   alignItems:'center',
	// },
	/**备注输入框*/
	remarkTextInput: {
		backgroundColor:colors.white,
		borderWidth: 0.6,
		borderColor: colors.lightBorderColor,
		marginLeft:15,
		padding: 10,
		borderRadius: 3,
		height:100,
		fontSize:14,
	},

	/**Picker样式*/
	pickerStyle: {
		pickerToolBarFontSize: 16,
		pickerFontSize: 16,
		pickerFontColor: [90, 90, 90, 90],
		pickerBg: [196, 199, 206, 1],
		pickerTitleText: '请选择',
		pickerConfirmBtnText: '确定',
		pickerCancelBtnText: '取消',
	},

	searchBtn: {
		borderRadius: InputHeight,
		height: InputHeight,
		flexDirection: "row",
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center"
	},


	/**居中样式*/
	centerStyle:{
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},

	/**label 样式*/
	nineLabelStyle: {
		fontSize:14,
		color:colors.colorNine,
		minWidth: 75,
	},

	/**分组面板 样式*/
	accordionPanelStyle: {
		flexDirection: 'row',
		display: 'flex',
		width:'100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 12,
		paddingBottom: 12,
		borderTopWidth: 1,
		borderTopColor: colors.dividerLineColor
	},
	/**分组面板 Head样式*/
	accordionPanelHeadStyle: {
		flexDirection: 'row',
		display: 'flex',
		width: '95%',
		alignItems: 'center'
	},


	/**分隔线样式*/
	horizontalDivideLine:{
		width: deviceWidth,
		backgroundColor:colors.pageBackgroundColor,
		height:1
	},


	/*****************************************字体样式***************************************************/
	/**提示字体样式*/
	hintTextStyle: {
		fontSize: 14,
		color: colors.placeHolderTextColor
	},

	/**颜色53的字体样式 (app主色)*/
	textStyle: {
		fontSize: 14,
		color: colors.textTitle,
	},

	/**白色字体样式*/
	whiteTextStyle: {
		fontSize: 16,
		color: colors.white,
	},

	remarkTextStyle: {
		fontSize: 11,
		color: colors.placeHolderTextColor
	},

	/*****************************************按钮样式***************************************************/
	primaryButton: {
		height: 30,
		fontSize: 12,
		borderRadius: 5,
		backgroundColor: '#33b0ff',

	},
	primarySmallButton: {
		height: 23,
		fontSize: 12,
		borderRadius: 5,
		padding: 2,
		backgroundColor: '#33b0ff',
	},

	/***** 分隔符 ***/
	separator: {
		height: 10,
		backgroundColor: colors.pageBackgroundColor,
		width: deviceWidth,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: colors.lightBorderColor
	},


	/***** 下拉框  ****/
	optionsStyles: {
		optionsContainer: {
			marginTop: -10,

		},
		optionsWrapper: {
		},
		optionWrapper: {
			margin: 5,
			paddingLeft: 10,
			paddingRight: 10,
		},
		optionTouchable: {
		},
		optionText: {
		},
		anchorStyle: {
			width: 20, height: 20
		}
	},

	/***** 单选框 选中  ****/
	selectCheckBox: {
		backgroundColor: colors.primaryLight,
		borderColor: colors.orange,
		borderWidth:1,
		borderRadius:10,
	},

	/***** 单选框 未选中  ****/
	unSelectCheckBox:{
		backgroundColor: colors.white,
		borderColor: colors.colorNine,
		borderWidth:1,
		borderRadius:10,
	},

	/********分割线10像素*************/
	sepViewTenGrayStyle:{
		height:10,
		backgroundColor:colors.pageBackgroundColor,
		flex:1,
	},
	/********分割线1像素*************/
	sepViewOneGrayStyle:{
		height:1,
		backgroundColor:colors.pageBackgroundColor,
		flex:1,
	},
	filterTitleRow: {
		height: 20,
		width: deviceWidth,
	},
	filterTextStyle: {
		fontSize: 12,
		textAlign: 'center',
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 6,
		paddingBottom: 6,
		borderWidth: 1,
		borderRadius: 4,
		minWidth: 50,
	},
	filterModalTitle: {
		fontWeight: 'bold',
		flex: 1,
		marginRight: 10,
		color: colors.primary
	},
	filterDateText: {
		color: colors.arrowColor,
		backgroundColor: colors.borderColorLight,
		width: 200,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 30,
		fontSize: 14
	},
	filterBtn1: {
		borderWidth: 1,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderColor: colors.primary,
		margin: 5,
	},
	filterBtn2: {
		borderWidth: 1,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		borderColor: colors.primary,
		backgroundColor: colors.primary,
		margin: 5,
	},
	filterModal: {
		width: deviceWidth,
		height: deviceHeight,
		alignItems: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.2)',
		position: 'absolute',
		bottom: 0,
	},
};


