// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Base el URL del BackEnd
  // base_url: 'http://localhost:3000/api/',
  base_url: 'https://paco-adminpro-backend.herokuapp.com/api/',

// Dependencias de GOOGLE
  GOOGLE_CLIENT_ID: '740667955534-egpq3ic1rk3db6l25n09u1tbl2a6cb8n.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: 'vmqz6eCFM-ls33KmV08ujHlj',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
