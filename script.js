'use strict'
document
  .getElementsByClassName('btn-download')
  .addEventListener('click', function () {
    // File path
    var filePath = '/assets/final-color-palet.png'

    // Creation anchor element with
    var link = document.createElement('a')
    link.href = filePath
    link.download = 'file-to-download.pdf' // Default download file name
    link.target = '_blank' // Open in new tab

    // Trigger the download
    link.click()
  })

/* navigation til lets talk section
document,
  getElementsByClassName('btn-lets-talk').addEventListener(
    'click',
    function () {},
  )
*/
