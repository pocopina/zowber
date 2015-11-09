'use strict';

describe('Service: portfolioService', function () {

  // load the service's module
  beforeEach(module('zowberApp'));

  // instantiate service
  var portfolioService;
  beforeEach(inject(function (_portfolioService_) {
    portfolioService = _portfolioService_;
  }));

  it('should do something', function () {
    expect(!!portfolioService).toBe(true);
  });

});
