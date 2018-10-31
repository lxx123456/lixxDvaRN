import React, {Component} from "react";
import {
	Image,
	View,
	Text,
	Keyboard,
	Dimensions,
	TextInput,
	BackHandler,
	Platform,
	TouchableOpacity,
	InteractionManager,
	Alert,
	ScrollView,
	findNodeHandle,
	DeviceEventEmitter,

	Linking
} from "react-native";
import {
	Container,
	Header,
	Title,
	Content,
	ListItem,
	Left,
	Right,
	Body,
	Separator,
	Row,
	Col,
} from "native-base";
import {connect} from "react-redux";
import colors from 'js/Themes/Colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Login extends Component {
	static navigationOptions = {
		header: null
	};
	render(){
		return (
			<Container style={{backgroundColor: colors.white}}>
				{/*<HeadStatusBar/>*/}
				<ScrollView
					ref={(scroll)=>this._scroll = scroll}
					contentContainerStyle={{backgroundColor: colors.white}}>
					<View>
						<Image style={{
							width: deviceWidth,
							height: deviceHeight/2 - 30,
							// resizeMode:'stretch',
						}} source={require('js/Assets/login_Bg.png')}>
						</Image>
					</View>
					<View style={{marginTop:20}}>
						<View style={styless.formItem}>
							<View style={{flex: 1, flexDirection: 'row'}}>
								<MCIcon name={'account-outline'} size={22} color={colors.loginBgRed} style={styless.loginIcon}/>
								<TextInput underlineColorAndroid="transparent" autoCapitalize={"none"}
													 ref={"name"} style={{...styless.textInputStyles, flex: 1}} placeholder="用户名/手机号"
													 placeholderTextColor={colors.textLight}
													 maxLength={30}
													 onChangeText={(text) => {
														 this.setState({loginName: text});
													 }}/>
							</View>
							<View style={{height: 1, backgroundColor: colors.lightBorderColor}}/>
						</View>
						<View style={styless.formItem}>
							<View style={{flex: 1, flexDirection: 'row'}}>
								<MCIcon name={'lock-outline'} size={20} color={colors.loginBgRed} style={styless.loginIcon}/>
								<TextInput underlineColorAndroid="transparent" autoCapitalize={"none"}
													 ref={"password"} style={{...styless.textInputStyles, flex: 1}} placeholder="密码"
													 placeholderTextColor={colors.textLight}
													 maxLength={30}
													 secureTextEntry={true}
													 onChangeText={(text) => this.setState({password: text})}
								/>
							</View>
							<View style={{height: 1, backgroundColor: colors.lightBorderColor}}/>
						</View>
						<TouchableOpacity onPress={()=>this.submitDown()}>
							<View
								style={{...styless.loginButton}}>
								<Text style={{fontSize: 20, color: colors.white}}>{"登录"}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=> {this.props.navigation.navigate("FindPassWord")}}>
							<View style = {{ alignItems: "center",justifyContent: "center",marginTop:20}}>
								<Text style={{fontSize: 15, color: colors.placeHolderTextColor}}>{"忘记密码?"}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{height:300}}/>
				</ScrollView>
			</Container>
		)
	}
	//登陆
	submitDown(){
		this.props.navigation.navigate('MainPage');
	}
}
const styless = {
	formItem: {
		height: 60,
		marginLeft: 25,
		marginRight: 25,
		paddingTop: 20,
	},
	loginIcon: {
		marginLeft: 10,
		alignSelf: 'center',
	},
	loginButton: {
		borderRadius: 3,
		backgroundColor: colors.loginBgRed,
		marginLeft: 25,
		marginRight: 25,
		marginTop: 50,
		height: 45,
		alignItems: "center",
		justifyContent: "center"
	},
	textInputStyles: {
		height: 50,
		fontSize: 15,
		color: colors.textTitle,
		alignSelf: 'center',
		paddingLeft: 5,
		paddingRight: 10
	},
};
const mapStateToProps = (state) => {
	return {
	}
}
export default connect(mapStateToProps)(Login);