//
//  StringExtensions.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation

extension String {
    mutating func appendIfNotEmpty(prefix: String, value: String?) {
        if let nonEmptyValue = value, !nonEmptyValue.isEmpty, nonEmptyValue != "nil" {
            append(" | \(prefix):\(nonEmptyValue)")
        }
    }
}
