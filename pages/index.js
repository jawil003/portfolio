// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../pages_'
import ns0 from '../locales/en/common.json'
import ns1 from '../locales/en/header.json'
import ns2 from '../locales/en/intro.json'
import ns3 from '../locales/en/project.json'
import ns4 from '../locales/en/resume.json'

const namespaces = { 'common': ns0, 'header': ns1, 'intro': ns2, 'project': ns3, 'resume': ns4 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="en" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"en","isStaticMode":true}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'en'})
}





export * from '../pages_'
