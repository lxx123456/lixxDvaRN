/**
 * 图片大图预览
 */
import React, {Component} from 'react';
import {
	View,
	Easing,
	Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

class ImageShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			imageIndex: 1,
		};
	}

	componentWillMount() {
		// 上个界面传来的照片集合
		// imageArray
		const params = this.props.navigation.state.params;
		const images = params.imageArray;
		const pageNum = params.indexNum;

		this.setState({
			images: images,
			imageIndex: pageNum,
		});
	}

	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Modal visible={true} transparent={true}>
				<ImageViewer imageUrls={this.state.images}
										 index={this.state.imageIndex}
										 onClick={() => { // 点击
											 this.props.navigation.goBack();
										 }}
				/>
			</Modal>
		)
	}


}

export default ImageShow;
