import styles from './index.module.css'

type PostProps = {
  author: string
  content: string
}

export default function Post({ author, content }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/luizhap.png" />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <p>{content}</p>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:38">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href="">jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>
    </article>
  )
}