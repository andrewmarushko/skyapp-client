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