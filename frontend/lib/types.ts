import { links } from './data'
import { footerLinks1 } from './data'
import { footerLinks2 } from './data'
import { footerLinks3 } from './data'

export type navType = typeof links[number]['name']

export type footer1 = typeof footerLinks1[number]['name']

export type footer2 = typeof footerLinks2[number]['name']

export type footer3 = typeof footerLinks3[number]['name']
