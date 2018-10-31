import React, {Component} from 'react';
import colors from 'js/Themes/Colors'
import {
	Container,
	Text,
	View
} from "native-base";
import HeadBar from 'js/Components/HeaderBar'

class Customer extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container style={{backgroundColor: colors.pageBackgroundColor}}>
				<HeadBar
					titleText={"客户"}
					leftVisible={false}
					rightVisible={false}/>
			</Container>
		)
	}
}


export default Customer