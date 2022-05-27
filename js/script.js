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

