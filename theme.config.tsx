import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DabNotion</span>,
  project: {
    link: 'https://github.com/dabaz-official/dabnotion',
  },
  docsRepositoryBase: 'dabaz-official/dabnotion',
  footer: {
    text: 'DabNotion by DabAZ',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '中文' },
  ]
}

export default config
