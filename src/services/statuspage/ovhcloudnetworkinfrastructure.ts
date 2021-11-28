import StatusPageService from '../base/statuspage'

class OVHcloudNetworkInfrastructure extends StatusPageService {
  constructor() {
    super('OVHcloud Network Infrastructure', 'https://network.status-ovhcloud.com/', 'r3y8hrtg97vy')
  }
}

export default OVHcloudNetworkInfrastructure