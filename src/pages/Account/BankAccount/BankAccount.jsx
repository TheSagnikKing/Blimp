import React from 'react'
import styles from './BankAccount.module.css'

const BankAccount = () => {
  return (
    <div className={styles.bankContainer}>
      <div>
        <span></span>
        <button>change bank account</button>
      </div>

      <form action="">
        <div>
          <label htmlFor="">Bank Name</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Bank Branch Name</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Bank Account Holder Name</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Bank IFSC</label>
          <input type="text" />
        </div>

        <button>update</button>
      </form>
    </div>
  )
}

export default BankAccount
