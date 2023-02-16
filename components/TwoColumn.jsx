import styles from '@/styles/TwoColumn.module.css';

export const TwoColumn = (props) => {

  const { children } = props;

  return (
    <div className={styles.flexContainer}>
      { children }
    </div>
  )
}

export const TwoColumnMain = (props) => {

  const { children } = props;
  
  return (
    <div className={styles.main}>
      { children }
    </div>
  )

}
export const TwoColumnSidebar = (props) => {

  const { children } = props;

  return (
    <div className={styles.sidebar}>
      { children }
    </div>
  )
}