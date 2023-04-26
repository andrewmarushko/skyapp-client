import { Icons } from "@/components/icons"
import { DateInterface, NavLinksInterface } from "./general"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface SocialMediaInterface {
  id: number,
  type: string,
  link: string,
}

export interface WorkingHoursInterface {
  id: number,
  day?: string[],
  hours?: string
}

export interface ItemLocationInterface {
  id: number,
  zipcode?: string,
  country?: string,
  city?: string,
  lat?: string,
  address?: string,
  long?: string,
  continent?: string
}

interface StrapiImageFormatInterface {
  url: string;
  width: number;
  height: number;
  ext: string,
  hash: string,
  mime: string,
  name: string,
  path: null | string,
  size: number,
  provider_metadata: {
    public_id: string,
    resource_type: string
  }
}

interface StrapiImageInterface extends StrapiImageFormatInterface {
  id: number,
  name: string,
  alternativeText: string,
  caption: null | string,
  formats: {
    thumbnail: StrapiImageFormatInterface;
    large?: StrapiImageFormatInterface;
    medium?: StrapiImageFormatInterface;
    small?: StrapiImageFormatInterface;
  };
  folderPath: string,
  createdAt: string,
  updatedAt: string
  previewUrl: null | string;
  provider: string,
}

export interface SeoBlockInterface  {
  id: 3,
  title: null | string;
  description: null | string;
}

export interface StrapiUserInterface {
  id:number,
  firstname: string,
  lastname: string,
  username: null | string,
  email: string,
  password: string,
  resetPasswordToken: null | string,
  registrationToken: string,
  isActive: Boolean,
  blocked: Boolean,
  preferedLanguage: null | string,
  createdAt: Date | string,
  updatedAt: Date | string
}

export interface IndoorDataItemInterface {
  id: number
  createdAt: Date | string,
  updatedAt: Date | string,
  publishedAt: Date | string,
  title: string,
  diameter: string,
  speed: string,
  height: string,
  description?: string,
  facilities?: string ,
  prices: string,
  websiteUrl: string,
  isStillBuilding: Boolean,
  companyName: string,
  UID: number | null,
  contacts: {
    id: number,
    email: string,
    phone: string
  },
  socialMedia: {
    youtubeChannelId: string,
    googlePlaceId: string,
    list: SocialMediaInterface[]
  },
  indoorLocation: ItemLocationInterface,
  workingHours: WorkingHoursInterface[],
  coverImage: StrapiImageInterface,
  SEO: SeoBlockInterface,
  logo: StrapiImageInterface,
  createdBy: StrapiUserInterface,
  updatedBy: StrapiUserInterface
}

export interface IndoorDataListInterface {
  country: string
  data: IndoorDataItemInterface[]
}

export interface CustomMapProps{
  lat?: string,
  long?: string
}

export interface NavDataInterface extends DateInterface {
  mainNavigation: MainNavInterface,
}

export interface MainNavInterface {
  id: number,
  navigationLinks: NavLinksInterface[],
  panel: NavPanelInterface[]
}

{/* TODO: add typization for PUSH key */}
export interface NavPanelInterface {
  id: number,
  label: string,
  links: NavPanelLinkInterface[],
  push: any
}

export interface NavPanelLinkInterface {
  id: number,
  description: string,
  link: NavLinksInterface,
}



