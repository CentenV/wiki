/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TestfolderTestpathIndexImport } from './routes/_testfolder/testpath/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TestfolderTestpathIndexRoute = TestfolderTestpathIndexImport.update({
  id: '/_testfolder/testpath/',
  path: '/testpath/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_testfolder/testpath/': {
      id: '/_testfolder/testpath/'
      path: '/testpath'
      fullPath: '/testpath'
      preLoaderRoute: typeof TestfolderTestpathIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/testpath': typeof TestfolderTestpathIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/testpath': typeof TestfolderTestpathIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_testfolder/testpath/': typeof TestfolderTestpathIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/testpath'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/testpath'
  id: '__root__' | '/' | '/_testfolder/testpath/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TestfolderTestpathIndexRoute: typeof TestfolderTestpathIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TestfolderTestpathIndexRoute: TestfolderTestpathIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_testfolder/testpath/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_testfolder/testpath/": {
      "filePath": "_testfolder/testpath/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
