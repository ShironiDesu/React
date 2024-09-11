import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit,withdraw } from './store/slices/bankSlice'
import { fetchUserData } from './thunks/bankThunks'

export default function App() {
  const dispatch = useDispatch()
  const {balance,transaction,user,loading, error} = useSelector((state)=>state.bank)
  const [amount,setAmount] = useState('')
  useEffect(() => {
    dispatch(fetchUserData)
  }, [dispatch])
  
  const depositMoney = ()=>{
    if(amount>0) {
      dispatch(deposit(Number(amount)))
      setAmount('')
    }
  }
  const withdrawMoney = () => {
    if (amount > 0) {
      dispatch(withdraw(Number(amount)));
      setAmount('');
    }
  };
  return (
    <div className='App'>
    <h1>Банковское приложение</h1>

    {loading && <p>Загрузка данных...</p>}
    {error && <p>Ошибка: {error}</p>}

    {!loading && !error && (
      <>
        <div className="user-info">
          <h2>Добро пожаловать, {user.name}!</h2>
          <p>Номер счета: {user.id}</p>
        </div>
        <div className="balance">
          <h3>Текущий баланс: {balance} $.</h3>
        </div>
        <div className="actions">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Введите сумму"
          />
          <button onClick={depositMoney}>Пополнить</button>
          <button onClick={withdrawMoney}>Снять</button>
        </div>

        <div className="transactions">
          <h3>История транзакций</h3>
          <ul>
            {transaction.map((transaction, index) => (
              <li key={index}>
                {transaction.date} - {transaction.type === 'deposit' ? 'Пополнение' : 'Снятие'}: {transaction.amount} $.
              </li>
            ))}
          </ul>
        </div>
      </>
    )}
  </div>
  )
}
