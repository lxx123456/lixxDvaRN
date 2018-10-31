import React, {Component} from 'react';
import colors from 'js/Themes/Colors'
import {
	Container,
	Text,
	View,
} from "native-base";
import {TouchableOpacity} from 'react-native'
import HeadBar from 'js/Components/HeaderBar'
import HeaderStatus from 'js/Components/HeaderStatus'
import BasePage from  '../BasePage/BaseComponent'


class aa extends Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props)
		this.state = {
			pageName: 'aa',
		}
	}

	render() {
		return (
			<Container style={{backgroundColor: colors.pageBackgroundColor}}>
				<HeaderStatus/>
				<HeadBar
					titleText={"11"}
					leftBackIconOnPress={() => this.props.navigation.goBack()}
				/>
				<TouchableOpacity onPress={()=> {this.props.navigation.navigate('bb')}}>
					<Text style={{marginTop:100}}>点击22</Text>
				</TouchableOpacity>
			</Container>
		)
	}
}


export default BasePage(aa)