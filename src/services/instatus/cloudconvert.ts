import InstatusService from '../base/instatus'

class Cloudconvert extends InstatusService {
  constructor() {
    super('Cloudconvert', 'https://status.cloudconvert.com')
  }
}

export default Cloudconvert
