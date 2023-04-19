//
//  ClosureBasedViewController.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 18/4/2023.
//

import Foundation
import UIKit

class ClosureBasedViewController: UIViewController {
    var onViewWillAppear: (() -> Void)?
    var onViewDidAppear: (() -> Void)?
    var onViewWillDisappear: (() -> Void)?
    var onViewDidDisappear: (() -> Void)?
    
    override var canBecomeFirstResponder: Bool {
            return false
        }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillDisappear(animated)
      onViewWillAppear?()
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewWillDisappear(animated)
      onViewDidAppear?()
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
      onViewWillDisappear?()
    }

    override func viewDidDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
      onViewDidDisappear?()
    }
}
