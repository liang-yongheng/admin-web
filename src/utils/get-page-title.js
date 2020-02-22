import i18n from '@/lang'

export default function getPageTitle(key) {
  const hasKey = i18n.te(`route.${key}`)
  const title = i18n.t(`common.title`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName} - ${title}`
  }
  return `${title}`
}
