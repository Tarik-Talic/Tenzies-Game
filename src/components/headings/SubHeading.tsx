import { HeadingsProps } from './Heading.types';

function SubHeading({ children, classname, as }: HeadingsProps) {
  const Element = as || 'h2';
  return <Element className={classname}>{children}</Element>;
}

export default SubHeading;
