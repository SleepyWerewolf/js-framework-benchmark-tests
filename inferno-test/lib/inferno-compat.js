// https://github.com/infernojs/inferno/issues/1299#issuecomment-508386099

import React from 'inferno-compat'
export default React
export * from 'inferno-compat'
// bypass export of React.createContext
import createContext from 'create-react-context/lib/implementation'
export { createContext }