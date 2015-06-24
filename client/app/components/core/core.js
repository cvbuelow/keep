import angular from 'angular';
import {Notes} from './notes.factory';

let coreModule = angular.module('core', [])
  .factory('Notes', Notes);

export {coreModule};