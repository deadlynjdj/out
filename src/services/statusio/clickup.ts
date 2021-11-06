import StatusIoService from '../base/statusio'

class ClickUp extends StatusIoService {
  constructor() {
    const name = 'ClickUp'
    const url = 'https://status.clickup.com'
    const id = '5b6e0963c662144d00913a09'

    super(name, url, id)
  }
}

export default ClickUp
