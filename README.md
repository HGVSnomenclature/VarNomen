# This repo is now archived. Content was converted to markdown and mkdocs in the [HGVSnomenclature/hgvs-nomenclature](https://github.com/HGVSnomenclature/hgvs-nomenclature) repo.

---

## URL

http://hgvsnomenclature.github.io/VarNomen/
http://varnomen.hgvs.org/

## To run

1. Install [jekyll](http://jekyllrb.com/docs/installation/)
2. `gem install --user-install jekyll-redirect-from`
    - On Ubuntu, you'll need to `apt install ruby-dev`
3. Run command `jekyll serve --baseurl "" --watch`
4. Browser URL: localhost:4000

## config.yml

Contains important global site attributes

|Attribute          |Description
|---                |---
|title              |Title of every page. i.e. `<title>`
|email              |Email for every contact us section
|description        |Description of the site (shown in the jumbotron on the main page)
|baseurl            |Root folder, i.e. /VarNomen
|url                |Base hostname and protocol of site
|version            |Current version number of the nomenclature
|collections        |File directories that contain pages for Jekyll to markup
|variant-priority   |Used when generating order of variants in site structure and display <br> Case-sensitive - use lowercase

## All pages

### Front matter

last-modified: `date`
Date the page was last modifed. Marked up as "Last modifed: `date`"


## Recommendation pages

### Folder Structure

|Folder                                                                                 |Contents
|---                                                                                    |---
|/_recommendations                                                                      |Root
|&nbsp;&nbsp;&nbsp;&nbsp;- /`sequence`                                                  |DNA/RNA/protein
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /variant                             |Holds index page for all recommendations. <br> Definition and Discussion go here
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /description |Description goes here
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /example     |Example goes here

###Each recommendation page contains
|Category                   |Notes
|---                        |---
|Sequence (DNA/RNA/protein) |Maintained in `root/sequence/index.html` <br> Pages must have `layout: recommendation`, `parent: "sequence"` and `title: "variant"` (in lowercose).
|Definition                 |Maintained in `root/sequence/variant/sequence.md` as YAML.
|Description                |Maintained in `root/sequence/variant/description/variant-desc.md` <br> Pages must have `parent: "sequence"`, `title: "variant"` (in lowercose) and `category: "description"`YAML attributes.
|Examples                   |Maintained in `root/sequence/variant/example/variant-eg.md` <br> Pages must have `parent: "sequence"`, `title: "variant"` (in lowercose) and `category: "example"`YAML attributes.
|Discussion                 |Maintained in `root/sequence/variant/sequence.md` as YAML.

>NOTE: variant YAML attributes must be listed in _config.yml under the "variant-priority" list (case-sensitive).

## Background Material pages

Root: /_bg-material/

All files maintained as markdown files
