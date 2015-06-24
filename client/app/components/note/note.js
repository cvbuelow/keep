import './note.css';
import angular from 'angular';
import template from './note.html';
import {NoteController as controller} from './note.controller';

let noteModule = angular.module('note', [])
  .directive('note', function() {
    return { template, controller };
  });

export {noteModule};