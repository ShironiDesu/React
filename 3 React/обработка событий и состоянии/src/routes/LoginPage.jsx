import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/context'
import MyButton from '../MyButton'
import MyInput from '../MyInput'

export default function LoginPage() {
    const {setIsAuth} = useContext(AuthContext)
    function login(event) {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth','true')
    }
  return (
    <div>LoginPage
        <form action="" onSubmit={login}>
        <MyInput type="text"  placeholder='Логин'></MyInput>
        <MyInput type="password" placeholder='Пароль'></MyInput>
        
       
        <MyButton >Войти</MyButton>
        </form>
    </div>
  )
}
