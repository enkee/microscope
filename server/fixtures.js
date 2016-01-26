if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope enkee',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor enkee',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book enkee',
    url: 'http://themeteorbook.com'
  });
}
