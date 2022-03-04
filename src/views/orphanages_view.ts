import Orphanages from '../models/Orphanage'
import Image from './orphanages_images'

export default {
  render(orphanage: Orphanages) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: Image.renderMany(orphanage.images)
    }
  },

  renderMany(orphanages: Orphanages[]) {
    return orphanages.map(orphanage => this.render(orphanage))
  }
}