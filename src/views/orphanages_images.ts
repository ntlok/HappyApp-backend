import Images from '../models/Images'

export default {
  render(image: Images){
    return {
      path: `http://192.168.1.65:4000/uploads/${image.path}`
    }
  },
  renderMany(images: Images[]) {
    return images.map(image => this.render(image))
  }
}