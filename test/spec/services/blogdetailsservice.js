'use strict';

describe('Service: blogDetailsService', function () {

  // load the service's module
  beforeEach(module('zowberApp'));

  // instantiate service
  var blogDetailsService;
  beforeEach(inject(function (_blogDetailsService_) {
    blogDetailsService = _blogDetailsService_;
  }));

  it('should do something', function () {
    expect(!!blogDetailsService).toBe(true);
  });

});
