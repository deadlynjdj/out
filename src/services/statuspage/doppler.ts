import StatusPageService from '../base/statuspage'

class Doppler extends StatusPageService {
  constructor() {
    super('Doppler', 'https://www.dopplerstatus.com', '05hwsyqkr9z7')
  }
}

export default Doppler
