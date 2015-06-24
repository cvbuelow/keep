import './note-list.css';
import angular from 'angular';
import template from './note-list.html';
import {NoteListController as controller} from './note-list.controller';

let noteListModule = angular.module('note-list', [])
  .directive('noteList', function($window) {
    return { template, controller,
      scope: {},
      controllerAs: 'ctrl',
      link: function(scope, ele, attr, ctrl) {
        window.addEventListener('scroll', () => {
          scope.$apply();
          ctrl.update();
        });
      }
    };
  });

export {noteListModule};