import { UserSession } from './userSession'

export class SignInResponse{
  token: string
  user: UserSession
}
