// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDmp2Z-joxwuiBK61iAnUQfYz6ooInugo0",
    authDomain: "todolist-416b2.firebaseapp.com",
    databaseURL: "https://todolist-416b2.firebaseio.com",
    projectId: "todolist-416b2",
    storageBucket: "todolist-416b2.appspot.com",
    messagingSenderId: "250859773736"
  }
};
