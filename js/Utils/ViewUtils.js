
import { findNodeHandle,InteractionManager} from 'react-native';


/**
 * 1、当键盘显示时判断界面是否要进行滚动
 * @param RootView :根view: 为view
 * @param target : 目标TextInput
 * @param scrollHeight
 */
export function measureToNativeScroll(RootView,target,limitHeight,scrollHeight){
	if(RootView!=undefined && target!=undefined){
		if(target.measure!=undefined){//TextInput
			measureToTarget(RootView,target,target,limitHeight,scrollHeight,1);
		}else if(target.refs!=undefined && target.refs["textInput"]!=undefined && target.refs["textInput"].measure!=undefined){//AutoExpandingTextInput
			measureToTarget(RootView,target,target.refs["textInput"],limitHeight,scrollHeight,1);
		}
	}
}



/**
 * 2、当键盘显示时判断界面是否要进行滚动
 * @param RootView :根view为content,container
 * @param target : 目标TextInput
 * @param scrollHeight
 */
export function measureToScroll(RootView,target,limitHeight,scrollHeight){
	if(RootView!=undefined && target!=undefined){
		if(target.measure!=undefined){//TextInput
			measureToTarget(RootView,target,target,limitHeight,scrollHeight,2);
		}else if(target.refs!=undefined && target.refs["textInput"]!=undefined && target.refs["textInput"].measure!=undefined){//AutoExpandingTextInput
			measureToTarget(RootView,target,target.refs["textInput"],limitHeight,scrollHeight,2);
		}
	}
}




function measureToTarget(RootView,target,measureTarget,limitHeight,scrollHeight,type){
	measureTarget.measure((x, y, width, height, px, py)=>{
		// console.log("x==",x,";y==",y,";width==",width,";height==",height,";px==",px,";py==",py);
		if(py>=limitHeight){//在keyboard下面
			if(type == 1){ //有getScrollResponder 方法
				_scrollNativeToTarget(RootView, target,scrollHeight);
			}else if(type ==2){ // 有scrollToFocusedInput 方法
				_scrollToTarget(RootView, target,scrollHeight);
			}

		}
	});
}

/**
 * 1、滚动到指定元素
 * 根布局为view,调用方法为react native 方法
 * @param RootView ：根view
 * @param target :目标TextInput
 * @private
 */
export function _scrollNativeToTarget(RootView,target,scrollHeight){
	if(RootView!=undefined){
		let scrollResponder = RootView.getScrollResponder();
		scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
			findNodeHandle(target), scrollHeight, true)
	}
}




/**
 * 2、滚动到指定元素
 * @param RootView ：根view为content,container
 * @param target :目标TextInput
 * @private
 */
export function _scrollToTarget(RootView,target,scrollHeight){
	if(RootView!=undefined && RootView.scrollToFocusedInput!=undefined && target!=undefined){
		RootView.scrollToFocusedInput(findNodeHandle(target,scrollHeight));
	}
}




