import StatusPageService from '../base/statuspage'

class Wikimedia  extends StatusPageService {
  constructor() {
    super('Wikimedia ', 'https://www.wikimediastatus.net/', 'nnqjzz7cd4tj')
  }
}

export default Wikimedia 
