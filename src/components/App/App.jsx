import React, { Component } from 'react'
import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <h1>Marvel Heroes</h1>
        </div>
        <p className={styles.appIntro}>
          Starting project
        </p>
      </div>
    )
  }
}

export default App
