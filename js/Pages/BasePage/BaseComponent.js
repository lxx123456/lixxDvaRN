import React, {Component} from 'react';
import JAnalyticsModule from 'janalytics-react-native'
import {Platform} from "react-native";

export default (WrappedComponent) => {

	class BaseComponent extends WrappedComponent {

		componentDidMount() {
			let pageName = '';
			if (this.state != null && this.state.pageName) {
				pageName = this.state.pageName
			}
			console.log('start  JAnalytic>>>>>>>>>>>' + pageName)
			if (pageName) {
				JAnalyticsModule.startLogPageView({pageName});
			}
		}

		componentWillUnmount() {
			let pageName = '';
			if (this.state != null && this.state.pageName) {
				pageName = this.state.pageName
			}
			console.log('stop  JAnalytic>>>>>>>>>>>' + pageName)
			if (pageName) {
				JAnalyticsModule.stopLogPageView({pageName});
			}
		}

		render() {
			return (
				<WrappedComponent {...this.props}/>
			)
		}
	}

	return BaseComponent
}



