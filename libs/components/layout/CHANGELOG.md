# 3.8.0 (2020-02-28)

- Added the back to top component. [#84](https://github.com/blackbaud/skyux-layout/pull/84)

# 3.7.0 (2020-02-12)

- Added the dock service which appends components to the bottom of the page. [#67](https://github.com/blackbaud/skyux-layout/pull/67)
- Fixed an Angular compiler template checking error on the text expand repeater component's HTML template. [#75](https://github.com/blackbaud/skyux-layout/pull/75)

# 3.6.2 (2020-02-10)

- Fixed the inline delete component to watch for focus events after they fully display. [#73](https://github.com/blackbaud/skyux-layout/pull/73)

# 3.6.1 (2020-02-07)

- Fixed the inline delete component to allow focus to be placed on the parent element. [#71](https://github.com/blackbaud/skyux-layout/pull/71)

# 3.6.0 (2020-02-03)

- Added the ability to disable margins and set the column gutter sizes for the fluid grid component. [#61](https://github.com/blackbaud/skyux-layout/pull/61)
- Fixed the action button component's focus outline to no longer extend outside its container. [#64](https://github.com/blackbaud/skyux-layout/pull/64)

# 3.5.0 (2020-01-27)

- Added the inline delete component. [#56](https://github.com/blackbaud/skyux-layout/pull/56)
- Updated the card component so that it can display the inline delete component.[#56](https://github.com/blackbaud/skyux-layout/pull/56)

# 3.4.0 (2020-01-17)

- Added `sky-page` component to transition pages to a white background. [#57](https://github.com/blackbaud/skyux-layout/pull/57)

# 3.3.1 (2019-11-21)

- Fixed the text expand and text expand repeater components' DOM adapter services to use the new `Renderer2` utility instead of the deprecated `Renderer` utility. [#53](https://github.com/blackbaud/skyux-layout/pull/53)

# 3.3.0 (2019-10-16)

- Added the ability to provide custom item templates for the text expand repeater component. [#48](https://github.com/blackbaud/skyux-layout/pull/48) (Thanks [@Blackbaud-CoreyArcher](https://github.com/Blackbaud-CoreyArcher)!)

# 3.2.2 (2019-07-19)

- Fixed the toolbar section component to properly display items which do not overflow onto the next line. [#42](https://github.com/blackbaud/skyux-layout/pull/42)

# 3.2.1 (2019-05-29)

- Fixed the text expand component to correct the spacing before the "See more" and "See less" buttons. [#38](https://github.com/blackbaud/skyux-layout/pull/38)
- Fixed the text expand repeater component to not place focus on the whitespace around the "See more" and "See less" buttons. [#38](https://github.com/blackbaud/skyux-layout/pull/38)

# 3.2.0 (2019-05-17)

- Added the ability to trigger responsive styles based on a parent component. [#32](https://github.com/blackbaud/skyux-layout/pull/32)

# 3.1.1 (2019-04-18)

- Fixed toolbar component styles to prevent a collapsed search bar. [#30](https://github.com/blackbaud/skyux-layout/pull/30)

# 3.1.0 (2019-04-09)

- Added the ability to place items on the right side of the toolbar component. [#18](https://github.com/blackbaud/skyux-layout/pull/18)
- Fixed toolbar item components to wrap when they overflow their toolbar component. [#26](https://github.com/blackbaud/skyux-layout/pull/26)

# 3.0.1 (2019-03-20)

- Fixed the page summary component so that content always fills the parent container. [#22](https://github.com/blackbaud/skyux-layout/pull/22)
- Fixed action button components to wrap when they overflow their action button container component. [#23](https://github.com/blackbaud/skyux-layout/pull/23)
- Fixed visual styles for the action button container component. [#23](https://github.com/blackbaud/skyux-layout/pull/23)

# 3.0.0 (2019-01-11)

- Major version release.

# 3.0.0-rc.5 (2019-01-09)

- Fixed the card component to prevent infinite loops when users select or deselect cards. [#12](https://github.com/blackbaud/skyux-layout/pull/12)

# 3.0.0-rc.4 (2018-11-19)

- Updated peer dependencies to support Angular versions greater than `4.3.6`. [#10](https://github.com/blackbaud/skyux-layout/pull/10)

# 3.0.0-rc.3 (2018-11-08)

- Added support for `@skyux/i18n@3.3.0`, which addresses some internationalization issues. [#8](https://github.com/blackbaud/skyux-layout/pull/8)

# 3.0.0-rc.2 (2018-11-01)

- Fixed the page summary component to no longer throw an error when toggling the key info component. [#4](https://github.com/blackbaud/skyux-layout/pull/4)

# 3.0.0-rc.1 (2018-10-18)

- Added support for `@skyux/i18n@3.2.0`. [#3](https://github.com/blackbaud/skyux-layout/pull/3)

# 3.0.0-rc.0 (2018-10-16)

- Initial release candidate.

# 3.0.0-alpha.1 (2018-10-11)

- Added the card, definition list, fluid grid, page summary, text expand, and text expand repeater components. [#2](https://github.com/blackbaud/skyux-layout/pull/2)

# 3.0.0-alpha.0 (2018-10-08)

- Initial alpha release.