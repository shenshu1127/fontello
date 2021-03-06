4.0.0 / ...
------------------

* Permalinks for search results
* Focus on search field after load
* Added count of selected/searched glyphs for each font
* Added message, when nothing found
* Search field now can be cleared by escape
* IE8 regressions fixes
* Updated to new (wire-based) nodeca architectire


3.0.0 / 2013-04-01
------------------

* Updated Entypo to 2.0
* Updated Font Awesome to 3.0
* Added Meteocons font
* Added Fontelico font
* Added Elusive font
* Tuned fonts baseline
* Added glyphs tooltips on selector panel
* Added delete buttons on codes editor and names editor
* Improved generated demo (show glyph codes now)
* Added css with base64 woff & ttf fonts, to workaround CORS issues in FF & IE9,
  when you don't wish to set `Access-Control-Allow-Origin` server headers.
* Removed default opacity
* Rearranged toolbar controls, to show `search` better
* Added random number to generated CSS font paths, to avoid cache issues (#127)
* Font collapse state now remembered
* Added `font-variant` & `text-transforms` styles reset (#135)
* New modularized architecture (all as `blocks` + knockout.js on client side)


2.0.4 / 2012-11-06
------------------

* Moved font info from popup to main page, to better credit authors
* Updated brandico with couple of icons
* Minor fixes


2.0.3 / 2012-09-07
------------------

* Preview tab content now resizeable too
* You can edit glyph names
* Codes edit improved
* Fixed EOT fonts generation for customised font names
* Added switchable '3D' shadow effect for icons
* Fixed work with Opera 12
* Tweaked styles again :)
* Improved work with proxies (switched back data exchange from realtime to ajax)
* Optimized page loading speed - merged all embedded fonts into single file
* Synked libraries codebase with nodeca mainstream


2.0.2 / 2012-06-27
------------------

* Added configuration import/export
* Improved CSS generation
  - use escaped chars when possible (for codes <= 0xFFFF)
  - add encoding (first line) only when needed
  - ie7 support
  - plains css with codes only, for automated asset build systems
* Added README & LICENSE files to generated webfonts
* Demo data bundled to single file now
* Minor UI tweaks (inputs, buttons)
* Fixed server stability issues (increased open file descriptors limit)
* Migrated to node.js v0.8


2.0.1 / 2012-06-03
------------------

* Reworked interface logic & look
* Added search
* Added multiselect (click+drag)
* Added field to select file name
* Autosave for all changes
* Number of small fixes
* Internal refactoring (continue switching to new nodeca libraries)
* Returned back WebSymbols font
* Added Modern Pictograms font
* Added Typicons font


2.0.0 / 2012-05-08
------------------

* Uses new [Font Builder](https://github.com/fontello/font-builder) system
  - All your files in single archive - no needs to use fontsquirrel generator.
  - Better glyphs mapping: follow Unicode 6.1 standard where possible.
  - Embedded fonts realligned to middleline of small letters.
  - Integrated ttfautohint, to significantly improve hinting.
* Added `Font Awesome`
* Added `Brandico`
* Removed `WebSymbols`
* Editable glyph codes.
* Auto-generated CSS for bootstrap.
* Nice preview tab & auto-generated demo-page.
* Using @fonf-face instead of cufon to display glyths - mush better quality.
* Removed external font loading, until we do something better.


0.0.1 / 2012-02-23
------------------

* First release
