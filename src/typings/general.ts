export interface IIcon {
  width?: number
  height?: number
  color?: string
  className?: string
}

export interface IColor {
  color: string
}

export interface IImage {
  src: string
  alt: string
}

export interface IPrismicImage {
  url: string
}

export interface IInterests {
  title: string
  interests: IInterest[]
}

export interface IInterest {
  label: string
  desc: string
  image: {
    url: string
  }
}

export interface IQuotes {
  quotes: IQuote[]
  backdrop?: IPrismicImage
}

export interface IQuote {
  text: string
  author: string
}

export interface ISkills {
  title: string
  skills: ISkill[]
}

export interface ISkill {
  primary: any
  items: ISkillItem[]
}

export interface ISkillItem {
  item: string
}
