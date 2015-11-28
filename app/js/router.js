angular.module('app')
.config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('base', {

      url: '',
      views: {
        '@': {
          templateUrl: 'templates/startPage/layout.html'
        },
        'header@base': {
          templateUrl: 'templates/startPage/header.html',
          controller: 'ProfileController'
          // controller: 'headerController'
        }
      }
    })
    .state('base.index', {
      url: '/',
      views: {
        'main@base': {
          templateUrl: 'templates/startPage/music.html',
          controller: 'MusicListController'
        }
      }
    })
    .state('base.viewMusic', {
      url: '/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/music-view.html',
          controller: 'MusicViewController'
        }
      }
    })
    .state('base.newMusic', {
      url: '/new',
      views: {
        'main@base': {
          templateUrl: 'templates/music-add.html',
          controller: 'MusicCreateController'
        }
      }
    })
    .state('base.editMusic', {
      url: '/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/music-edit.html',
          controller: 'MusicEditController'
        }
      }
    })


    .state('base.albums', {
      url: '/albums',
      views: {
        'main@base': {
          templateUrl: 'templates/albums.html',
          controller: 'AlbumsListController'
        }
      }
    })
    .state('base.viewAlbums', {
      url: '/albums/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/albums-view.html',
          controller: 'AlbumsViewController'
        }
      }
    })
    .state('base.newAlbums', {
      url: '/albums/new',
      views: {
        'main@base': {
          templateUrl: 'templates/albums-add.html',
          controller: 'AlbumsCreateController'
        }
      }
    })
    .state('base.editAlbums', {
      url: '/albums/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/albums-edit.html',
          controller: 'AlbumsEditController'
        }
      }
    })


    .state('base.performer', {
      url: '/performer',
      views: {
        'main@base': {
          templateUrl: 'templates/performer.html',
          controller: 'PerformerListController'
        }
      }
    })
    .state('base.viewPerformer', {
      url: '/performer/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/performer-view.html',
          controller: 'PerformerViewController'
        }
      }
    })
    .state('base.newPerformer', {
      url: '/performer/new',
      views: {
        'main@base': {
          templateUrl: 'templates/performer-add.html',
          controller: 'PerformerCreateController'
        }
      }
    })
    .state('base.editPerformer', {
      url: '/performer/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/performer-edit.html',
          controller: 'PerformerEditController'
        }
      }
    })


    .state('base.genre', {
      url: '/genre',
      views: {
        'main@base': {
          templateUrl: 'templates/genre.html',
          controller: 'GenreListController'
        }
      }
    })
    .state('base.viewGenre', {
      url: '/genre/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/genre-view.html',
          controller: 'GenreViewController'
        }
      }
    })
    .state('base.newGenre', {
      url: '/genre/new',
      views: {
        'main@base': {
          templateUrl: 'templates/genre-add.html',
          controller: 'GenreCreateController'
        }
      }
    })
    .state('base.editGenre', {
      url: '/genre/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/genre-edit.html',
          controller: 'GenreEditController'
        }
      }
    })

    .state('base.profile', {
      url: '/profile/:id/view',
      views: {
        'main@base': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController'
        }
      }
    })
    .state('base.newProfile', {
      url: '/profile/new',
      views: {
        'main@base': {
          templateUrl: 'templates/profile-new.html',
          controller: 'ProfileCreateController'
        }
      }
    })
    .state('base.editProfile', {
      url: '/profile/:id/edit',
      views: {
        'main@base': {
          templateUrl: 'templates/profile-edit.html',
          controller: 'ProfileEditController'
        }
      }
    })
    .state('base.viewAllProfile', {
      url: '/profile/viewAll',
      views: {
        'main@base': {
          templateUrl: 'templates/profile-view-all.html',
          controller: 'ProfileViewAllController'
        }
      }
    })
    .state('acount', {
      url: '/acount',
      views: {
        '@': {
          templateUrl: 'templates/startPage/anonymous.html'
        },
      }
    })
    // .state('account.profile', {
    //   url: '/profile',
    //   views: {
    //     'content@account': {
    //       templateUrl: 'templates/profile.html',
    //       controller: 'profileController'
    //     }
    //   }
    // })
    // .state('account.userAll', {
    //   url: '/userAll',
    //   views: {
    //     'content@account': {
    //       templateUrl: 'templates/view-userAll.html',
    //       controller: 'userAllViewController'
    //     }
    //   }
    // })

    .state('acount.signup', {
      url: '/signup/new',
      views: {
        'content@acount': {
          templateUrl: 'templates/signup.html',
          controller: 'signupController'

        }
      }
    })
    .state('acount.signin', {
      url: '/signin',
      views: {
        'content@acount': {
          templateUrl: 'templates/signin.html',
          controller: 'signinController'

        }
      }
    })








    $urlRouterProvider.otherwise('/acount/signin');
  }]);
