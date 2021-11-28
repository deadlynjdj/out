import StatusPageService from '../base/statuspage'

class OVHcloudCustomerService extends StatusPageService {
  constructor() {
    super('OVHcloud Customer Service', 'https://customer-service.status-ovhcloud.com/', 'r7jzl10xz0kg')
  }
}

export default OVHcloudCustomerService