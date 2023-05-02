//
//  ObjC.h
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

#import <Foundation/Foundation.h>

@interface ObjC : NSObject

+ (BOOL)catchException:(void(^)(void))tryBlock error:(__autoreleasing NSError **)error;

@end
