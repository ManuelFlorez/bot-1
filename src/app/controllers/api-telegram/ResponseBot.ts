import { Me } from '../../dtos/Me'
import { LogOut } from '../../dtos/LogOut'
import { GetUpdates } from '../../dtos/getUpdates'

export class ResponseBot {

  getMet(me: Me) {
    console.log(`ok: `, me.ok)
    console.log(`result: `, me.result)
  }

  logOut(logOut: LogOut) {
    console.log(`description: `, logOut.description)
    console.log(`error_code: `, logOut.error_code)
    console.log(`result: `, logOut.result)
    console.log(`ok: `, logOut.ok)
  }

  getUpdates(getUpdates: GetUpdates) {
    getUpdates.result.forEach((data) => {
      const msg = `${data.update_id}`
      console.log(msg)
    })
  }

  sendMessage(getUpdates: GetUpdates) {
    console.log(getUpdates.ok)
  }

  

}