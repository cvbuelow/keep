import angular from 'angular';
import {HomeComponent} from './home.component';
import {noteMakerModule} from '../note-maker/note-maker';
let homeModule = angular.module('home', [noteMakerModule.name])
  .directive('home', HomeComponent);

export {homeModule};