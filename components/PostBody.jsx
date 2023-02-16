import styles from '@/styles/PostBody.module.css';

export const PostBody = (props) => {
  const { children } = props;
  
  return (
    <div className={styles.stack}>
      { children }
    </div>
  )
}