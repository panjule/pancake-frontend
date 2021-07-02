import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PIKASwap',
  description:
    'Ready to 🌙⚡️MOONZAPP!!🌙⚡️ with us',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PancakeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PancakeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PancakeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PIKASwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PIKASwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PIKASwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('PIKASwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PIKASwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PIKASwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('PIKASwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('PIKASwap')}`,
      }
    default:
      return null
  }
}
