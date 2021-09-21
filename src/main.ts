import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4d1MGXqypAN33O8fTO5nYKdIXsKcRfoo",
  authDomain: "locksley-666.firebaseapp.com",
  projectId: "locksley-666",
  storageBucket: "locksley-666.appspot.com",
  messagingSenderId: "785517341206",
  appId: "1:785517341206:web:b5640f18e5cc5666c3e337",
  measurementId: "G-XLQD3KM8CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
