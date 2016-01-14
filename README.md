##URL
http://hgvsnomenclature.github.io/VarNomen/

##To run:

1. Install [jekyll](http://jekyllrb.com/docs/installation/)
2. Start cmd with Ruby and navigate to folder dir
3. Run command `jekyll serve --baseurl "" --watch`
4. Browser URL: localhost:4000

##Recommendation pages:
###Heirarchy:
|Group (DNA/RNA/protein)    |`group`.html
|---                        |---
|Definition                 |Maintained in `group`.html as YAML
|Recommendations            |Maintained in /`group`/variant/ <br> Individual variant pages must have a "parent" attribute.
|Examples
|Discussion                 |Maintained in `group`.html as YAML
|Educational Materials      |
