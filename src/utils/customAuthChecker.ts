import { AuthChecker } from 'type-graphql';

const customAuthChecker: AuthChecker<{ context: any }> = ({ context }) => {
  console.log('cookie', context);

  return true;
};
export default customAuthChecker;
