import {Http} from '../net/Http'
import _ from 'lodash'

 var grant_options_default = {
  client_id:'',
  client_secret:''
 }
 var grant_options = (extend) => {
  return _.merge({
    send: grant_options_default, 
  set:[
  {label: "Content-Type", value:"application/x-www-form-urlencoded"}
  ]
  }, extend)
 } 
export class Auth {
  constructor(config) {
    this.http = new Http()
    this.oauthTokenUrl = config.hostAuth + "/oauth/token"
    grant_options_default = {
      client_id:config.client_id,
      client_secret:config.client_secret
    }
    this.grant = {
      access: {
        clientCredentials: () => {
          var options = grant_options({send:{grant_type:'client_credentials'}})
          return this.http.post(url.oauth_token, options)
        }
      }
    }
  }
  getClientCredentials() {
    return this.grant.access.clientCredentials()
  }
}