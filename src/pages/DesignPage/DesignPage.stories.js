import { withRouter } from 'storybook-addon-react-router-v6';

import DesignPage from "./DesignPage";

export default {
  title: "Design Page",
  component: DesignPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/design',
    }
  }
};

export function MyDesignPage() {
  return <DesignPage />;
}
