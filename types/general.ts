import { PricesTypes } from "enums/enums";

export interface ButtonInterface {
  id: number,
  label: string,
  type: string
}

export interface NavLinksInterface {
  id: number,
  href: string,
  label: string,
  target: string
}

export interface DateInterface {
  createdAt: Date,
  locale: string,
  publishedAt: Date,
  updatedAt: Date,
}

export interface BecomePartnerInterface {
  id: number,
  title: string,
  subtitle?: string,
  link: NavLinksInterface
}

export interface PriceInterface {
  type: keyof typeof PricesTypes;
  price: number;
  currency: string;
}