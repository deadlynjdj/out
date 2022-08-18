import StatusPageService from '../base/statuspage'

class IONOSCloud extends StatusPageService {
  constructor() {
    super('IONOSCloud', 'https://status.ionos.cloud/', 'xdhr50sc5fkm')
  }
}

export default IONOSCloud
