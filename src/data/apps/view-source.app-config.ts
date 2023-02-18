import { createAppConfig } from '__/helpers/create-app-config';

export const viewSourceAppConfig = createAppConfig({
  title: `View Source`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/sideedgetech/Preacted-OS', '_blank'),
});
