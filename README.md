##URL
http://hgvsnomenclature.github.io/VarNomen/

##To run:

1. Install [jekyll](http://jekyllrb.com/docs/installation/)
2. Start cmd with Ruby and navigate to folder dir
3. Run command `jekyll serve --baseurl "" --watch`
4. Browser URL: localhost:4000

##Recommendation pages:
###Hierarchy:
Root: /_recommendations/

|Category                   |Notes
|---                        |---
|Sequence (DNA/RNA/protein) |Maintained in `root/sequence/index.html` <br> Pages must have `layout: recommendation`, `parent: "sequence"` and `title: "variant"` (in lowercose).
|Definition                 |Maintained in `root/sequence/variant/sequence.md` as YAML.
|Description                |Maintained in `root/sequence/variant/description/variant-desc.md` <br> Pages must have `parent: "sequence"`, `title: "variant"` (in lowercose) and `category: "description"`YAML attributes.
|Examples                   |Maintained in `root/sequence/variant/example/variant-eg.md` <br> Pages must have `parent: "sequence"`, `title: "variant"` (in lowercose) and `category: "example"`YAML attributes.
|Discussion                 |Maintained in `root/sequence/variant/sequence.md` as YAML.
|Educational Materials      |

>NOTE: variant YAML attributes must be listed in _config.yml under the "variant-priority" list (case-sensitive).