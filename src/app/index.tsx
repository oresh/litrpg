/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';

import { HomePage } from './pages/HomePage/Loadable';

export function App() {
  return <HomePage />;
}
