//
//  HierarchyReaderModule.m
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(HierarchyReaderModule, RCTEventEmitter)
  RCT_EXTERN_METHOD(getViewHierarchy: (RCTResponseSenderBlock *)successCallback)
//   + (BOOL) requiresMainQueueSetup { return YES; }
//+ (BOOL) requiresMainQueueSetup {
//  return YES;
//}
@end
