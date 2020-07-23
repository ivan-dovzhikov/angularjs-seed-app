import angular from 'angular';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

export const AppModule = angular.module('app', [
  AppRoutingModule.name,
  HeaderComponent.name,
  AboutComponent.name,
  FeaturesComponent.name,
]);
