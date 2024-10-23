import type { Schema, Struct } from '@strapi/strapi';

export interface MainServicesDayMainServicesDay extends Struct.ComponentSchema {
  collectionName: 'components_main_services_day_main_services_days';
  info: {
    description: '';
    displayName: 'Services day';
    icon: 'bulletList';
  };
  attributes: {
    Dia: Schema.Attribute.Enumeration<
      ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
    > &
      Schema.Attribute.Required;
    Hora: Schema.Attribute.Time & Schema.Attribute.Required;
  };
}

export interface RedesSocialesRedesSociales extends Struct.ComponentSchema {
  collectionName: 'components_redes_sociales_redes_sociales';
  info: {
    displayName: 'Redes Sociales';
    icon: 'globe';
  };
  attributes: {
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    RedSocial: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface ServicesProgramServicesProgram extends Struct.ComponentSchema {
  collectionName: 'components_services_program_services_programs';
  info: {
    description: '';
    displayName: 'Services Program';
    icon: 'apps';
  };
  attributes: {
    DescripcionMinima: Schema.Attribute.Text;
    Dia: Schema.Attribute.Enumeration<
      ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
    >;
    Hora: Schema.Attribute.Time;
    Servicio: Schema.Attribute.Enumeration<
      [
        'Culto Dominical',
        'Estudio B\u00EDblico',
        'Grupo de J\u00F3venes',
        'Escuela Dominical',
        'Reuni\u00F3n de Oraci\u00F3n',
        'Servicio de Alabanza',
        'Ministerio de Ni\u00F1os',
        'Alcance Comunitario',
        'Grupo de Mujeres',
        'Grupo de Hombres',
        'Teatro Cristiano',
        'Taller de Matrimonios',
        'C\u00E9lulas Familiares',
        'Ministerio de M\u00FAsica',
        'Clases de Discipulado',
        'Grupo de Estudios Teol\u00F3gicos',
        'Consejer\u00EDa Familiar',
        'Ayuno y Oraci\u00F3n',
        'Campamentos',
      ]
    >;
  };
}

export interface ServicesTypesServicesTypes extends Struct.ComponentSchema {
  collectionName: 'components_services_types_services_types';
  info: {
    description: '';
    displayName: 'Services Types';
    icon: 'seed';
  };
  attributes: {
    Services: Schema.Attribute.Enumeration<
      [
        'Culto Dominical',
        'Estudio B\u00EDblico',
        'Grupo de J\u00F3venes',
        'Escuela Dominical',
        'Reuni\u00F3n de Oraci\u00F3n',
        'Servicio de Alabanza',
        'Ministerio de Ni\u00F1os',
        'Alcance Comunitario',
        'Grupo de Mujeres',
        'Grupo de Hombres',
        'Teatro Cristiano',
        'Taller de Matrimonios',
        'C\u00E9lulas Familiares',
        'Ministerio de M\u00FAsica',
        'Clases de Discipulado',
        'Grupo de Estudios Teol\u00F3gicos',
        'Consejer\u00EDa Familiar',
        'Ayuno y Oraci\u00F3n',
        'Campamentos',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'WhatsApp']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'main-services-day.main-services-day': MainServicesDayMainServicesDay;
      'redes-sociales.redes-sociales': RedesSocialesRedesSociales;
      'services-program.services-program': ServicesProgramServicesProgram;
      'services-types.services-types': ServicesTypesServicesTypes;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
