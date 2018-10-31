import React, {Component} from 'react';
import colors from 'js/Themes/Colors'
import {
    Container,
    Content,
    Toast
} from "native-base";
import HeadStatusBar from 'js/Components/HeaderStatus'
import {MapView, MapTypes, MapModule, Geolocation} from 'react-native-baidu-map';
import HeadBar from 'js/Components/HeaderBar'
import {
    View,
    ScrollView,
    Image,
    Alert,
    Text,
    Dimensions,
    Keyboard,
    TouchableOpacity,
    TextInput,
    WebView,
    FlatList,
    PermissionsAndroid,
    Platform
} from 'react-native';
import BasePage from  '../BasePage/BaseComponent'
import connect from "react-redux/es/connect/connect";
const permission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


class Order extends  Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            pageName:'A',
            mayType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: 39.994404,
                latitude: 116.340651
            },
            baiduHeatMapEnabled: false,
        };
    }

    componentDidMount() {
        console.log('order 里面的componentDidMount 测试super')
    }

    /**定位**/
    positingMap() {
        Geolocation.getCurrentPosition()
            .then(data => {
                if (data) {
                    this.setState({
                        center: {
                            latitude: data.latitude,
                            longitude: data.longitude,
                            rand: Math.random()
                        }
                    })
                    this.props.loadNearStore({
                        lat: data.latitude,
                        lng: data.longitude
                    })
                }
            })
            .catch(e => {
                Toast.info('定位失败' + e);
            })
    }

    componentWillMount() {
        if (Platform.OS == 'ios') {
            this.positingMap()
        }
        else {
            this._checkPermission();
        }
    }

    static navigationOptions = {
        header: null
    };
    /*检查地图权限*/
    _checkPermission = async () => {
        let result = await PermissionsAndroid.check(permission);
        if (!result) {
            this._requestPermission();
        } else {
            this.setState({hasPermission: true}, () => {
                this.positingMap()
            });
        }
    };

    render() {
        return (
            <Container style={{backgroundColor: colors.pageBackgroundColor}}>
                <HeadBar
                    titleText={"订单"}
                    leftVisible={false}
                    rightVisible={false}/>
                <Content style={{backgroundColor: 'white',}}>
                    {/*<MapView*/}
                        {/*trafficEnabled={this.state.trafficEnabled}*/}
                        {/*baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}*/}
                        {/*zoom={this.state.zoom}*/}
                        {/*mapType={this.state.mapType}*/}
                        {/*center={this.state.center}*/}
                        {/*markers={this.state.markers}*/}
                        {/*style={styles.map}*/}
                        {/*onMarkerClick={(e) => {*/}
                            {/*console.warn(JSON.stringify(e));*/}
                        {/*}}*/}
                        {/*onMapClick={(e) => {*/}
                        {/*}}*/}
                    {/*/>*/}
                </Content>
            </Container>
        )
    }
}

const styles = {
    map:{
        width:deviceWidth,
        height:deviceHeight
    }
}


const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps)(BasePage(Order));

