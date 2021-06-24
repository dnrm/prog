import React from 'react'
import styles from '../styles/Form.module.css'

const Form = () => {
    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>Enter Code:</h1>
            <form>
                <input className={styles.form__input} type="text" placeholder="Code..." />
            </form>
        </div>
    )
}

export default Form
