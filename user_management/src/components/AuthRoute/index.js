import { Navigate } from 'react-router-dom'
import { isAuth } from '../../utils'

export default function AuthRoute({children}){
  return isAuth()? children:<Navigate to="/login" replace></Navigate>
}