import { IScope } from 'angular';
import { HeaderModule } from './header.module';
import template from './header.component.html';
import './header.component.scss';
import angularLogo from 'assets/angularLogo.svg';

interface HeaderScope extends IScope {
  title: string;
  logo: string;
}

class HeaderController {
  constructor($scope: HeaderScope) {
    $scope.title = 'Fancy AngularJS';
    $scope.logo = angularLogo;
  }
}

export const HeaderComponent = HeaderModule.component('pageHeader', {
  template,
  controller: HeaderController,
});
