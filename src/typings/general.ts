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
