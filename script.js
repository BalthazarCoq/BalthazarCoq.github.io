'use strict'
document.addEventListener('DOMContentLoaded', (event) => {
  document
    .getElementById('btn-download')
    .addEventListener('click', function () {
      // Set file path
      var filePath = '/assets/Coquard-Balthazar-CV_de.pdf'

      // Creation anchor element
      var link = document.createElement('a')
      link.href = filePath
      link.download = 'Coquard-Balthazar-CV_de.pdf' // Default download file name
      link.target = '_blank' // Open in new tab

      // Trigger the download
      link.click()
    })
})

function addOpenLinkButtonListener(elementID, url) {
  document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById(elementID)
    if (button) {
      button.addEventListener('click', function () {
        window.open(url, '_blank')
      })
    } else {
      console.error(`Element with ID ${elementID} not found.`)
    }
  })
}

addOpenLinkButtonListener(
  'link-python-conterter-ofx',
  'https://github.com/BalthazarCoq/ofxToCSV',
)
addOpenLinkButtonListener(
  'link-js-pig-game',
  'https://github.com/BalthazarCoq/pigGame-js',
)
addOpenLinkButtonListener(
  'link-mspa-approval-request',
  'https://github.com/BalthazarCoq/mspa-approval-request-apps',
)
addOpenLinkButtonListener(
  'link-js-guess-my-number',
  'https://github.com/BalthazarCoq/guessMyNumber-js',
)
addOpenLinkButtonListener(
  'link-python-blackjack',
  'https://github.com/BalthazarCoq/game-blackjack',
)
addOpenLinkButtonListener(
  'link-python-blackjack',
  'https://github.com/BalthazarCoq/game-blackjack',
)

href = '#projects'
