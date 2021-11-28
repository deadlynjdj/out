import StatusPageService from '../base/statuspage'

class OVHcloudPublicCloud extends StatusPageService {
  constructor() {
    super('OVHcloud Public Cloud', 'https://public-cloud.status-ovhcloud.com/', '6j41kzyhcr9g')
  }
}

export default OVHcloudPublicCloud