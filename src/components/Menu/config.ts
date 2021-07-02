import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://pikapikatoken/swap/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://pikapikatoken/swap/#/pool',
      },
      {
        label: t('LP Migration'),
        href: 'https://pikapikatoken/swap/#/migrate',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Team Battle'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pikapikatoken/',
    status: {
      text: t('New').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Telegram'),
        href: 'https://t.me/PIKAPIKAOFFICIAL',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        label: t('Twitter'),
        href: 'https://t.me/PIKAPIKAOFFICIAL',
      },
      {
        label: t('Reddit'),
        href: 'https://www.reddit.com/user/pikapikatoken',
      },
      {
        label: t('Medium'),
        href: 'https://t.me/PIKAPIKAOFFICIAL',
      },
      {
        label: t('BSCScan'),
        href: 'https://bscscan.com/address/0x7A792E3378878c2de063Af94a1b17E3Bd9825a2b',
      },
    ],
  },
]

export default config
