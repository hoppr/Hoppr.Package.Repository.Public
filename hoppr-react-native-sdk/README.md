
# @hoppr/hopprReactNativeSdk

## Getting started
---
### For published library

`$ yarn add @hoppr/hopprReactNativeSdk`

### Mostly automatic installation

`$ react-native link @hoppr/hopprReactNativeSdk`

---
### For local development
- Go to `packages` ➜ `hoppr-react-native-sdk` and run
  ```
  yarn link
  ```
- Go to application where you want to use the react native library e.g. `apps` ➜ `demo-react-native-sdk` and run
  ```
  yarn link @hoppr/hopprReactNativeSdk
  ```
- Follow below mentioned steps

---
### For manual installation
#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@hoppr` ➜ `hopprReactNativeSdk` and add `RNHopprSdk.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNHopprSdk.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.hoppr.sdk.rn.RNHopprSdkPackage;` to the imports at the top of the file
  - Add `new RNHopprSdkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':hoppr-react-native-sdk'
  	project(':hoppr-react-native-sdk').projectDir = new File(rootProject.projectDir, 	'../node_modules/@hoppr/hopprReactNativeSdk/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      implementation (project(':hoppr-react-native-sdk'))
  	```
---

## Usage
```javascript
import RNHopprSdk from 'hoppr-react-native-sdk';

// TODO: What to do with the module?
RNHopprSdk;
```
