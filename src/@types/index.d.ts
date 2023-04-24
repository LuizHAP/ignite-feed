type Author = {
  avatarUrl: string
  name: string
  role: string
}

type Content = {
  type: 'paragraph' | 'link'
  content: string
}

type Post = {
  id?: number,
  author: Author,
  publishedAt: Date,
  content: Content[]
}