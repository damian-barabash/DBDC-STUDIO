import tfDesktop from '../assets/products/ticketflow-desktop.webp'
import tfMobile from '../assets/products/ticketflow-mobile.webp'
import tfLogo from '../assets/products/ticketflow-logo.webp'
import sakeDesktop from '../assets/products/sake-desktop.webp'
import sakeMobile from '../assets/products/sake-mobile.webp'
import sakeLogo from '../assets/products/sake-logo.webp'
import cmDesktop from '../assets/products/catmon-desktop.webp'
import cmLogo from '../assets/products/catmon-logo.webp'
import cmCatdex from '../assets/products/catmon-catdex.webp'

export type ProductId = 'ticketflow' | 'sake' | 'catmon'

export type Product = {
  id: ProductId
  name: string
  url: string
  domain: string
  logo: string
  desktop: string
  mobile: string
  /** оформление карточки, как три карточки Get In Touch на референсе */
  tone: 'dark' | 'accent' | 'light'
}

export const PRODUCTS: Product[] = [
  { id: 'ticketflow', name: 'Ticket Flow', url: 'https://ticketflow.pl/', domain: 'ticketflow.pl', logo: tfLogo, desktop: tfDesktop, mobile: tfMobile, tone: 'dark' },
  { id: 'sake', name: 'SAKE Control System', url: 'https://sakecontrol.pl/', domain: 'sakecontrol.pl', logo: sakeLogo, desktop: sakeDesktop, mobile: sakeMobile, tone: 'accent' },
  { id: 'catmon', name: 'CatMon', url: 'https://catmongame.app/', domain: 'catmongame.app', logo: cmLogo, desktop: cmDesktop, mobile: cmCatdex, tone: 'light' },
]
