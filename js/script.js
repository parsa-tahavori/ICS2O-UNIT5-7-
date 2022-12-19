// Copyright (c) 2022 Parsa Tahavori All rights reserved
//
// Created by: Parsa Tahavori
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-7-/sw.js", {
    scope: "/ICS2O-UNIT5-7-/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const num = parseInt(document.getElementById("num").value)

  let sum = 0

  for (let count = 1; count < num || count == num; count++) {
    sum += count
  }

  document.getElementById("answer").innerHTML = "your answer is: " + sum + "."
}
