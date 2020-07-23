import angular, { IScope } from 'angular';
import { AboutModule } from './about.module';
import template from './about.component.html';
import './about.component.scss';

interface AboutScope extends IScope {
  version: string;
}

class AboutController {
  constructor($scope: AboutScope) {
    $scope.version = angular.version.full;
  }
}

export const AboutComponent = AboutModule.component('about', {
  template,
  controller: AboutController,
});
