import styles from './index.module.css'

type HeaderProps = {
  author: string
  content: string
}

export default function Post({ author, content }: HeaderProps) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}