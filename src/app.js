
import angular from 'angular'
import uirouter from '@uirouter/angularjs';

import appRoute from './config/app.config'
import appLog from './utils/logger'
import home from './components/home';

appLog.helloLog()

const app = angular.module('app', [uirouter, home])
    .config(appRoute)
    .name

angular.element(() => {
    angular.bootstrap(document, [app])
})

// angular.bootstrap(document, [app])