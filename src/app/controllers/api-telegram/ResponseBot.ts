import { Me } from '../../dtos/Me'
import { LogOut } from '../../dtos/LogOut'
import { GetUpdates } from '../../dtos/getUpdates'

export class ResponseBot {

  getMet(me: Me) {
    this.log(`ok: `, me.ok)
    this.log(`result: `, me.result)
  }

  logOut(logOut: LogOut) {
    this.log(`description: `, logOut.description)
    this.log(`error_code: `, logOut.error_code)
    this.log(`result: `, logOut.result)
    this.log(`ok: `, logOut.ok)
  }

  getUpdates(getUpdates: GetUpdates) {
    getUpdates.result.forEach((data) => {
      const msg = `${data.update_id}`
      this.log(msg)
    })
  }

  sendMessage(getUpdates: GetUpdates) {
    console.log(getUpdates.ok)
  }

  log(arg1: string, arg2?: any) {
    if (arg2 === undefined) {
      console.log(arg1)
    } else {
      console.log(arg1, arg2)
    }
  }

}
