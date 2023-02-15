import styles from './index.module.css'

type HeaderProps = {
  author: string
  content: string
}

export default function Header({ author, content }: HeaderProps) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}