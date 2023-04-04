import { Icons } from "@/components/icons"

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
  id: 5,
  type: string,
  link: string,
  youtubeChannelId?: string | null
}

export interface WorkingHoursInterface {
  id: 5,
  day?: string[],
  hours?: string
}

export interface ItemLocationInterface {
  id: 5,
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

interface StrapiImageInterface {
  id: number;
  name: string;
  alternativeText: string;
  caption?: string;
  width: number;
  height: number;
  formats: {
    thumbnail: StrapiImageFormatInterface;
    large: StrapiImageFormatInterface;
    medium: StrapiImageFormatInterface;
    small: StrapiImageFormatInterface;
  };
  previewUrl?: string;
}

export interface IndoorDataItemInterface {
  id: number
  createdAt: Date | string,
  updatedAt: Date | string,
  publishedAt: Date | string,
  name: string,
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
  socialMedia: SocialMediaInterface[],
  indoorLocation: ItemLocationInterface,
  workingHours: WorkingHoursInterface[],
  coverImage: StrapiImageInterface,

}

export interface IndoorDataListInterface {
  country: string
  data: IndoorDataItemInterface[]
}

