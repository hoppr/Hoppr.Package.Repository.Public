
import UIKit
import AVKit
import AVFoundation
import GoogleInteractiveMediaAds

@objc(NativeHopprVideoViewManager)
class NativeHopprVideoViewManager: RCTViewManager {
  
  override func view() -> (UIView) {
    NSLog("maxdebug : ViewController()")
    
    let viewController = NativeHopprVideoView()
    return viewController
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  //  @objc func updateFromManager(_ node: NSNumber, count: String) {
  //      DispatchQueue.main.async {
  //        let component = self.bridge.uiManager.view(
  //          forReactTag: node
  //        ) as! VideoPlayerView
  //        component.update(value: count)
  //      }
  //    }
}

class NativeHopprVideoView: UIView, IMAAdsLoaderDelegate, IMAAdsManagerDelegate, AVPictureInPictureControllerDelegate {
  private var playerViewController: AVPlayerViewController!
  private var adsLoader: IMAAdsLoader!
  private var adsManager: IMAAdsManager!
  private var playerLayer: AVPlayerLayer?
  private var player: AVPlayer?
  private var adContainerViewController: ClosureBasedViewController?
  private var isWindowReady = false
  private var isLoaded = false
  private var isInit = false
  private var previousAdTag = ""
  private var currentAdTag = ""
  private var currentPpid = ""
  private var currentScaleMode = ""
  
  @objc var onChange: RCTBubblingEventBlock?

  @objc var play: ObjCBool = false {
     didSet {
       if(play.boolValue){
         playAd()
       }
     }
   }

  @objc var properties: NSDictionary = [:] {
     didSet {
       if let ppid = properties["ppid"] as? String,
          let adTag = properties["adTag"] as? String,
          let scaleMode = properties["scaleMode"] as? String {
         sendLogEvent(content: "properties received")
         
         
          if(!isInit){
            sendLogEvent(content: "just init")
            
            currentAdTag = adTag
            currentPpid = ppid
            currentScaleMode = scaleMode
            
            tryLoadAd()
          }else if (previousAdTag != adTag && !play.boolValue){
            sendLogEvent(content: "release then init")
            release()
            
            currentAdTag = adTag
            currentPpid = ppid
            currentScaleMode = scaleMode
            
            tryLoadAd()
          }
       }
     }
   }
  
  override func pressesBegan(_ presses: Set<UIPress>, with event: UIPressesEvent?) {
//         for press in presses {
//             if let key = press.key, key == UIKeyCommand.inputEscape {
//                 nativeHopprVideoViewManager?.releasePlayer()
//             }
//         }
//
    
    sendLogEvent(content: "pressesBegan")
         super.pressesBegan(presses, with: event)
     }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    self.backgroundColor = UIColor.clear;
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    
    self.backgroundColor = UIColor.clear;
  }
  
  override func didMoveToWindow() {
    sendLogEvent(content: "maxdebug : didMoveToWindow()")
    super.didMoveToWindow()
    if window != nil {
      sendLogEvent(content: "maxdebug : didMoveToWindow2()")
      isWindowReady = true
      tryLoadAd()
    }else{
      isWindowReady = false
    }
  }
  
  func tryLoadAd(){
    if(isReadyToInitalize()){
      adContainerViewController = ClosureBasedViewController()
      adContainerViewController?.view = self

//      adContainerViewController?.onViewWillAppear = {
//        self.sendLogEvent(content: "onViewWillAppear")
//      }
//
//      adContainerViewController?.onViewDidAppear = {
//        self.sendLogEvent(content: "onViewDidAppear")
//      }
//
//      adContainerViewController?.onViewWillDisappear = {
//        self.sendLogEvent(content: "onViewWillDisappear")
//      }
//
//      adContainerViewController?.onViewDidDisappear = {
//        self.sendLogEvent(content: "onViewDidDisappear")
//      }
      
      isInit = true
      previousAdTag = currentAdTag
      
      sendLogEvent(content: "maxdebug : tryLoadAd()")

      setUpPlayer()
      setUpAdsLoader()
      
      
      requestAds()
    }
  }
  
  func isReadyToInitalize() -> Bool {
    return !currentPpid.isEmpty && !currentScaleMode.isEmpty && !currentAdTag.isEmpty && isWindowReady
  }
  
  func setUpAdsLoader() {
    sendLogEvent(content: "maxdebug : setUpAdsLoader()")
    
    let locale = Locale.current.languageCode
    let adsLoaderSettings = IMASettings()
    adsLoaderSettings.ppid = currentPpid
    adsLoaderSettings.enableBackgroundPlayback = true
    
    if let safeLocale = locale {
      sendLogEvent(content: "maxdebug : setUpAdsLoader() " + safeLocale)
      adsLoaderSettings.language = safeLocale
    }
    
    adsLoader = IMAAdsLoader(settings: adsLoaderSettings)
    adsLoader.delegate = self
  }
  
