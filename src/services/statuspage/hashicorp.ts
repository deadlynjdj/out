import StatusPageService from '../base/statuspage'

class HashiCorp extends StatusPageService {
  constructor() {
    super('HashiCorp', 'https://status.hashicorp.com/', 'pdrzb3d64wsj')
  }
}

export default HashiCorp
