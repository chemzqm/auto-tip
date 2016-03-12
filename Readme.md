# Auto-tip

Auto-tip detect the element positon and show/hide the tip on mouseover/mouseout,
eg: if target is on the left side of page, tip would be shown on the right hand.

## Example

``` html
<span data-tip="add new item">+</span>
```

``` js
var tip = require('auto-tip')
//initialize tip with all element has `data-tip` attribute
tip()
```

__`tip-target` class would be added to target element__

## API

### tip([limit])

Initialize tip with all element has `data-tip` attribute.  Tip element would be
shown at bottom on default.  Use `limit` (could contain `left`, `right` and
`bottom` as number) to set the minimal margin to make tip shown at bottom.

