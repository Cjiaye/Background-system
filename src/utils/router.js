/**
 *
 * @param {*} routes
 * 获取所有的非一级路由数据
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}
/*
 *获取所有一级数据
 */
export const filterRouters = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)

  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

const isNull = (data) => {
  // console.log(data)
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

export const generateMenus = (routes) => {
  routes.forEach((route) => {})
}
