var Tip = require('..')
var closest = require('closest')
var els = [].slice.call(document.querySelectorAll('#viewport > div.abs'))

els.forEach(function (el) {
  var tip = Tip(el)
  tip.show()
})

var hover = document.querySelector('.hover')
var hover_tip = Tip(hover)
hover.addEventListener('mouseover', function () {
  hover_tip.show()
}, false)
hover.addEventListener('mouseout', function () {
  hover_tip.fade()
}, false)

var clickEl = document.querySelector('.click')
var click_tip = Tip(clickEl)
clickEl.addEventListener('click', function (e) {
  e.stopPropagation()
  if (click_tip.visible) {
    click_tip.hide()
  } else {
    click_tip.show()
  }
}, false)

document.addEventListener('click', function (e) {
  var el = closest(e.target, '.tip')
  if (!el) {
    click_tip.hide()
  }
})
