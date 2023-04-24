import { ImgHTMLAttributes } from 'react'

import styles from './index.module.css'

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean
}

export default function Avatar({ hasBorder = true, alt = '', ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}