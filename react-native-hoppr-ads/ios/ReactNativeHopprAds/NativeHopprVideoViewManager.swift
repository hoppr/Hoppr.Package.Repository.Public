
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

class NativeHopprVideoView: UIView, IMAAdsLoaderDelegate, IMAAdsManagerDelegate {
  //    static let ContentURLString = "https://storage.googleapis.com/gvabox/media/samples/stock.mp4"
  //  static let ContentURLString = "https://example.com/my-example-video.m3u8"
  //  static let AdTagURLString = "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
//  static let AdTagURLString = "https://pubads.g.doubleclick.net/gampad/ads?iu=/21854952015/DevUnit/DevVideo/HopprSdkSampleVideoSkippable&tfcd=0&npa=0&sz=1920x1080%7C1920x1080&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
  
  private var contentPlayhead: IMAAVPlayerContentPlayhead?
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

         currentAdTag = adTag
         currentPpid = ppid
         currentScaleMode = scaleMode
         
          if(!isInit){
            sendLogEvent(content: "just init")
            tryLoadAd()
          }else if (previousAdTag != adTag && !play.boolValue){
            sendLogEvent(content: "release then init")
            release()
            tryLoadAd()
          }
       }
     }
   }
    
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    self.backgroundColor = UIColor.clear;
    
    
//    setUpContentPlayer()
//    setUpAdsLoader()
//    sendLogEvent(content: "maxdebug : init()")
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    
    self.backgroundColor = UIColor.clear;
    
//    setUpContentPlayer()
//    sendLogEvent(content: "maxdebug : init 2()")
  }
  
  func isReadyToInitalize() -> Bool {
    return !currentPpid.isEmpty && !currentScaleMode.isEmpty && !currentAdTag.isEmpty && isWindowReady
  }
  
  func setUpAdsLoader() {
    sendLogEvent(content: "maxdebug : setUpAdsLoader()")
    
    let locale = Locale.current.languageCode
    let adsLoaderSettings = IMASettings()
    adsLoaderSettings.ppid = currentPpid
    
    if let safeLocale = locale {
      sendLogEvent(content: "maxdebug : setUpAdsLoader() " + safeLocale)
      adsLoaderSettings.language = safeLocale
    }
    
    adsLoader = IMAAdsLoader(settings: adsLoaderSettings)
    adsLoader.delegate = self
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

      setUpContentPlayer()
      setUpAdsLoader()
      
      playerLayer?.frame = self.layer.bounds
      
      requestAds()
    }
  }
  
  func playAd(){
    adsManager.start()
  }
  
//  dealloc{
//    sendLogEvent(content: "dealloc")
//  }
    
  func requestAds() {
    sendLogEvent(content: "maxdebug : requestAds()")
    
    let adDisplayContainer = IMAAdDisplayContainer(adContainer: self, viewController: adContainerViewController)
    
    //    let test = adDisplayContainer.adContainer.layer.sublayers?.first
    
    //    sendLogEvent ("%@", test ?? "<nil>");
    
    //    if let adPlayerLayer = test as? AVPlayerLayer {
    //      sendLogEvent(content: "maxdebug : yes()")
    //        adPlayerLayer.videoGravity = .resizeAspectFill
    //    }
    
    let request = IMAAdsRequest(
      adTagUrl: currentAdTag,
      adDisplayContainer: adDisplayContainer,
      contentPlayhead: contentPlayhead,
      userContext: nil)
    
    adsLoader.requestAds(with: request)
  }
  
  func setUpContentPlayer() {
    sendLogEvent(content: "maxdebug : setUpContentPlayer()")
    //        let contentURL = URL(string: VideoPlayerView.ContentURLString)
    //        let player = AVPlayer(url: contentURL!)// Create a player layer for the player.
    player = AVPlayer()
    guard let player = player else { return }
    
    playerLayer = AVPlayerLayer(player: player)
    
//    player.externalPlaybackVideoGravity = AVLayerVideoGravity.resizeAspectFill
          // playerLayer?.videoGravity = AVLayerVideoGravity.resizeAspectFill
          // playerLayer?.contentsGravity = CALayerContentsGravity.resizeAspectFill
    guard let playerLayer = playerLayer else { return }
    playerLayer.frame = self.layer.bounds
    self.layer.addSublayer(playerLayer)
    playerViewController = AVPlayerViewController()
    playerViewController.player = player
    playerViewController.showsPlaybackControls = false
    contentPlayhead = IMAAVPlayerContentPlayhead(avPlayer: player)
    
//    showContentPlayer()
  }
  
  func showContentPlayer() {
    sendLogEvent(content: "maxdebug : showContentPlayer()")
    self.addSubview(playerViewController.view)
    playerViewController.view.frame = self.bounds
  }
  
  func hideContentPlayer() {
    sendLogEvent(content: "maxdebug : hideContentPlayer()")
    // The whole controller needs to be detached so that it doesn't capture events from the remote.
    playerViewController.willMove(toParent:nil)
    playerViewController.view.removeFromSuperview()
    playerViewController.removeFromParent()
  }
  
  func adsLoader(_ loader: IMAAdsLoader, adsLoadedWith adsLoadedData: IMAAdsLoadedData) {
    sendLogEvent(content: "maxdebug : adsLoader() 1")
    adsManager = adsLoadedData.adsManager
    adsManager.delegate = self
    
//    let adsRenderingSettings = IMAAdsRenderingSettings()
//    adsRenderingSettings.linkOpenerPresentingController = adContainerViewController
    
    adsManager.initialize(with: nil)
  }
  
  func adsLoader(_ loader: IMAAdsLoader, failedWith adErrorData: IMAAdLoadingErrorData) {
    sendLogEvent(content: "maxdebug : adsLoader() error " + adErrorData.adError.message!)
    //      showContentPlayer()
    //      playerViewController.player?.play()
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
    sendLogEvent(content: "maxdebug : adsManagerDidRequestContentPause()")
    playerViewController.player?.pause()
    hideContentPlayer()
    
  }
  
  func adsManagerDidRequestContentResume(_ adsManager: IMAAdsManager) {
    sendLogEvent(content: "maxdebug : adsManagerDidRequestContentResume()")
    
    // Resume the content since the SDK is done playing ads (at least for now).
//    showContentPlayer()
//    playerViewController.player?.play()
    //adsManager.delegate = self
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
    contentPlayhead = nil
    
    currentPpid = ""
    currentAdTag = ""
    currentScaleMode = ""
    play = false
    isLoaded = false
    isWindowReady = false
    isInit = false
  }
}
