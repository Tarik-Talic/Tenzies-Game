
import { HeadingsProps } from './Heading.types';

function MainHeading({ children, classname }: HeadingsProps) {
  return <h1 className={classname}>{children}</h1>;
}

export default MainHeading;
