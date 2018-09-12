document.addEventListener('DOMContentLoaded', function()
{
  var light = document.querySelector('.switch')
  var body = document.querySelector('body')
  var status = document.querySelector('.status')
  status.innerHTML = 'so bright'

  light.addEventListener('click', function(e) {
    if (light.className == 'switch on') {
    e.target.className = 'switch off'
    body.className = 'dark'
    status.innerHTML = '<span>daaarkness</span>'
  }
    else {
      light.className = 'switch on'
      body.className = 'light'
      status.innerHTML = 'so bright'
    }
  })
})
