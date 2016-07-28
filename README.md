## Problems using gun with webpack

First:  
`npm install`

Compile bundle:   
`webpack`

Then run:  
`npm start`

Added the following to webpack.config.js to get past the issue:
```
var webpack = require('webpack');
module.exports = {
  devtool: "source-map",
  target: "node", 

....

  module: {
    noParse: [/aws-sdk/],

....

 plugins: [
   new webpack.DefinePlugin({ "global.GENTLY": false })
 ]
....
```

Errors still in terminal after compiling webpack are:  
```
WARNING in ./~/ws/lib/BufferUtil.js
Module not found: Error: Cannot resolve module 'bufferutil' in /home/travis/Documents/jtlprograms/Electron_Apps/electron_es6_and_react_redux_jtl_5_materialUI_jwt_gundb2/node_modules/ws/lib
 @ ./~/ws/lib/BufferUtil.js 10:19-40

WARNING in ./~/ws/lib/Validation.js
Module not found: Error: Cannot resolve module 'utf-8-validate' in /home/travis/Documents/jtlprograms/Electron_Apps/electron_es6_and_react_redux_jtl_5_materialUI_jwt_gundb2/node_modules/ws/lib
 @ ./~/ws/lib/Validation.js 10:19-44

```
