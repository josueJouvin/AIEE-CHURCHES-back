import type { Struct, Schema } from '@strapi/strapi';

export interface ServicesTypesServicesTypes extends Struct.ComponentSchema {
  collectionName: 'components_services_types_services_types';
  info: {
    displayName: 'Services Types';
    icon: 'seed';
    description: '';
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

export interface MainServicesDayMainServicesDay extends Struct.ComponentSchema {
  collectionName: 'components_main_services_day_main_services_days';
  info: {
    displayName: 'Services day';
    icon: 'bulletList';
    description: '';
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
    RedSocial: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LeadershipTeamLeadershipTeam extends Struct.ComponentSchema {
  collectionName: 'components_leadership_team_leadership_teams';
  info: {
    displayName: 'Leadership Team';
    icon: 'user';
  };
  attributes: {
    Nombre: Schema.Attribute.String;
    Ocupacion: Schema.Attribute.String;
    Imagen: Schema.Attribute.Media<'images'>;
  };
}

export interface ServicesProgramServicesProgram extends Struct.ComponentSchema {
  collectionName: 'components_services_program_services_programs';
  info: {
    displayName: 'Services Program';
    icon: 'apps';
    description: '';
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'services-types.services-types': ServicesTypesServicesTypes;
      'main-services-day.main-services-day': MainServicesDayMainServicesDay;
      'redes-sociales.redes-sociales': RedesSocialesRedesSociales;
      'leadership-team.leadership-team': LeadershipTeamLeadershipTeam;
      'services-program.services-program': ServicesProgramServicesProgram;
    }
  }
}
