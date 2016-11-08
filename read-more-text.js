(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ReadMore'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.ReadMore = factory();
  }
}(this, function() {

  function ReadMore(el, options) {
    var link, moreText, height
    link = document.createElement('a'),
      moreText = document.querySelector(el),
      height = moreText.clientHeight

    moreText.style.maxHeight = 0
    moreText.style.overflow = 'hidden'

    this.options = {
      openText: 'Read more...',
      closeText: 'Show less...',
      speed: '1'
    }

    for (i in options) {
      this.options[i] = options[i]
    }

    options = this.options

    link.classList.add('show-more')
    link.setAttribute('href', '#')
    link.innerHTML = options.openText
    moreText.parentNode.insertBefore(link, moreText.nextSibling);

    link = document.querySelectorAll('.show-more')

    link.forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault()
        if (this.previousSibling.clientHeight == 0) {
          this.innerHTML = options.closeText
          this.previousSibling.style.transition = options.speed + 's'
          this.previousSibling.style.maxHeight = height + 'px'
        } else {
          this.innerHTML = options.openText
          this.previousSibling.style.maxHeight = 0
        }
      })
    })

  }

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return ReadMore
}));
