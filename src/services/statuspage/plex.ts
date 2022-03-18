import StatusPageService from '../base/statuspage'

class Plex extends StatusPageService {
  constructor() {
    super('Plex', 'https://status.plex.tv/', 'x2m8rwtfjg4j')
  }
}

export default Plex
