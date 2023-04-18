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
  s.platform     = :ios, "12.4"
  s.source       = { :git => "hhttps://github.com/hoppr/Hoppr.Package.Repository.Public.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "React-Core"
  s.dependency 'GoogleAds-IMA-iOS-SDK', '~> 3.18.5'
end