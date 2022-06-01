import React, { useState, useRef } from 'react'
import { Tweet } from 'react-static-tweets'
import 'react-static-tweets/styles.css'
import * as htmlToImage from 'html-to-image';

export default function Home() {
  const [tweet, setTweet] = useState(null)
  const tweetCanvas = useRef(null)
  const download = useRef(null)
  const DEFAULT = "1531053815042134016"

  const exportImage = () => {
    htmlToImage.toPng(tweetCanvas.current)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      download.current.setAttribute("href", dataUrl);
      download.current.setAttribute("download", "tweet-2-pic");
      download.current.click();
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
  }

  return (
    <div className="container mx-auto">
      <a className="hidden" ref={download}></a>
      <div className="flex flex-col items-center">
        <input onChange={(e) => setTweet(e.currentTarget.value)}
        aria-describedby="helper-text-explanation"
        className="mt-40 mb-20 w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5" placeholder="Enter tweet id"/>
        <div ref={tweetCanvas} className="w-fit flex flex-col justify-content items-center bg-gradient-to-r from-cyan-500 to-green-500">
          <Tweet id={tweet || DEFAULT} className="p-20"/>
        </div>
        <button type="button" onClick={exportImage}
        className="mt-4 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400
        font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Export Image</button>
      </div>
    </div>
  )
}
