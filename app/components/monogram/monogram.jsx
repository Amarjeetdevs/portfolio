import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="50"
      viewBox="0 0 30 30"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path d="M19.75 0L0 29H5L9.75 17H15.75L20.5 29H25.5L19.75 0ZM11.5 15L15.75 7L20 15H11.5Z" fill="currentColor"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
