import './global.css'
import styles from './App.module.css'

import Posts from './components/Posts'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts author="Luiz" content="Hello World" />
          <Posts author="Sara" content="Post 2" />
        </main>
      </div>
    </div>
  )
}

export default App
