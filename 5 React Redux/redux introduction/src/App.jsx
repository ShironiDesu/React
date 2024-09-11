import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DarkMode from './DarkMode'
import MySelect from './MySelect'
import { addCashAction, getCashAction } from './store/cashReducer'
import { addCustomerAction, deleteCustomerAction, filterCustomerAction, sortCustomersAction } from './store/customerReducer'
import Text from './Text'
import { fetchCustomers } from './thunks/customer'


export default function App() {
  const dispatch= useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const isDark = useSelector(state => state.darkModeReducer.isDark)
  const customers = useSelector(state=>state.customerReducer.customers)

  const addCash = (amount) =>{
    dispatch(addCashAction(amount))
  }
  const getCash =(amount) =>{
    dispatch(getCashAction(amount))
  }
const addCustomer =(name)=>{
const customer = {
  name,
  id:Date.now()

}
dispatch(addCustomerAction(customer))
}
const deleteCustomer = (id)=>{
  dispatch(deleteCustomerAction(id))
}
const optionList = [
  { text: 'По имени', value: 'name' },
  { text: 'По нику', value: 'username' }
];
const sortCustomer =(sortValue)=>{
  dispatch(sortCustomersAction(sortValue))
}
const filterCustomer = (filterValue)=>{
dispatch(filterCustomerAction(filterValue))
}
useEffect(()=>{
  dispatch(fetchCustomers())
},[dispatch])
  return (
    <div className={isDark? 'dark_mode' :''}>
      <DarkMode></DarkMode>
      <h2>Денег на счету: {cash}</h2>
    <button onClick={()=>addCash(+prompt("Введите количество денег"))}>Положить на счет деньги</button>
    <button onClick={()=>getCash(+prompt("Введите количество денег"))}>Снять деньги</button>
    <Text></Text>

    <hr />
    <MySelect   options={optionList}
        defaultValue="Сортировка"
        onChange={sortCustomer}></MySelect>
    <h2>Клиенты</h2>
    <button onClick={()=>addCustomer(prompt())}>Добавить клиента</button>
  <input type="text" onChange={(e)=>filterCustomer(e.target.value)}/>
  {customers.length > 0? (
    customers.map((customer,id)=> (
      <div key={id}>
      <div>{customer.name}</div>
  
      <button onClick={()=>deleteCustomer(customer.id)}>удалить клиента</button>
      </div>
      ))
      
  ):(
    <h2>Клиентов нет</h2>
  )

  }
    </div>
  )
}
