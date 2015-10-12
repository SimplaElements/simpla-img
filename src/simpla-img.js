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

  ready() {
    // Setup the minimum on the zoom
    this.$.zoom.min = this._helper.minScale;
  }

  updatePosition() {
    const image = this._helper;

    this.position = { x: image.translateX, y: image.translateY };
  }

  get _helper() {
    return this.$.image;
  }
}

Polymer(SimplaImg);