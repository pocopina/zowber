'use strict';

/**
 * @ngdoc service
 * @name zowberApp.postsService
 * @description
 * # postsService
 * @returns {array} An array of post objects 
 */
angular.module('zowberApp')
  .service('postsService', function ($filter) {
    
    this.getPosts = function (numberOfPosts) {
      var posts = [];
      if (numberOfPosts === parseInt(numberOfPosts, 10)) { // if numberOfPosts is an int
        for (var i = 0; i < numberOfPosts; i++) {
          var title = "Blog post " + (i + 1);
          var filteredTitle = "/#/blog/" + $filter('urlEncode')(title);
          var obj = { id: i, title: title, link: filteredTitle, meta: { publishedDate: { value: "22 Mar 2015" } } };
          posts.push(obj);
        }
      }
      return posts;
    };

    this.getPost = function (title) {

      var post = {
        title: title,
        content: "Post content",
        meta: {
          publishedDate: {
            friendlyName: "Published",
            value: "22 Mar 2015"
          }
        },
        tags: [
          {
            id: 1,
            name: "Tag 1"
          },
          {
            id: 2,
            name: "Tag 2"
          }
        ]
      } || {};

      return post;
    };
});
