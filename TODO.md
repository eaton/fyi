# EatonFYI TODOs

## Blockers

- [ ] Decide between markdown files and a wad of database, you knob
- [ ] Decide between good ol njk files and webc hotness
- [ ] Just perhaps content

## Util functions

- [ ] Typography post-processing [Typeset](https://github.com/davidmerfield/Typeset), perhaps?
- [ ] Remote image mapping/caching/transforming (prolly 11ty-image)

## WebC Stuff and/or Web Components

- [ ] Tracery component (tag content is tracery grammar, component output is rendered text)
- [ ] Vega/VegaLite charts
- [ ] Mermaid.js diagrams

## Site Structure

- [ ] Tweet archive: include it or store it separately? Possibly use `tweets.eaton.fyi` for the full archive and only include individual threads in the site proper.
- [ ] Map individual archival blogs to `YYYY.eaton.fyi`. (What to do about other side projects?)

---

## Notes to self

Consider storing raw content (tweets, old links, etc) as .sqlite databases in the _data directory.Use an npm script ala `generate` or `prepublish` to generate markdown files from 'approved for publication' content in the database, build the search index, etc.

Keep image and mp4 files in the git repository for now, but squint at them suspiciously.

Consider a `sync` npm script that generates a unique hash for each markdown file if one isn't specified, and imports files into the database if they don't already exist. That way, writing/topic/etc stats stay in sync.

Consider using a sqlite database with fixed columns for standard page properties, a JSON column for front matter properties, and a big ol text column for the page body. (Or, if we're feeling daring, the eaton.tools postgres instance). This could get ugly for code and markup heavy templates but it's probably the least bad option.
