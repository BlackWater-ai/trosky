import { Link } from 'react-router-dom';

const focusClass =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

export default function SmartLink({ to, href, children, className = '', onClick, ...props }) {
  const classes = `${className} ${focusClass}`.trim();

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
