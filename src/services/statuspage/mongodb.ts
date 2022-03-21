import StatusPageService from '../base/statuspage'

class MongoDB extends StatusPageService {
  constructor() {
    super('MongoDB', 'https://status.cloud.mongodb.com/', 'smhnl3lt74kc')
  }
}

export default MongoDB
