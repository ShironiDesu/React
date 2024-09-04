import React from 'react'
import styles from './PostItem.module.css';

export default function MyButton({children,...props}) {
  return (
    <div><button className={styles.deleteButton} {...props} >{children}</button></div>
  )
}
