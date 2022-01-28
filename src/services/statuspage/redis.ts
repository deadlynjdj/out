import StatusPageService from '../base/statuspage'

class Reddit extends StatusPageService {
  constructor() {
    super('Redis', 'https://status.redis.com/', 'j6ydyp75k0zx')
  }
}

export default Redis
