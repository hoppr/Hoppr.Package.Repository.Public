require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "ReactNativeHopprAds"
  s.version      = "0.0.2"
  s.summary      = "summary"
  s.description  = "desc"
  s.homepage     = "https://maxmaxb.github.io/"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Maxence bourdin" => "max.bourdin@hoppr.com.au" }
  # s.platform     = :ios, "12.4"
  s.ios.deployment_target = "12.4"
  s.tvos.deployment_target = "14.0"
  s.source       = { :git => "https://github.com/hoppr/Hoppr.Package.Repository.Public.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true
  
  s.swift_version = '5.0'

  s.dependency "React"
  s.dependency "React-Core"
  # s.dependency 'GoogleAds-IMA-iOS-SDK', '~> 3.18.5'
  s.ios.dependency 'GoogleAds-IMA-iOS-SDK', '~> 3.18.5'
  s.tvos.dependency 'GoogleAds-IMA-tvOS-SDK', '~> 4.2'
end