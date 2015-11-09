'use strict';

describe('Directive: recentWork', function () {

  // load the directive's module
  beforeEach(module('zowberApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recent-work></recent-work>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the recentWork directive');
  }));
});
