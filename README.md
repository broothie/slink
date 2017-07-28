[![Slink logo][slink_logo]][slink]
## [Slink][slink] - a [Slack][slack] clone influenced by [AIM][aim] and [Windows 95][windows95]
[Slink][slink] started as a simple attempt at cloning the much-beloved team collaboration tool [Slack][slack], and quickly became an amalgamation of Slack and early-AIM.

## Features
- Web-based chat interface
  - Leveraging of [Rails][ror]' [ActionCable][action_cable] for real-time message updates and channel broadcast management
  - Multiple channels open for application event forwarding
- Unique channel creation
- Private chat with fellow users and [SmarterChild][smarter_child]
  - SmarterChild bot running onboard Rails application using homegrown response generation algorithm
- Nostalgia instillation
  - [Windows 95][windows95] theme
  - [AOL Instant Messenger][aim] based interface and [sound effects][aim_sound_effects]

## Implementation
### Stack
- [Backend](Gemfile)
  - [Ruby 2.3.1][ruby231] on [Rails 5.0.4][rails504]
  - [Postgres 9.6.2][postgres962]
  - [Redis To Go][redis] for local [ActionCable][action_cable] data storage
  - [Cloudinary][cloudinary] for image hosting
- [Frontend](package.json)
  - [React][react]
  - [Redux][redux]
  - [SCSS][scss]
  - [webpack][webpack]
  - [jQuery][jquery] for [ajax][jquery_ajax]
  - [Draggable][jquery_ui_draggable] from [jQuery UI][jquery_ui]

### Technical Challenges
#### Backend Design
Original schema and controller design can be viewed in the [docs][./docs/] folder of this repo. Naturally these designs went through several revisions during development. 

### Future Improvements

## Credits
Arrows graphic by [freepik](http://www.flaticon.com/authors/freepik) from [Flaticon](http://www.flaticon.com) is licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/). Check out the new logo that [I](https://github.com/virginiac32) created on [LogoMaker.com](http://logomakr.com). https://logomakr.com/5kQFua5kQFua

Icons made by [Freepik](http://www.freepik.com) from [Flaticon](http://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/).

I would also like to thank all of my supportive classmates and instructors at [App Academy][app_academy].

And of course, most of all, thank you to my mother, Kathy Booth.

<!-- ### Links ### -->
<!-- Inspirations -->
[slink]: http://www.slink.chat/
[slack]: https://slack.com/
[aim]: https://www.aim.com/
[windows95]: https://en.wikipedia.org/wiki/Windows_95
[smarter_child]: https://en.wikipedia.org/wiki/SmarterChild
[app_academy]: https://www.appacademy.io/

<!-- Data Sources -->
[aim_sound_effects]: http://gauss.ececs.uc.edu/Courses/c653/lectures/AIM/sound/?C=D;O=A

<!-- Technologies -->
[ror]: http://rubyonrails.org/
[ruby231]: https://www.ruby-lang.org/en/news/2016/04/26/ruby-2-3-1-released/
[rails504]: http://weblog.rubyonrails.org/2017/6/19/Rails-5-0-4-has-been-released/
[postgres962]: https://www.postgresql.org/docs/9.6/static/release-9-6-2.html
[redis]: http://redistogo.com/
[cloudinary]: http://cloudinary.com/
[action_cable]: http://edgeguides.rubyonrails.org/action_cable_overview.html

[react]: https://facebook.github.io/react/
[redux]: http://redux.js.org/
[webpack]: https://webpack.github.io/
[scss]: http://sass-lang.com/
[jquery]: https://jquery.com/
[jquery_ajax]: http://api.jquery.com/jquery.ajax/
[jquery_ui]: https://jqueryui.com/
[jquery_ui_draggable]: https://jqueryui.com/draggable/

<!-- Tools -->
[trello]: https://trello.com/invite/b/FZDx2kmG/cb21f57f8484fb9572647d758cd11713/slink

<!-- Images -->
[slink_logo]: http://res.cloudinary.com/dfawecall/image/upload/v1501278100/Screen_Shot_2017-07-28_at_2.39.04_PM_cttfo6.png
