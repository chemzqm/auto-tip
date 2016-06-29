var event = require('event')
var domify = require('domify')
var align = require('align')
var classes = require('classes')
var transitionEnd = require('transitionend-property')

function Tip(el, options) {
  if (!(this instanceof Tip)) return new Tip(el, options)
  this.el = el
  this.options = options || {}
  this.tip = domify('<div class="tip"><div class="tip-arrow"></div><div class="tip-inner"></div></div>')
}

Tip.prototype.show = function (text, offset) {
  text = text || this.el.getAttribute('data-tip')
  var opts = this.options
  var alstr = opts.align || this.el.getAttribute('data-tip-position')
  this.el.parentNode.appendChild(this.tip)
  this.tip.querySelector('.tip-inner').innerHTML = text
  this.cleanClasses()
  if (!alstr) {
    var pos = getTipPosition(this.el, opts.limit)
    switch (pos) {
      case 'l':
        alstr = 'lc-rc'
        classes(this.tip).add('tip-left')
        break
      case 'r':
        alstr = 'rc-lc'
        classes(this.tip).add('tip-right')
        break
      case 't':
        alstr = 'tc-bc'
        classes(this.tip).add('tip-top')
        break
      default:
        alstr = 'bc-tc'
        classes(this.tip).add('tip-bottom')
    }
  } else {
    classes(this.tip).add('tip-bottom')
  }
  align(this.el, this.tip, alstr, offset)
  this.visible = true
}

Tip.prototype.cleanClasses = function () {
  var tip = this.tip
  var names = ['tip-hide', 'tip-left', 'tip-right', 'tip-top', 'tip-bottom']
  names.forEach(function (clz) {
    classes(tip).remove(clz)
  })
}

Tip.prototype.hide = function () {
  remove(this.tip)
  this.visible = false
}

Tip.prototype.fade = function () {
  var tip = this.tip
  if (!tip.parentNode) return
  classes(tip).add('fade')
  classes(tip).add('tip-hide')
  event.bind(tip, transitionEnd, end)
  function end() {
    event.unbind(tip, transitionEnd, end)
    remove(tip)
  }
  this.visible = false
}

function getTipPosition(el, limit) {
  limit = limit || 100
  var rect = el.getBoundingClientRect()
  var vw = document.documentElement.clientWidth
  var vh = document.documentElement.clientHeight
  if (rect.left < limit) return 'r'
  if (rect.left + rect.width + limit > vw) return 'l'
  if (rect.top + rect.height + limit/2 > vh) return 't'
  return 'b'
}

function remove(node) {
  if (node.parentNode) node.parentNode.removeChild(node)
}

module.exports = Tip
