import { format, formatDistanceToNow } from 'date-fns'

import { ptBR } from 'date-fns/locale'

import styles from './index.module.css'

import Comment from '../Comment'
import Avatar from '../Avatar'
import { useState } from 'react'

type PostProps = {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  publishedAt: Date,
  content: {
    type: string
    content: string
  }[]
}

export default function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          }

          if (line.type === 'link') {
            return (
              <p key={index}>
                <a href={line.content}>{line.content}</a>
              </p>
            )
          }

          return null
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" placeholder="Deixe um comentário" onChange={handleNewCommentChange} value={newCommentText} />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment content={comment} key={index} />
        ))}
      </div>
    </article>
  )
}