const ROOT_PATH = 'http://petcentermockapi.azurewebsites.net';

export let CONFIG = {
  baseUrls: {
    config: 'commands/config',
    alimentos: `${ROOT_PATH}/alimentos`,
    filtros: `${ROOT_PATH}/filtros`,
    planesAlimenticios: `${ROOT_PATH}/planesAlimenticios`
  }
};
