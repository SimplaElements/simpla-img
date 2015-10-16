class SimplaImg {
  beforeRegister() {
    this.is = 'simpla-img';

    this.properties = {
      src: String,
      width: String,
      height: String,
      scale: {
        type: Number,
        value: 1
      },
      position: {
        type: Object,
        value: { x: 0, y: 0}
      }
    }
  }

  get behaviors() {
    return [
      simpla.behaviors.active()
    ];
  }

  ready() {
    // TODO: Move this to controls
    // Setup the minimum on the zoom
    // this.$.zoom.min = this._canvas.minScale;
  }

  updatePosition() {
    const image = this._canvas;

    this.position = { x: image.translateX, y: image.translateY };
  }

  get _canvas() {
    return this.$.image;
  }

  get _controls() {
    return this.$.controls;
  }

  _fileChanged(event) {
    let reader = new FileReader(),
        file = event.detail.value,
        src;

    reader.onloadend = () => this.src = reader.result;

    reader.readAsDataURL(file);
  }
}

Polymer(SimplaImg);
