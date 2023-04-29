import { DateInterface } from "./general";

export interface LogoInterface extends DateInterface {
  logo: LogoDataInterface
}

export interface LogoDataInterface {
  id: number,
  companyName: string,
  href: string,
  logo: {
    data: {
      id: number,
      attributes: {
        name: string,
        alternativeText: string | null,
        caption: string | null,
        width: number,
        height: number,
        formats: string | null,
        hash: string,
        ext: string,
        mime: string,
        size: number,
        url: string,
        previewUrl: string | null,
        provider: string,
        provider_metadata: {
          public_id: string,
          resource_type: string
        },
        createdAt: Date,
        updatedAt: Date,
      }
    }
  }
}