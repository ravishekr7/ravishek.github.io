import clsx from 'clsx'

export function Prose({ className, ...props }) {
  return (
    <div className={clsx(className, 'prose prose-zinc dark:prose-invert')} {...props} />
  )
}
