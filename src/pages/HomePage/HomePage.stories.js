import { withRouter } from 'storybook-addon-react-router-v6';

import HomePage from "./HomePage";

export default {
  title: "Home Page",
  component: HomePage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    }
  }
};

export function MyHomePage() {
  return (
        <HomePage />
  );
}
