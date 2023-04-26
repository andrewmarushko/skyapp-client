import { ButtonInterface, DateInterface, NavLinksInterface } from "./general"

export interface FooterInterface extends DateInterface {
  footer: FooterDataInterface
}

export interface FooterDataInterface {
  id: number,
  social: SocialMediaInterface[],
  subscribe: SubscribeInterface,
  navigation: FooterNavInterface[],
  copyright: CopyrightInterface
}

export interface SocialMediaInterface {
  id: number,
  type: string,
  link: NavLinksInterface,
}

export interface SubscribeInterface {
  id: number,
  title: string,
  subtitle: string,
  submitButton: ButtonInterface,
}

export interface FooterNavInterface {
  id: number,
  label: string,
  links: NavLinksInterface[]
}

export interface CopyrightInterface {
  id: number,
  companyName: string,
  reserved: string,
  copyright: string
}
