/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ASSIGNMENT-06-HTML/sw.js", {
    scope: "/ASSIGNMENT-06-HTML/",
  })
}

/**
 * Input.
 */

 const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("image").innerHTML =
    '<img src="' + 
      jsonData.message + 
      '" alt="API dog image" ' +
      '>'
    if (jsonData.artist_url != "none") {
      document.getElementById("breed").innerHTML =
      "<p>breed: " +
      jsonData.breeds
  } else {
    document.getElementById("image").innerHTML = "error"
  }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://dog.ceo/api/breeds/image/random")
