## How to

- Create project: `npx react-native init AwesomeProject`
- Start app server: `npm start`
- Emulate: You can use Android Studio to open `./AwesomeProject/android` and then start your virtual device
- Reset cache: `npm start -- --reset-cache`

## Libraries

- [React Navigation](https://github.com/react-navigation/react-navigation): `npm i react-navigation`
- [React Native Reanimated](https://github.com/software-mansion/react-native-reanimated): `npm i react-native-reanimated`
- [React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler): `npm i react-native-gesture-handler`
To finalize installation of `react-native-gesture-handler` for Android:
If you are using a native navigation library like `wix/react-native-navigation` you need to follow a different setup for your Android app to work properly. The reason is that both native navigation libraries and Gesture Handler library need to use their own special subclasses of ReactRootView.
Instead of changing Java code you will need to wrap every screen component using `gestureHandlerRootHOC` on the JS side. This can be done for example at the stage when you register your screens.
- [React Navigation Stack](https://github.com/react-navigation/stack): `npm i react-navigation-stack`
- [React Navigation Drawer](https://github.com/react-navigation/drawer): `npm i react-navigation-drawer`
- [React Navigation Animated Switch](https://github.com/react-navigation/animated-switch): `npm i react-navigation-animated-switch`
- [Styled Components](https://github.com/styled-components/styled-components): `npm i styled-components`
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): `npm i react-native-vector-icons` -> `react-native link react-native-vector-icons`

## Troubleshooting

- If `react-native link` doesn't work: `npm i -g react-native-cli`

- `error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.
SyntaxError: Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
    at new RegExp (<anonymous>)`

This is caused by node v12.11.0+ due to the way it deals regular location. There's two ways to solve this problem:

#### Method I

You can downgrade to node v12.10.0. This will apply the correct way to deal with parsing error.

#### Method II

You can correctly terminate the regular expression in your case by changing the file located at `\node_modules\metro-config\src\defaults\blacklist.js` from:

```javascript
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

To:

```javascript
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

## License

    MIT License

    Copyright (c) 2019 Miguel Soares de Oliveira

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
