export const CHANGE_SETTINGS = 'PROFILE::CHANGE_SETTINGS';

export const changeSettings = (newSettings) => ({
  type: CHANGE_SETTINGS,
  payload: newSettings,
});