  func playAd(){
    playerViewController.view.isHidden = false
    adsManager.start()
  }

  func requestAds() {
    sendLogEvent(content: "maxdebug : requestAds()")
    
    let adDisplayContainer = IMAAdDisplayContainer(adContainer: self, viewController: adContainerViewController)
    
    let request = IMAAdsRequest(
      adTagUrl: currentAdTag,
      adDisplayContainer: adDisplayContainer,
      avPlayerVideoDisplay: IMAAVPlayerVideoDisplay(avPlayer: player!),
      pictureInPictureProxy: IMAPictureInPictureProxy(avPictureInPictureControllerDelegate: self),
      userContext: nil)
    
    adsLoader.requestAds(with: request)
  }
  
  func setUpPlayer() {
    sendLogEvent(content: "maxdebug : setUpContentPlayer()")
    
    player = AVPlayer()
    guard let player = player else { return }
    
    playerLayer = AVPlayerLayer(player: player)
    guard let playerLayer = playerLayer else { return }
    
    playerLayer.frame = self.layer.bounds
    self.layer.addSublayer(playerLayer)

    playerViewController = AVPlayerViewController()
    playerViewController.player = player
    playerViewController.showsPlaybackControls = false
    
    if(currentScaleMode == "zoom"){
      playerViewController.videoGravity = AVLayerVideoGravity.resizeAspectFill
    }
    
    playerViewController.view.frame = self.bounds
    playerViewController.view.isHidden = true
    
    self.addSubview(playerViewController.view)
  }
  
  
  func adsLoader(_ loader: IMAAdsLoader, adsLoadedWith adsLoadedData: IMAAdsLoadedData) {
    sendLogEvent(content: "maxdebug : adsLoader() 1")
    adsManager = adsLoadedData.adsManager
    adsManager.delegate = self
    
    let adsRenderingSettings = IMAAdsRenderingSettings()
//    adsRenderingSettings.linkOpenerPresentingController = adContainerViewController
    
    adsManager.initialize(with: nil)
  }
  
  func adsLoader(_ loader: IMAAdsLoader, failedWith adErrorData: IMAAdLoadingErrorData) {
    sendLogEvent(content: "maxdebug : adsLoader() error " + adErrorData.adError.message!)
    let errorMessage = "\(adErrorData.adError.code) | \(adErrorData.adError.type) | \(String(describing: adErrorData.adError.message))"
    sendNativeEvent(nativeEvent: NativeEvent(eventType:EventType.adErrorEvent, errorMessage: errorMessage))
    release()
  }
  
  func adsManager(_ adsManager: IMAAdsManager, didReceive error: IMAAdError) {
    sendLogEvent(content: "maxdebug : adsManager() 1")
    let errorMessage = "\(error.code) | \(error.type) | \(String(describing: error.message))"
    sendNativeEvent(nativeEvent: NativeEvent(eventType:EventType.adErrorEvent, errorMessage: errorMessage))
    release()
  }
  
  func sendNativeEvent(nativeEvent: NativeEvent){
    if onChange != nil {
      onChange?(nativeEvent.toDictionary())
    }
  }
  
  func sendLogEvent(content: String){
    sendNativeEvent(nativeEvent: NativeEvent(eventType: EventType.logEvent, message: content))
  }
  
  func adsManager(_ adsManager: IMAAdsManager, didReceive event: IMAAdEvent) {
    sendLogEvent(content: "maxdebug : adsManager() 2")
    sendNativeEvent(nativeEvent: NativeEvent(eventType:EventType.adEvent, adEventType: event.type))
    
    switch(event.type){
    case .LOADED:
      isLoaded = true
    case .AD_BREAK_FETCH_ERROR:
      release()
    case .ALL_ADS_COMPLETED:
      release()
    @unknown default:
      break
    }
  }
  
  func adsManagerDidRequestContentPause(_ adsManager: IMAAdsManager) {
//    sendLogEvent(content: "maxdebug : adsManagerDidRequestContentPause()")
  }
  
  func adsManagerDidRequestContentResume(_ adsManager: IMAAdsManager) {
//    sendLogEvent(content: "maxdebug : adsManagerDidRequestContentResume()")
  }
  
  func release(){
    adsManager?.destroy()
    adsLoader?.contentComplete()
    player?.pause()
    player = nil
    adsManager = nil
    adsLoader = nil
    playerLayer?.removeFromSuperlayer()
    playerLayer = nil
     playerViewController?.willMove(toParent:nil)
     playerViewController?.view.removeFromSuperview()
     playerViewController?.removeFromParent()
    adContainerViewController?.willMove(toParent:nil)
    adContainerViewController?.view.removeFromSuperview()
    adContainerViewController?.removeFromParent()
    
   playerViewController = nil
    adContainerViewController = nil
    
    currentPpid = ""
    currentAdTag = ""
    currentScaleMode = ""
    play = false
    isLoaded = false
    isWindowReady = false
    isInit = false
  }
}
