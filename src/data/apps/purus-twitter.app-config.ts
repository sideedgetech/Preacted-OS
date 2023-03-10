import { createAppConfig } from '__/helpers/create-app-config';

export const purusTwitterAppConfig = createAppConfig({
  title: `Side's Info`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/sideedgetech/', '_blank'),

  dockBreaksBefore: true,
});
