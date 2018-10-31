import React, {Component} from 'react';
import colors from 'js/Themes/Colors'
import {
	Container,
	Text,
	View
} from "native-base";
import HeadBar from 'js/Components/HeaderBar'
import HeaderStatus from 'js/Components/HeaderStatus'
import BasePage from  '../BasePage/BaseComponent'


class bb extends Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props)
		this.state = {
			pageName: 'bb',
		}
	}

	render() {
		return (
			<Container style={{backgroundColor: colors.pageBackgroundColor}}>
				<HeaderStatus/>
				<HeadBar
					titleText={"22"}
					leftBackIconOnPress={() => this.props.navigation.goBack()}
				/>
			</Container>
		)
	}
}


export default BasePage(bb)