import StatusPageService from '../base/statuspage'

class Scaleway extends StatusPageService {
  constructor() {
    super('Scaleway', 'https://status.scaleway.com', 's2kbtscly3pj')
  }
}

export default Scaleway
