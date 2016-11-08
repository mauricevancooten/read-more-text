# Read More Button

JavaScript module for adding a read more button to text. Supports multiple read more buttons on the same page. Built with accessibility in mind, works on screen readers and degrades gracefully if JavaScript is turned off.

## Instructions

### Browserify
``` js
var ReadMore = require('read-more-text')
var readMore = new ReadMore('#more')
```

### Customisable options
``` js
var readMoreButton = new ReadMore('#more', {
	openText: 'Read more...', // Opening button text
	closeText: 'Show less...', // Closing button text
	speed: '1' // Transition speed in seconds
})
```

### Browser Usage

1. Add Markup
``` html
<div id="more">
	<!-- Hidden text -->
</div>
```

2. Link JavaScript and trigger script 
``` html
<!-- Put this right before the </body> closing tag -->
<script src="read-more-text.js"></script>
<script>
	var readMore = new ReadMore('#more')
</script>	
```	

## Licence

Licensed under the MIT Licence 