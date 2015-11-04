'use strict';

describe('Service: readingTimeService', function () {

  // load the service's module
  beforeEach(module('zowberApp'));

  // instantiate service
  var readingTimeService;
  beforeEach(inject(function (_readingTimeService_) {
    readingTimeService = _readingTimeService_;
  }));

  it('should do something', function () {
    expect(!!readingTimeService).toBe(true);
  });

});
