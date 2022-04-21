// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  apiBaseUrl: 'http://localhost:8081/wellnet/',
  firebase : {
    apiKey: "AIzaSyD3Ne0XCat_uajxk7zlvxXUtNqtrz-ZPjw",
    authDomain: "wellnet-reva.firebaseapp.com",
    projectId: "wellnet-reva",
    storageBucket: "wellnet-reva.appspot.com",
    messagingSenderId: "288067556757",
    appId: "1:288067556757:web:82a3b1b279b294f3b3d29c",
    measurementId: "G-YLST30MHJC"
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
