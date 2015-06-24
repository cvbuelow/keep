import 'normalize.css';
import angular from 'angular';
import {homeModule, noteMakerModule, noteListModule, noteModule, coreModule} from './components/components';

angular.module('app', [
  homeModule.name,
  noteMakerModule.name,
  noteListModule.name,
  noteModule.name,
  coreModule.name
]);
