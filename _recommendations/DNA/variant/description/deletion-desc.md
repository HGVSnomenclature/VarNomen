---
parent: DNA
title: deletion
category: description
---

Format:  **"prefix""position(s)_deleted""del"**,  e.g. g.123\_127del

**"prefix"**  =  reference sequence used  =  g.<br>
**"position(s)\_deleted"**  =  position nucleotide or range of nucleotides deleted  =  123\_127<br>
**"del"**  =  type of change is a deletion =  del

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	"positions\_deleted" should contain **two different positions**, e.g. 123\_126 not 123\_123.
*	the "position(s)\_deleted" should be listed from **5' to 3'**, e.g. 123\_126 not 126\_123.
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
	*	**exception**
	:	deletions/duplications around exon/intron and intron/exon borders when identical nucleotides flank these borders ([_see Question below_](/recommendations/DNA/variant/deletion/#123del))
		:	**c.546+1del** describes a deletion of a "G" at the exon/intron border ..CAGgtg.. (positions c.546/c.546+1). When RNA analysis shows a G deletion (r.456del), so no effect on splicing, the change is described as **c.546del**.
		:	_**NOTE**_:	when in the above example the next exon starts with GGT.. the deletion is still described as c.546del (not c.548del) but based on a coding RNA sequence as r.548del.

