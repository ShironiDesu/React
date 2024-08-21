import React from 'react'

export default function Child(props) {
    const message = props.message
    const srt = props.srt
    const randNum = Math.floor(Math.random()*10)
  return (
    <div><h1>Всем привет</h1>
    <h4>Rand num = {randNum}</h4>
    <h3>Сообщение от App.jsx{message}</h3>
<h4>{srt}</h4>
    </div>
  )
}
