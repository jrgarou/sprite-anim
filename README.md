#sprite-anim
================
Animates sprite images

## Setup
`<div class="myanim"></div>`
```
var config = {
     element: document.getElementsByClassName('myanim')[0],
     image: 'sprites/sprite04_64x64.png',
     width: 64,
     height: 64,
     rows: '7', <small>// It changed because it set .collumn_start</small>
     speed: 60,
     over: true, <small>// Default false and trigger when visible on scroll</small>
     rewind_out: true, <small>// Rewind on mouse out</small>
     element_over: document.getElementsByClassName('main_button')[0], <small>// Set element to trigger animation</small>
     row_start: 1
     collumn_start: 2 <small>// Must change .rows</small>
};

var spriteanim = new SpriteAnim(config);
```

[DEMO](http://garou.in/projects/plugins/javascript/sprite-anim/)
