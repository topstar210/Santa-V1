export const rootPaths = {
  root: '/',
  pagesRoot: '/',
  authRoot: '/authentication',
  errorRoot: '/error',
};

/**
 * Object containing various paths used in the application.
 */
const paths = {
  default: `${rootPaths.root}`,
  registeredUser: `${rootPaths.pagesRoot}users`,
  temporaryUser: `${rootPaths.pagesRoot}temporary-users`,
  modules: `${rootPaths.pagesRoot}modules`,
  profile: `${rootPaths.pagesRoot}profile`,

  products: `${rootPaths.pagesRoot}products`,

  login: `${rootPaths.authRoot}/login`,
  signup: `${rootPaths.authRoot}/sign-up`,
  forgotPassword: `${rootPaths.authRoot}/forgot-password`,
  notFound: `${rootPaths.errorRoot}/404`,
};

export default paths;
