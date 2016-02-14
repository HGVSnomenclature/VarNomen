---
parent: DNA
title: duplication
category: description
---

Format:   **"prefix""position(s)_duplicated""dup"**,  e.g. g.123_345dup

**"prefix"**  =  reference sequence used  =  g.<br>
**"position(s)_duplicated"**  =  position nucleotide or range of nucleotides duplicated  =  123_345<br>
**"dup"**  =  type of change is a duplication  =  dup

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	by definition, duplication may only be used when the additional copy is _**directly 3'-flanking**_ of the original copy (a "tandem duplication"). 
*	when there is no evidence that the extra copy of a sequence detected is in tandem (directly 3'-flanking) the original copy, the change can not be described as a duplication, it should be described as **an insertion**. 
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the duplicated sequence ("position(s)_duplicated") which is different when compared to the source, e.g. g.123_345dup**{234A>G}**
