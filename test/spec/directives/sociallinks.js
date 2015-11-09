'use strict';

describe('Directive: socialLinks', function () {

  // load the directive's module
  beforeEach(module('zowberApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<social-links></social-links>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the socialLinks directive');
  }));
});
