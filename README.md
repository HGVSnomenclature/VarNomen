##URL
http://hgvsnomenclature.github.io/VarNomen/

##To run:

1. Install [jekyll](http://jekyllrb.com/docs/installation/)
2. Start cmd with Ruby and navigate to folder dir
3. Run command `jekyll serve --baseurl "" --watch`
4. Browser URL: localhost:4000

##Recommendation pages
###Folder Structure
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

##Background Material pages
Root: /_bg-material/

All files maintained as markdown files