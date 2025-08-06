import type { Schema, Struct } from '@strapi/strapi';

export interface AddressAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    address: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockBlocks extends Struct.ComponentSchema {
  collectionName: 'components_block_blocks';
  info: {
    displayName: 'Blocks';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    cover: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    content: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SocialMedia: Schema.Attribute.Component<'socmed.social-media', true>;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    Nav: Schema.Attribute.Component<'navlink.navbar-link', true>;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    image_desktop: Schema.Attribute.Media<'images' | 'videos'>;
    image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title_1: Schema.Attribute.String;
    title_2: Schema.Attribute.String;
    title_3: Schema.Attribute.String;
    title_4: Schema.Attribute.String;
  };
}

export interface JadwalJadwal extends Struct.ComponentSchema {
  collectionName: 'components_jadwal_jadwals';
  info: {
    displayName: 'Jadwal';
    icon: 'globe';
  };
  attributes: {
    acara: Schema.Attribute.Component<'block.blocks', true>;
    tanggal: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface KabupatenKabupaten extends Struct.ComponentSchema {
  collectionName: 'components_kabupaten_kabupatens';
  info: {
    displayName: 'Kabupaten';
  };
  attributes: {
    content: Schema.Attribute.Text;
    cover: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface NavlinkNavbarLink extends Struct.ComponentSchema {
  collectionName: 'components_navlink_navbar_links';
  info: {
    displayName: 'Navbar Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface SocmedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_socmed_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    handle: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'address.address': AddressAddress;
      'block.blocks': BlockBlocks;
      'footer.footer': FooterFooter;
      'header.header': HeaderHeader;
      'hero.hero': HeroHero;
      'jadwal.jadwal': JadwalJadwal;
      'kabupaten.kabupaten': KabupatenKabupaten;
      'navlink.navbar-link': NavlinkNavbarLink;
      'socmed.social-media': SocmedSocialMedia;
    }
  }
}
