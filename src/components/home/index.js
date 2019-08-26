import angular from 'angular';
import uirouter from '@uirouter/angularjs';
// import ngRoute from 'angular-route'

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting.directive';

export default angular.module('app.home', [uirouter, randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;