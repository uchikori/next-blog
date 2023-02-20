import styles from '@/styles/Container.module.css'

export const Container = (props) => {
  const {children, large = false } = props;

  return(
    <div className={ large ? styles.large : styles.default }>
      {children}
    </div>
  )
}