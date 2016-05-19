---
parent: RNA
title: deletion
category: description
---

Format:  **"prefix""position(s)_deleted""del"**,  e.g. r.123\_127del

**"prefix"**  =  reference sequence used  =  r.<br>
**"position(s)\_deleted"**  =  position nucleotide or range of nucleotides deleted  =  123\_127<br>
**"del"**  =  type of change is a deletion =  del

---

### Note

*	**prefix** reference sequences accepted are r. (coding and non-coding RNA).
*	the "position(s)\_deleted" should contain **two different positions**, e.g. 123\_126 but not 123\_123.
*	the "position(s)\_deleted" should be listed from **5' to 3'**, e.g. 123\_126 but not 126\_123.
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
