## SVG Creation

SVGs uploaded will only use the flat, solid fill portion of the image. Strokes and gradient fills are not supported.

The viewbox or document width and height will be treated as the 'main area' of the glyph. You can leave these bounds - this is useful to place diacritics with letters, as seen in the Abugida example below.

## Font Usage

After downloading the font, you should be able to use it in most advanced word editing programs. WordPad or Notepad will not be able to use it.

Inkscape, Adobe Illustrator, Adobe Photoshop, Adobe InDesign, and Microsoft Publisher should all support it out of the box.

For Microsoft Word, you will need to manually turn on `calt` support. This is done by opening the fonts menu and checking the `calt` checkbox.

## Tutorials

### Use Case: Abugida

Abugidas are tricky to do with a simple font tool, so let's look at how to accomplish this. The files (including the saved .json) are located in `tests/abugida2`.

Abugida2's orthography is really simple. It has the vowels `a`, `eu`, and `o`, represented by an accent mark on the consonant preceeding the vowel. It has five consonants: `ph`, `r`, `t`, `d`, and `k`.

__First__, we need to create a consistent set of glyphs. To do this, create a `base.svg` or similar which contains the outline and rough positioning for where the elements of the orthography will go.

For each consonant, draw a path. Once the path is completed, use `Stroke to Path` or similar. In Inkscape this is in `Object > Stroke to Path`. This is important because we only use the _fill_ portion of the SVG to draw the glyph.

Save each consonant into their own file, keeping a consistent positioning for each.

For each vowel, we need to position the accent mark _before_ the actual glyph. This is done simply by moving the entire glyph to the left of the document. `a`, `eu`, and `o` are good examples to see what this means.

__Second__, we need to add these into Conscripter.

Navigate to the app. Add each glyph - for the consonants, use a consistent advance width. For vowels, use an advance width of 0. This means that the cursor effectively stays on the same location.

Type in the preview window to make sure positioning is correct and how you want it to be displayed. When making adjustments, you can upload new versions.

__Finally__, once completed, make sure to __name your font__, and then hit `save` to download a copy of everything you've done. This is needed if you want to make changes later. Hit `download` to download the actual `.otf` onto your computer.

Install the font on your computer (this is operating system dependent, but most will give you an option to install if you double click to run the `.otf`). Close all your editing programs, and re-open them - you should see your font in the list of choices available.

