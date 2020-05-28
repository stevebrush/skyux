# 3.0.0-rc.7 (2020/03/23)

- Fixed rows to keep their selected state when scrolling out of view. [#29](https://github.com/blackbaud/skyux-ag-grid/pull/29)

# 3.0.0-rc.6 (2020/03/18)

- Fixed the keyboard navigation so that users can press Enter to save a cell and switch focus to the next cell in the column. [#20](https://github.com/blackbaud/skyux-ag-grid/pull/20)
- Fixed the date cell type to support valid date strings, improved demos with dynamic row height, and infinite scroll. [#22](https://github.com/blackbaud/skyux-ag-grid/pull/22)

# 3.0.0-rc.5 (2019/11/04)

- Added the cell editor text component to support editing text cells. [#17](https://github.com/blackbaud/skyux-ag-grid/pull/17)
- Fixed the cell border highlighting so it appears when cells are focused but not being edited. [#17](https://github.com/blackbaud/skyux-ag-grid/pull/17)
- Fixed the row height to account for the row border. [#17](https://github.com/blackbaud/skyux-ag-grid/pull/17)

# 3.0.0-rc.4 (2019/10/21)

- Added `getEditableGridOptions()` to the ag-Grid service, added a demo using a modal, and fixed the number editor width. [#15](https://github.com/blackbaud/skyux-ag-grid/pull/15)

# 3.0.0-rc.3 (2019/10/16)

- Removed duplicate type declarations, exported types, and added a default SKY UX autocomplete sort comparator. [#13](https://github.com/blackbaud/skyux-ag-grid/pull/13)

# 3.0.0-rc.2 (2019/10/11)

- Fixed border, font, and hover styling issues. [#11](https://github.com/blackbaud/skyux-ag-grid/pull/11)
- Added an autocomplete `valueFormatter` function. [#11](https://github.com/blackbaud/skyux-ag-grid/pull/11)
- Added a namespace and types for passing SKY UX component properties to cell editors. [#11](https://github.com/blackbaud/skyux-ag-grid/pull/11)

# 3.0.0-rc.1 (2019/10/08)

- Added a custom build step to export `ag-grid-styles.scss` and fixed minor styling issues. [#9](https://github.com/blackbaud/skyux-ag-grid/pull/9)

# 3.0.0-rc.0 (2019/10/04)

- Added the ag-Grid service and a stylesheet to create grids with default SKY UX styling and `gridOptions`. [#2](https://github.com/blackbaud/skyux-ag-grid/pull/2)
- Added the cell editor number component to support editing numeric cells. [#2](https://github.com/blackbaud/skyux-ag-grid/pull/2)
- Added the cell editor datepicker component to support editing date cells. [#2](https://github.com/blackbaud/skyux-ag-grid/pull/2)
- Added the cell renderer row selector component to support selecting multiple rows. [#2](https://github.com/blackbaud/skyux-ag-grid/pull/2)
- Added the cell editor autocomplete component to support autocomplete options when editing cells. [#7](https://github.com/blackbaud/skyux-ag-grid/pull/7)