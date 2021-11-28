import StatusPageService from '../base/statuspage'

class Brave extends StatusPageService {
  constructor() {
    super('Brave', 'https://status.brave.com', '20fdw8t0n81b')
  }
}

export default Brave
