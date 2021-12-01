import { Me } from '../../dtos/Me'

export class ResponseBot {

  getMet(json: Me) {
    console.log(`ok: `, json.ok)
    console.log(`result: `, json.result)
  }

}