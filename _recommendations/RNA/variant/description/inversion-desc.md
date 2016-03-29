---
parent: RNA
title: inversion
category: description
---

Format:   **"prefix""positions_inverted""inv"**,  e.g. r.123\_345inv

**"prefix"**  =  reference sequence used  =  r.<br>
**"positions_inverted"**  =  range of nucleotides inverted  =  123\_345<br>
**"inv"**  =  type of change is an inversion  =  inv

---

### Note

*	**prefix** reference sequences accepted are r. (coding and non-coding RNA)
*	by definition, the region inverted ("positions\_inverted") contains **more then one nucleotide**. The description r.234inv is therefore not allowed; a one nucleotide inversion should be described as a [_substitution_](/recommendations/RNA/variant/substitution/)
*	since exon splice signals will be inverted, large genomic inversions on the RNA level usually give [_deletion_](/recommendations/RNA/variant/deletion/) or [_deletion-insertion (indel)_](/recommendations/RNA/variant/indel/) variants
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the inverted sequence ("positions\_inverted") which is different when compared to the source, e.g. r.123\_345inv**{233a>g}**
*	inversions are not used on the protein level