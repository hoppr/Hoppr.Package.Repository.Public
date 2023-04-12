# react-native-hoppr-ads

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test react-native-hoppr-ads` to execute the unit tests via [Jest](https://jestjs.io).

## Build

Run `npx nx run react-native-hoppr-ads:build --parallel=1`. This should generate the RN SDK package along with other internal dependencies under `dist/packages` directory.

_Note: Please ensure the version numbers are being bumped for the packages generated to maintain history when publishing these._

## Publishing

The following repo is being used to host the dist generated packages for RN SDK and its dependencies. Once the new build is generated, the contents can be copied over to this repo and pushed.

https://github.com/hoppr/Hoppr.Package.Repository.Public

## Changes to HopprJS SDK UMD

If any changes are made to HopprJS SDK, and if those changes are supposed to be utilized in RN SDK (since it relies on JS SDK to render the ads), the UMD file needs to be updated at the GCP cloud storage path

(DEV): https://console.cloud.google.com/storage/browser/hopprtv_dev_public/sdk;tab=objects?prefix=&forceOnObjectsSortingFiltering=false&authuser=2
(STAGING): ...
(PROD): ...

## Installation in a stand-alone RN or Expo app

If you want to update the SDK, run this command first

`yarn cache clean`

To install or update SDK specific dependencies

`yarn add 'https://gitpkg.now.sh/hoppr/Hoppr.Package.Repository.Public/react-native-hoppr-ads?main' 'https://gitpkg.now.sh/hoppr/Hoppr.Package.Repository.Public/hoppr-analytics?main' 'https://gitpkg.now.sh/hoppr/Hoppr.Package.Repository.Public/hoppr-common?main' 'https://gitpkg.now.sh/hoppr/Hoppr.Package.Repository.Public/hoppr-services?main --force'`

For external libs

`yarn add react-native-url-polyfill react-native-get-random-values @react-native-async-storage/async-storage react-native-webview@11.23.1 axios`

## Sample App Examples

https://github.com/hoppr/Hoppr.Sample.SDK.App

## Documentation

https://hoppr.atlassian.net/wiki/spaces/HI/pages/1795817480/Hoppr+React+Native+SDK+Documentation
