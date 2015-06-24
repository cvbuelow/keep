import './note-maker.css';
import angular from 'angular';
import template from './note-maker.html';
import {NoteMakerController as controller} from './note-maker.controller';

let noteMakerModule = angular.module('note-maker', [])
  .directive('noteMaker', function() {
    return { template, controller,
      controllerAs: 'ctrl',
      scope: {}
    };
  });

export {noteMakerModule};