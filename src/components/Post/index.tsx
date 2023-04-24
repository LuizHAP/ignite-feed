import { format, formatDistanceToNow } from 'date-fns'

import { ptBR } from 'date-fns/locale'

import styles from './index.module.css'

import Comment from '../Comment'
import Avatar from '../Avatar'
import { useState } from 'react'

type PostProps = {
	post: Exclude<Post, 'id'>
}

export default function Post({ post: { author, content, publishedAt } }: PostProps) {
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

	function handleCreateNewComment(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		setComments([...comments, newCommentText])

		setNewCommentText('')
	}

	function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		e?.target.setCustomValidity('')
		setNewCommentText(e.target.value)
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete)

		setComments(commentsWithoutDeletedOne)
	}

	function handleNewCommentInvalid(e: React.InvalidEvent<HTMLTextAreaElement>) {
		e?.target.setCustomValidity('Esse campo é obrigatório!')
	}

	const isNewCommentEmpty = newCommentText.length === 0

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
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>
					}

					if (line.type === 'link') {
						return (
							<p key={line.type}>
								<a href={line.content}>{line.content}</a>
							</p>
						)
					}

					return null
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea name="comment" placeholder="Deixe um comentário" onChange={handleNewCommentChange} value={newCommentText} required onInvalid={handleNewCommentInvalid} />

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => (
					<Comment content={comment} key={comment} onDeleteComment={deleteComment} />
				))}
			</div>
		</article>
	)
}