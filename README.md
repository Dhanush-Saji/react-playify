<p align="center">
  <img src="https://i.imgur.com/hcdHQRB.jpg" alt="React Select Search" />
</p>
<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/react-media-playback.svg?style=for-the-badge)](https://www.npmjs.com/package/react-media-playback)
[![npm](https://img.shields.io/npm/l/react-media-playback?style=for-the-badge)](https://github.com/Dhanush-Saji/react-media-playback/blob/master/LICENSE)
[![npm downloads](https://img.shields.io/bundlephobia/minzip/react-media-playback?style=for-the-badge)](https://www.npmjs.com/package/react-media-playback)
[![npm downloads](https://img.shields.io/github/contributors/Dhanush-Saji/react-media-playback?style=for-the-badge)](https://www.npmjs.com/package/react-media-playback)

</div>

First of all, I want to thank you all for choosing React Playify.
React Playify is a lightweight and user-friendly media player built with React. Whether you're a developer looking to integrate a simple yet powerful media player into your React projects or a user seeking a hassle-free way to enjoy your music collection, React Playify offers a seamless solution.
You can reach me **dhanushsaji1@gmail.com**

## Features
* Lightweight
* Small size
* Accessible

## Install

```javascript
npm i react-media-playback
```

## Quick Start

Don't forget to pass the audio array and the `useState` variables along with their respective set functions.
Also, avoid setting the value to true initially. This is because the `audio` element can't be played until there is a DOM interaction by the user, as per the browser's rule, and we can't override this.
**If it seems confusing 😰😰, don't worry, it's simple.**

#### ❌ ❌ ❌ Don't set the value initially true ❌ ❌ ❌
```http
  const [isPlaying, setIsPlaying] = useState(true)

```
#### ✅ ✅ ✅Instead do this ✅ ✅ ✅
```
  const [isPlaying, setIsPlaying] = useState(false)

```

```jsx harmony
import { useState } from 'react'
import {Player} from 'react-media-playback'

function App() {
  const [isPlaying, setisPlaying] = useState(false)
  let musicArray = [
    {title:'Song 1',subtitle:'Song sub',audio:'song1.mp3',image:'image1.jpg'},
    {title:'Song 2',subtitle:'Song sub',audio:'song2.mp3',image:'image2.jpg'},
  ]
  return (
    <>
    <Player audio={musicArray} isPlaying={isPlaying} setisPlaying={setisPlaying} />
    </>
  )
}

export default App
```

## Configuration

Below is all the available options you can pass to the component. Options without defaults are required. **We will add more customization soon.!🚀🚀🚀**

| Name | Type           | Default | Description                                                                                                                                                       |
| ---- |----------------| ------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| theme | string       | null | By default it will be `white` theme. Other themes are `glass`, ![#141414](https://via.placeholder.com/10/141414?text=+) `black`, ![#3fa9ff](https://via.placeholder.com/10/3fa9ff?text=+) `blue`, ![#862BD0](https://via.placeholder.com/10/862BD0?text=+) `purple` |
| audio | array          | null | Simply pass an array of object like this `[{title:'',subtitle:'',audio:'',image:''}]` . Apart from `audio` key you can pass value for other keys |
| isPlaying | boolean        | false | This is a Boolean value. Pass the first parameter of `useState`.|
| setisPlaying | function        | null | This function changes the Boolean value of isPlaying. Pass the second parameter of `useState` |


Made with ❤
