# Multiphonic website

Static site. Plain HTML, no build step, no dependencies except Google Fonts.

## Folder structure

Every file below sits at the SAME level, the repository root. The only
subfolder is `assets`. Upload the CONTENTS of this folder, not the folder
itself, so that `index.html` is at the top level of the repository.

```
index.html                  Home
about.html                  About
work.html                   Selected work index
contact.html                Contact
work-green-room.html        Case study, The Green Room
work-state-library.html     Case study, State Library of New South Wales
work-vivid-sydney.html      Case study, Vivid Sydney
work-cricketcon.html        Case study, CricketCon
favicon.svg                 The Multiphonic M
reveal.js                   Optional scroll reveal, pages work fully without it
.nojekyll                   Tells GitHub Pages to serve files as they are
README.md                   This file, not published
assets/
  jasper.png                Portrait, source file
  brid.png                  Portrait, source file
```

## Images

The two portraits are embedded directly inside `about.html` and
`contact.html`, so they cannot go missing in an upload and need no separate
files to load. The copies in `assets` are the source images, kept for future
editing. If you delete `assets`, the site still displays correctly.

The favicon is linked in the head of every page in two ways: embedded, and as
`./favicon.svg` sitting beside the HTML files. Keep `favicon.svg` at the
root next to `index.html`.

## Relative paths

All internal links are relative and flat, for example `./about.html` and
`./work-green-room.html`. Nothing refers to a parent folder or an absolute
path, so the site works at a domain root and in a subfolder such as
`username.github.io/multiphonic` without any change.

## Publishing to GitHub Pages

1. Create a new repository on GitHub. If you want the site at
   `username.github.io`, name it exactly that. Otherwise any name works and the
   site will live at `username.github.io/repo-name`.
2. Upload the contents of this folder to the repository root, so `index.html`
   sits at the top level, not inside a subfolder.
3. In the repository, go to Settings, then Pages.
4. Under "Build and deployment", set Source to "Deploy from a branch", branch
   `main`, folder `/ (root)`. Save.
5. Wait a minute, then reload the Pages settings screen. The live URL appears at
   the top.

## Custom domain, multiphonic.com.au

1. In Settings, then Pages, enter the domain under "Custom domain" and save.
   This creates a `CNAME` file in the repository.
2. At your domain registrar, add these DNS records for the apex domain:

   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   ```

   And for the www subdomain:

   ```
   CNAME  www   username.github.io.
   ```

3. Back in Settings, then Pages, tick "Enforce HTTPS" once the certificate has
   been issued. This can take up to an hour.

## Brand font

Display type is set in Neue Einstellung with Jost as the fallback, loaded from
Google Fonts. Jost is what renders today. To use the licensed brand font:

1. Put `NeueEinstellung-Regular.woff2` in a `fonts` folder at the repository
   root.
2. In each HTML file, find the commented `@font-face` block near the top and
   uncomment it.

Every font stack already lists Neue Einstellung first, so no other change is
needed.

## Editing copy

The pages are plain HTML with inline styles. Text can be edited directly in
GitHub's web editor: open a file, click the pencil icon, change the words,
commit. The site rebuilds within a minute.

## House rules for future edits

- No em dashes anywhere, in copy or captions. Commas, colons or full stops.
- No dollar figures on The Green Room. "Strong revenue", never a number.
- CricketCon is pre-launch: present tense, scope only, no claimed outcomes, and
  no government body, program or sponsor named.
- Palette is monochrome ink on warm paper. No accent colour.
