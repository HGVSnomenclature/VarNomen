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
*	"positions\_duplicated" should contain **two different positions**, e.g. 123\_126 not 123\_123.
*	the "positions\_duplicated" should be listed from **5' to 3'**, e.g. 123\_126 not 126\_123.
*	by definition, duplication may only be used when the additional copy is _**directly 3'-flanking**_ of the original copy (a "tandem duplication").
	*	when there is no evidence that the extra copy of a sequence detected is in tandem (directly 3'-flanking the original copy), the change can not be described as a duplication, it should be described as **an insertion** (see [_Insertion_](/recommendations/DNA/variant/insertion/) and [_proposal SVD-WG003_](/bg-material/consultation/svd-wg003/)).
	*	**inverted duplications** are described as insertion (g.234\_235ins123\_234inv), not as a duplication ([_see Inversion_](/recommendations/DNA/variant/inversion))
*	when more then one additional copies are inserted directly 3' of the original copy the change is indicated using the format for [_Repeated sequences_](/recommendations/DNA/variant/repeated/), like [3] (triplication), [4] (quadruplication), etc.
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
	*	**exception**
	:	deletions/duplications around exon/intron and intron/exon borders when identical nucleotides flank these borders ([_see Question below_](/recommendations/DNA/variant/duplication/#123dup))
		:	**c.546+1dup** describes a duplication of a "G" at the exon/intron border ..CAGgtg.. (positions c.546/c.546+1). When RNA analysis shows a G duplication (r.456dup), so no effect on splicing, the change is described as **c.546dup**.
		:	_**NOTE**_:	when in the above example the next exon starts with GGT.. the duplication is still described as c.546dup (not c.548dup) but based on a coding RNA sequence as r.548dup.
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the duplicated sequence ("positions\_duplicated") which is different when compared to the source, e.g. g.123\_345dup**{234A>G}**
