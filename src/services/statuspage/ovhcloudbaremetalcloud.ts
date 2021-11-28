import StatusPageService from '../base/statuspage'

class OVHcloudBareMetalCloud extends StatusPageService {
  constructor() {
    super('OVHcloud Bare Metal Cloud', 'https://bare-metal-servers.status-ovhcloud.com/', '1qzzx4z9jvmv')
  }
}

export default OVHcloudBareMetalCloud
