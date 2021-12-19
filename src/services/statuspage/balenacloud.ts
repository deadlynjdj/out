import StatusPageService from '../base/statuspage'

class balenacloud extends StatusPageService {
  constructor() {
    super('balena cloud', 'https://status.balena.io', '5b4dcn321xtp')
  }
}

export default balenacloud
