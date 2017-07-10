import { GestionHospedajeAlojamientoAppPage } from './app.po';

describe('gestion-hospedaje-alojamiento-app App', () => {
  let page: GestionHospedajeAlojamientoAppPage;

  beforeEach(() => {
    page = new GestionHospedajeAlojamientoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
