import axios from './api'

const clubService = {
  async singleClub() {
    const data = await axios.get()
    return data
  }

}
export default clubService