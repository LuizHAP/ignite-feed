import './global.css'
import styles from './App.module.css'

import Post from './components/Post'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Luiz" content="Hello World" />
          <Post author="Sara" content="Post 2" />
        </main>
      </div>
    </div>
  )
}

export default App
