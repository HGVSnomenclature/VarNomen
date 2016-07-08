---
parent: RNA
title: duplication
category: description
---

Format:   **"prefix""position(s)\_duplicated""dup"**,  e.g. r.123\_345dup

**"prefix"**  =  reference sequence used  =  r.<br>
**"position(s)\_duplicated"**  =  position nucleotide or range of nucleotides duplicated  =  123\_345<br>
**"dup"**  =  type of change is a duplication  =  dup

---

### Note

*	**prefix** reference sequences accepted are r. (coding and non-coding RNA).
*	by definition, duplication may only be used when the additional copy is **directly 3'-flanking** of the original copy (a "tandem duplication").
*	when there is no evidence that the extra copy of a sequence detected is in tandem (directly 3'-flanking) the original copy, the change can not be described as a duplication, it should be described as **an insertion** ([_see Insertion_](/recommendations/RNA/variant/insertion/)).
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the duplicated sequence ("positions\_duplicated") which is different when compared to the source, e.g. r.123\_345dup**{234a>g}**
