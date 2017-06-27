window.onload = function (e) {
  var spriteanimation_config, spriteanim;

  spriteanimation_config = {
    element: document.getElementsByClassName('main_example')[0],
    image: 'sprites/sprite04_64x64.png',
    width: 64,
    height: 64,
    rows: '7',
    speed: 60,
    over: true,
    rewind_out: true,
    row_start: 1,
    column_start: 2,
    element_over: document.getElementsByClassName('main_button')[0],
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('config_min')[0],
    image: 'sprites/sprite01_180x204_11por9.png',
    width: 180,
    height: 204,
    rows: '11,11,11,11,11,11,11,11,2',
    speed: 25,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('config_over')[0],
    image: 'sprites/sprite02_280x280_14por7.png',
    width: 280,
    height: 280,
    rows: '14,14,14,14,14,14,5',
    speed: 25,
    over: true,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('rewind_out')[0],
    image: 'sprites/sprite02_280x280_14por7.png',
    width: 280,
    height: 280,
    rows: '14,14,14,14,14,14,5',
    speed: 25,
    over: true,
    rewind_out: true,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('element_over01')[0],
    image: 'sprites/sprite04_64x64.png',
    width: 64,
    height: 64,
    rows: '9',
    speed: 80,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('element_over02')[0],
    image: 'sprites/sprite04_64x64.png',
    width: 64,
    height: 64,
    rows: '9',
    speed: 80,
    over: true,
    rewind_out: true,
    element_over: document.getElementsByClassName('element_over_button')[0],
    row_start: 1,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('element_over03')[0],
    image: 'sprites/sprite04_64x64.png',
    width: 64,
    height: 64,
    rows: '9',
    speed: 80,
    row_start: 2,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);

  spriteanimation_config = {
    element: document.getElementsByClassName('element_over04')[0],
    image: 'sprites/sprite04_64x64.png',
    width: 64,
    height: 64,
    rows: '9',
    speed: 80,
    over: true,
    element_over: document.getElementsByClassName('element_over_button')[0],
    row_start: 3,
  };
  spriteanim = new SpriteAnim(spriteanimation_config);
}
