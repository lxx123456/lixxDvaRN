//
//  RCTJAnalyticsModule.m
//  janalytics
//
//  Created by oshumini on 2017/7/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTJAnalyticsModule.h"
#import "JANALYTICSService.h"

#if __has_include(<React/RCTBridge.h>)
#import <React/RCTEventDispatcher.h>
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#elif __has_include("RCTBridge.h")
#import "RCTEventDispatcher.h"
#import "RCTRootView.h"
#import "RCTBridge.h"
#elif __has_include("React/RCTBridge.h")
#import "React/RCTEventDispatcher.h"
#import "React/RCTRootView.h"
#import "React/RCTBridge.h"
#endif

@implementation RCTJAnalyticsModule

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

+ (id)allocWithZone:(NSZone *)zone {
  static RCTJAnalyticsModule *sharedInstance = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sharedInstance = [super allocWithZone:zone];
  });
  return sharedInstance;
}

- (id)init {
  self = [super init];
  return self;
}

RCT_EXPORT_METHOD(setup:(NSDictionary *)param){
  JANALYTICSLaunchConfig * config = [[JANALYTICSLaunchConfig alloc] init];
  if (param[@"appKey"]) {
    config.appKey = param[@"appKey"];
  }
  [JANALYTICSService setupWithConfig:config];
}

RCT_EXPORT_METHOD(startLogPageView:(NSDictionary *)param){
  NSString *pageName = @"";
  if (param[@"pageName"]) {
    pageName = param[@"pageName"];
  }
  [JANALYTICSService startLogPageView: pageName];
}

RCT_EXPORT_METHOD(stopLogPageView:(NSDictionary *)param){
  NSString *pageName = @"";
  if (param[@"pageName"]) {
    pageName = param[@"pageName"];
  }
  [JANALYTICSService stopLogPageView: pageName];
}

RCT_EXPORT_METHOD(uploadLocation:(NSDictionary *)param){
  double latitude = 0.0;
  double longitude = 0.0;
  
  if (param[@"latitude"]) {
    NSNumber *latitudeNum = param[@"latitude"];
    latitude = [latitudeNum doubleValue];
  }
  
  if (param[@"latitude"]) {
    NSNumber *latitudeNum = param[@"latitude"];
    latitude = [latitudeNum doubleValue];
  }
  
  [JANALYTICSService setLatitude: latitude longitude: longitude];
}

RCT_EXPORT_METHOD(crashLogON){
  [JANALYTICSService crashLogON];
}

RCT_EXPORT_METHOD(setDebug:(NSDictionary *)param){
  BOOL enable = false;
  if (param[@"enable"]) {
    NSNumber *enableNum = param[@"enable"];
    enable = [enableNum boolValue];
  }
  [JANALYTICSService setDebug: enable];
}

RCT_EXPORT_METHOD(postEvent:(NSDictionary *)param){
  NSString *type = @"";
  if (param[@"type"]) {
    type = param[@"type"];
  }
  
  if ([type isEqualToString: @"login"]) {
    JANALYTICSLoginEvent *loginEvent = [[JANALYTICSLoginEvent alloc] init];
    
    if (param[@"extra"]) {
      NSDictionary *extra = param[@"extra"];
      loginEvent.extra = extra;
    }
    
    if (param[@"method"]) {
      NSString *method = param[@"method"];
      loginEvent.method = method;
    }
    
    if (param[@"success"]) {
      NSNumber *success = param[@"success"];
      loginEvent.success = [success boolValue];
    }

    [JANALYTICSService eventRecord: loginEvent];
  }
  
  if ([type isEqualToString: @"register"]) {
    JANALYTICSRegisterEvent *registerEvent = [[JANALYTICSRegisterEvent alloc] init];
    
    if (param[@"extra"]) {
      NSDictionary *extra = param[@"extra"];
      registerEvent.extra = extra;
    }
    
    if (param[@"method"]) {
      NSString *method = param[@"method"];
      registerEvent.method = method;
    }
    
    if (param[@"success"]) {
      NSNumber *success = param[@"success"];
      registerEvent.success = [success boolValue];
    }
    [JANALYTICSService eventRecord: registerEvent];
  }
  
  if ([type isEqualToString: @"purchase"]) {
    JANALYTICSPurchaseEvent *purchaseEvent = [[JANALYTICSPurchaseEvent alloc] init];
    if (param[@"extra"]) {
      NSDictionary *extra = param[@"extra"];
      purchaseEvent.extra = extra;
    }
    
    if (param[@"goodsType"]) {
      NSString *goodsType = param[@"goodsType"];
      purchaseEvent.goodsType = goodsType;
    }
    
    if (param[@"goodsId"]) {
      NSString *goodsId = param[@"goodsId"];
      purchaseEvent.goodsID = goodsId;
    }
    
    if (param[@"goodsName"]) {
      NSString *goodsName = param[@"goodsName"];
      purchaseEvent.goodsName = goodsName;
    }
    
    if (param[@"success"]) {
      NSNumber *success = param[@"success"];
      purchaseEvent.success = [success boolValue];
    }
    
    if (param[@"price"]) {
      NSNumber *price = param[@"price"];
      purchaseEvent.price = [price floatValue];
    }
    
    if (param[@"currency"]) {
      NSString *currency = param[@"currency"];
      if ([currency isEqualToString:@"CNY"]) {
        purchaseEvent.currency = JANALYTICSCurrencyCNY;
      }
      
      if ([currency isEqualToString:@"USD"]) {
        purchaseEvent.currency = JANALYTICSCurrencyUSD;
      }
    }
    [JANALYTICSService eventRecord: purchaseEvent];
  }
  
  if ([type isEqualToString: @"browse"]) {

    JANALYTICSBrowseEvent *browseEvent = [[JANALYTICSBrowseEvent alloc] init];
    if (param[@"extra"]) {
      NSDictionary *extra = param[@"extra"];
      browseEvent.extra = extra;
    }
    
    if (param[@"name"]) {
      NSString *name = param[@"name"];
      browseEvent.name = name;
    }
    
    if (param[@"id"]) {
      browseEvent.contentID = param[@"id"];
    }
    
    if (param[@"contentType"]) {
      NSString *contentType = param[@"contentType"];
      browseEvent.type = contentType;
    }
    
    if (param[@"duration"]) {
      NSNumber *duration = param[@"duration"];
      browseEvent.duration = [duration floatValue];
    }
    [JANALYTICSService eventRecord: browseEvent];
  }
  
  if ([type isEqualToString: @"count"]) {
    JANALYTICSCountEvent *countEvent = [[JANALYTICSCountEvent alloc] init];
    if (param[@"extra"]) {
      NSDictionary *extra = param[@"extra"];
      countEvent.extra = extra;
    }
    
    if (param[@"id"]) {
      countEvent.eventID = param[@"id"];
    }
    [JANALYTICSService eventRecord: countEvent];
  }
  
  if ([type isEqualToString: @"calculate"]) {
    JANALYTICSCalculateEvent *calculateEvent = [[JANALYTICSCalculateEvent alloc] init];
    if (param[@"extra"]) {
      NSDictionary *extra = param[@"extra"];
      calculateEvent.extra = extra;
    }
    
    if (param[@"id"]) {
      calculateEvent.eventID = param[@"id"];
    }
    
    if (param[@"value"]) {
      NSNumber *value = param[@"value"];
      calculateEvent.value = [value floatValue];
    }
    [JANALYTICSService eventRecord: calculateEvent];
  }
}

@end
