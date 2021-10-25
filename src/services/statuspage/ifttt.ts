import StatusPageService from '../base/statuspage'

class IFTTT extends StatusPageService {
  constructor() {
    super('IFTTT', 'https://status.ifttt.com', 'b8h007xb5lsy')
  }
}

export default IFTTT
