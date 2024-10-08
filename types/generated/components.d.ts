import type { Struct, Schema } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'leadership-team.leadership-team': LeadershipTeamLeadershipTeam;
    }
  }
}
