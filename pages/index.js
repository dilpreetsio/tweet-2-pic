import React, { useState } from 'react'
import { Tweet } from 'react-static-tweets'
import 'react-static-tweets/styles.css'

export default function Home() {

  const [tweet, setTweet] = useState(null)

  return (
    <div className={""}>

      <input onChange={(e) => setTweet(e.currentTarget.value)}
      aria-describedby="helper-text-explanation"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter tweet id"/>
      <Tweet id={"1531053815042134016"} />
    </div>
  )
}
