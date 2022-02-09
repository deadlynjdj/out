import StatusIoService from '../base/statusio'

class Shadow extends StatusIoService {
  constructor() {
    const name = 'Shadow'
    const url = 'http://status.shadow.tech'
    const id = '5bbcb1b0b0936904c004bbeb'

    super(name, url, id)
  }
}

export default Shadow
