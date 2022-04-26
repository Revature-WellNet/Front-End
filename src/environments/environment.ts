// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  apiBaseUrl: 'http://user-service/wellnet/',
  firebase : {
    apiKey: "AIzaSyDTzgCaK2cYqraEg9fn-X92cNZnU5ZDC-k",
    authDomain: "sandbox-project-a5abb.firebaseapp.com",
    projectId: "sandbox-project-a5abb",
    storageBucket: "sandbox-project-a5abb.appspot.com",
    messagingSenderId: "70781762376",
    appId: "1:70781762376:web:1e3cfbd999ff8ed9d2d17d"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
