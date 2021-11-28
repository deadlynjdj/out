import StatusIoService from '../base/statusio'

class OVHcloudUS extends StatusIoService {
  constructor() {
    const name = 'OVHcloud US'
    const url = 'https://status.us.ovhcloud.com/'
    const id = '59dd23da8827c804746f1664'

    super(name, url, id)
  }
}

export default OVHcloudUS
