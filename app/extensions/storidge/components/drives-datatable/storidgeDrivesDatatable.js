angular.module('extension.storidge').component('storidgeDrivesDatatable', {
  templateUrl: './storidgeDrivesDatatable.html',
  controller: 'StoridgeDrivesDatatableController',
  bindings: {
    titleText: '@',
    titleIcon: '@',
    dataset: '<',
    tableKey: '@',
    orderBy: '@',
    reverseOrder: '<',
    removeAction: '<',
    addAction: '<',
    rescanAction: '<'
  }
});
