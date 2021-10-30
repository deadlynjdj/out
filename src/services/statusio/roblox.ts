import StatusIoService from '../base/statusio'

class Roblox extends StatusIoService {
  constructor() {
    const name = 'Roblox'
    const url = 'https://status.roblox.com'
    const id = '59db90dbcdeb2f04dadcf16d'

    super(name, url, id)
  }
}

export default Roblox
