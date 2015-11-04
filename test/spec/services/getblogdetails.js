'use strict';

describe('Service: getBlogDetails', function () {

  // load the service's module
  beforeEach(module('zowberApp'));

  // instantiate service
  var getBlogDetails;
  beforeEach(inject(function (_getBlogDetails_) {
    getBlogDetails = _getBlogDetails_;
  }));

  it('should do something', function () {
    expect(!!getBlogDetails).toBe(true);
  });

});
