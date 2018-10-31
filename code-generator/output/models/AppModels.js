
//--------------------
//下面的内容复制到 Config/api文件 里面



//-----------------------------
//下面的内容复制到 Constants/ActionTypes文件 里面
//（用 '> '替代 '/'是因为dva会认为没必要写namespace但是我认为在ActionTypes文件还是要区分，便于阅读代码

//主页点击tabbar
export const CLICK_TABBAR = 'app>CLICK_TABBAR'


//下面的内容会写到 output文件夹 名字为filename --------------------------
import {API} from '../Config/api'
import request from 'js/Utils/Request';
import {Toast} from 'antd-mobile'
import {createAction} from "../Utils";
import Immutable from 'immutable';

import{
  CLICK_TABBAR//主页点击tabbar
  }  from '../Constants/ActionTypes';

export default {
  namespace: 'app',
  state: Immutable.fromJS({
      a:2
  }),
reducers: {
  /** 主页点击tabbar*/
  [CLICK_TABBAR](state, { payload }){
        return state.set('a',1);
    },
  },
effects: {
 
  },
}

