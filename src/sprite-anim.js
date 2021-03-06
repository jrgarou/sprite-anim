function SpriteAnim(config) {
  this.element = config.element;
  this.image = config.image;
  this.rows = config.rows.split(',');
  this.width = config.width;
  this.height = config.height;
  this.speed = config.speed || 25;
  this.over = config.over;
  this.rewind_out = config.rewind_out;
  this.element_over = config.element_over;
  this.row_start = config.row_start || 0;
  this.column_start = config.column_start || 0;
  this.column = 0;
  this.row = 0;
  this.top = this.element.offsetTop;

  this.init();
}

SpriteAnim.prototype.init = function () {
  this.setsize();
  this.render();
};

SpriteAnim.prototype.setsize = function () {
  this.element.style.height = this.height + 'px';
  this.element.style.width = this.width + 'px';
};

SpriteAnim.prototype.render = function() {
  var self = this;

  self.loadimage(function () {
    self.element.style.backgroundImage = 'url(' + self.image + ')';
    self.set();
    self.config();
  });
};

SpriteAnim.prototype.set = function () {
  var y = (this.height * this.row) + (this.height * this.row_start),
      x = (this.width * this.column) + (this.width * this.column_start)
  ;

  this.element.style.backgroundPosition = -x + 'px ' + -y + 'px';
};

SpriteAnim.prototype.loadimage = function (callback) {
  var image = new Image();

  image.onload = callback;
  image.src = this.image;
};

SpriteAnim.prototype.config = function () {
  var self = this,
      element_over,
      mouse_out
  ;

  if (self.over || self.element_over) {
    element_over = (self.element_over) ? self.element_over : self.element;
    mouse_out = (self.rewind_out) ? self.return.bind(self) : self.pause.bind(self);

    element_over.addEventListener('mouseover', self.play.bind(self));
    element_over.addEventListener('mouseout', mouse_out);
  } else {
    window.addEventListener('scroll', function (e) {
      var y = window.scrollY,
          play = (y + window.innerHeight) > self.top && y < (self.top + self.height),
          action
      ;

      action = (play) ? self.play.bind(self) : self.stop.bind(self);
      action();
    });

    window.scrollTo(window.scrollX, window.scrollY + 1);
  }
};

SpriteAnim.prototype.forward = function () {
    if(this.column < (this.rows[this.row] - 1)) {
        this.column++;
    } else {
        this.column = 0;

        if(this.row < (this.rows.length - 1)) {
            this.row++;
        } else {
            this.row = 0;
        }
    }

    this.set();
};

SpriteAnim.prototype.rewind = function () {
    if(this.column <= 0 && this.row <= 0) {
        if(this.interval) clearInterval(this.interval);
    } else {
        if(this.column > 0) {
            this.column--;
        } else {
            this.column = (this.rows[this.row] -1);

            if(this.row > 0) {
                this.row--;
            } else {
                this.row = 0;
            }
        }
    }

    this.set();
};

SpriteAnim.prototype.play = function () {
  var self = this;

  if(self.interval) clearInterval(self.interval);

  self.interval = setInterval(function() {
    self.forward();
  }, self.speed);
};

SpriteAnim.prototype.return = function () {
  var self = this;

  if(self.interval) clearInterval(self.interval);

  self.interval = setInterval(function() {
    self.rewind();
  }, (self.speed));
};

SpriteAnim.prototype.pause = function () {
  if(this.interval) clearInterval(this.interval);
};

SpriteAnim.prototype.stop = function () {
  if(this.interval) clearInterval(this.interval);
  this.column = 0;
  this.row = 0;
  this.set();
};
