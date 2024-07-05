'use strict'

const emailBC = 'balthazar.coquard@gmail.com'
const linkedinBC = 'https://www.linkedin.com/in/balthazar-coquard/'
const githubBC = 'https://github.com/CoquardBalthazar'

/* OPEN URL LINKS */
function openLink(elementID, url) {
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

function openLinkSameWindow(elementID, url) {
  document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById(elementID)
    if (button) {
      button.addEventListener('click', function () {
        window.open(url, '_self')
      })
    } else {
      console.error(`Element with ID ${elementID} not found.`)
    }
  })
}

/* DOWNLOAD CV */
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

/* CONTACT-FORM */
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    const recipient = emailBC
    const fromEmail = encodeURIComponent(
      document.getElementById('fromEmail').value,
    )
    const subject = encodeURIComponent(document.getElementById('subject').value)
    const message = encodeURIComponent(document.getElementById('message').value)
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${message}%0D%0A%0D%0AFrom,%0D%0A${fromEmail}`
    window.location.href = mailtoLink
  })

/* OPEN WINDOW EMAIL*/
function openWindowEmail(elementID = str) {
  document
    .getElementById(elementID)
    .addEventListener('click', function (event) {
      event.preventDefault()

      const recipient = emailBC
      const mailtoLink = `mailto:${recipient}`

      window.location.href = mailtoLink
    })
}

// Redirect to Link
openLink(
  'link-python-conterter-ofx',
  'https://github.com/CoquardBalthazar/ofxToCSV',
)
openLink('link-js-pig-game', 'https://github.com/CoquardBalthazar/pigGame-js')
openLink(
  'link-mspa-approval-request',
  'https://github.com/CoquardBalthazar/mspa-approval-request-apps',
)
openLink(
  'link-js-guess-my-number',
  'https://github.com/CoquardBalthazar/guessMyNumber-js',
)
openLink(
  'link-python-blackjack',
  'https://github.com/CoquardBalthazar/game-blackjack',
)
openLink(
  'link-python-blackjack',
  'https://github.com/CoquardBalthazar/game-blackjack',
)
openLink('iconLinkedin1', linkedinBC)
openLink('iconGithub1', githubBC)
openLink('iconLinkedin2', linkedinBC)
openLink('iconGithub2', githubBC)
openLinkSameWindow('btn-navbar', '#contact')

// Open window for email

openWindowEmail('iconEmail1')
openWindowEmail('iconEmail2')
