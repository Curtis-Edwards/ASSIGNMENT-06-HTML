/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-PWA-Template/sw.js", {
    scope: "/ICS20-PWA-Template/",
  })
}

/**
 * Input.
 */

