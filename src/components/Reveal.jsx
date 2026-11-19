import useInView from '../hooks/useInView'

// Fades and lifts its content in when scrolled into view
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, seen] = useInView(0.15)
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
