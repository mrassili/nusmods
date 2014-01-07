define(['backbone.marionette', 'views/ModuleView'],
  function (Marionette, ModuleView) {
    'use strict';

    return Marionette.CollectionView.extend({
      el: $('.modules > tbody'),
      itemView: ModuleView
    });
  });
