package com.polysoftrn;
import cn.jiguang.analytics.android.api.JAnalyticsInterface;
import android.app.Application;
import com.facebook.react.ReactApplication;
import cn.jpush.reactnativejanalytics.JAnalyticsPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.beefe.picker.PickerViewPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import cn.jpush.reactnativejpush.JPushPackage;
import com.theweflex.react.WeChatPackage;
import org.lovebing.reactnative.baidumap.BaiduMapPackage; //添加


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
    // JPushToast设置： true将不会弹出   false会弹出
    private boolean SHUTDOWN_TOAST = false;
    // JPushLog设置：true将不会打印 log  true会打印log
    private boolean SHUTDOWN_LOG = false;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new JAnalyticsPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG),
              new PickerPackage(),
              new ImageResizerPackage(),
              new PickerViewPackage(),
              new RNDeviceInfo(),
              new VectorIconsPackage(),
              new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG),
              new WeChatPackage(),
              new BaiduMapPackage(getApplicationContext()) // 添加
              );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, false);
   //在 Init 之前调用，设置为 true，则会打印 debug 级别日志，否则只会打印 warning 级别以上的日志
   //JAnalyticsInterface.setDebugMode(true);
     JAnalyticsInterface.init(this);
  }
}
