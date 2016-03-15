# Auto-tip

A simple and smart tip component using [align](https://github.com/chemzqm/align)

[demo](http://chemzqm.github.io/auto-tip/)

## Example

``` html
<span data-tip="add new item" data-tip-position="tc-bc">+</span>
```

``` js
var Tip = require('auto-tip')
var tip = Tip(el)
tip.show()
tip.hide() // tip.fade() to fade out
```

## API

### tip(el, [option])

Initialize tip element and optional option.

* `option.align` align option for [align](https://github.com/chemzqm/align)
* `option.limit` the minimal margin betwwen el and viewport in pixeles

### .show([text])

Show with optional text.

### .hide()

Remove the tip.

### .fade()

Remove the tip with fade css classes, change classes `.tip-hide` to customized
it, default is:

``` css
.tip-hide {
  opacity: 0;
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
```

## .visible

Check if tip element visible.

## License

MIT
