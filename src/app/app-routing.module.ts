import angular from 'angular';
import uiRouter, { StateProvider } from 'angular-ui-router';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

// Don't forget to add dependency to app.module
export const AppRoutingModule = angular
  .module('routing', [uiRouter])
  .config(($stateProvider: StateProvider) => {
    $stateProvider.state({
      name: 'About',
      url: '',
      component: AboutComponent.name,
    });

    $stateProvider.state({
      name: 'Features',
      url: '/features',
      component: FeaturesComponent.name,
    });
  });
