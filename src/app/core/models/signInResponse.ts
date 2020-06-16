import { UserSession } from './userSession'

export interface SignInResponse{
  token: string
  user: UserSession

}
