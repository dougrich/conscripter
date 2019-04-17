# Changelog

All changes will be documented here, with releases being tagged + linked.

## 0.3.1

- #11 - Switched to blob downloads to bypass URL limits on Firefox

## 0.3.0

- #12 - local copy stashed in localstorage, updated privacy policy
- #10 - advance width is preserved when uploading multiple
- #11 - Added binary encoding, reducing the download size
- #11 - Added snapping, reducing the download size another 20%
- #13 - Added offline tool for extracting + merging fonts

## 0.2.0

- Support `scale` transform option
- Support quadratic curves in paths
- Support for arcs in paths
- Support `rotate` transform option
- Fixed transformation apply order
- #3 - BETA - Vertical preview
- Added syllabry1 tutorial
- #7 - Added explicit diacritic support
- #6 - Removed preview text + lines in the grid

## 0.1.1

- #2 - Form editor now correctly pushes other row entries down the grid
- #4 - Right to left support in the preview
- #8 - Dragging, changing the fontname + others now correctly updates the preview
- #1 - S curves, both standing and from existing curves, now correctly parse

## 0.1.0

Initial release.

- support for single substitution
- support for multi substitution
- support for SVG parsing of:
  - absolute lines
  - some relative lines
  - curves (via interpolating the curve)
  - circles (via interpolating the circle)
  - rectangles
- support for exporting custom fonts as `.otf`
- basic tutorial for abugida2