export class Link {
  /**
   * Creates a simple object with name and link properties
   * @param {String} name
   * @param {String} link
   */
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
}

const links = {
  "ministeries": [
    new Link('Ministerio de Educación', 'www.minerd.gob.do'),
    new Link('Ministerio de Estado de Hacienda', 'www.hacienda.gov.do'),
    new Link('Ministerio de Estado de Industria y Comercio', 'www.seic.gov.do'),
    new Link('Ministerio de Estado de Interior y Policía', 'www.seip.gov.do'),
    new Link('Ministerio de Estado de la Juventud', 'www.juventud.gob.do'),
    new Link('Ministerio de Estado de la Mujer', 'www.mujer.gob.do'),
    new Link('Ministerio de Estado de las Fuerzas Armadas', 'www.fuerzasarmadas.mil.do'),
    new Link('Ministerio de Estado de Medio Ambiente', 'www.medioambiente.gob.do'),
    new Link('Ministerio de Estado de Obras Públicas', 'www.seopc.gov.do'),
    new Link('Ministerio de Estado de Salud Pública y Asistencia Social (SESPAS)', 'www.sespas.gov.do'),
    new Link('Ministerio de Estado de Trabajo', 'www.set.gov.do'),
    new Link('Ministerio de Estado de Turismo', 'www.sectur.gob.do'),
    new Link('Ministerio de Relaciones Exteriores', 'www.mirex.gob.do'),
  ],
  "institutions": [
    new Link('Banco Nacional de Fomento de la Vivienda y la Producción', 'www.bnv.com.do'),
  ],
  "offices": [
    new Link('Oficina Presidencial de Tecnologías de la Información y Comunicación', 'www.optic.gob.do'),
    new Link('Oficina Nacional de Estadísticas', 'www.one.gob.do'),
  ]
}

export default links;
