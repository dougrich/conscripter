# Changelog

All changes will be documented here, with releases being tagged + linked.

## Unreleased

- Support `scale` transform option
- Support quadratic curves in paths

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