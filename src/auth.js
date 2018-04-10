import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'

const locationHelper = locationHelperBuilder({})

export const Admin = connectedRouterRedirect({
  redirectPath: '/admin',
  authenticatedSelector: ({ user }) => !!user.auth,
  wrapperDisplayName: 'Admin'
})

export const NotAdmin = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/admin/posts',
  allowRedirectBack: false,
  authenticatedSelector: ({ user }) => !user.auth,
  wrapperDisplayName: 'NotAdmin'
})
