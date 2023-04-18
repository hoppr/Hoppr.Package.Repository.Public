//
//  CounterViewManager.m
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 11/4/2023.
//

// #import <Foundation/Foundation.h>
// #import "React/RCTViewManager.h"

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(NativeHopprVideoViewManager, RCTViewManager)

//RCT_EXPORT_VIEW_PROPERTY(ppid, NSString)
//RCT_EXPORT_VIEW_PROPERTY(adTag, NSString)
//RCT_EXPORT_VIEW_PROPERTY(scaleMode, NSString)
RCT_EXPORT_VIEW_PROPERTY(properties, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(play, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

@end
