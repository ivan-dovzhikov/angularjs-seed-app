import { IScope } from 'angular';
import { AppModule } from './app.module';
import template from './app.component.html';
import './app.component.scss';

interface AppScope extends IScope {
  title: string;
}

class AppController {
  constructor($scope: AppScope) {
    $scope.title = 'Fancy angular';
  }
}

export const AppComponent = AppModule.component('app', {
  template,
  controller: AppController,
});
