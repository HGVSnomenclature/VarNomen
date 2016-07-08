---
parent: RNA
title: deletion/ insertion (indel)
category: description
---

Format:   **"prefix""position(s)_deleted""delins""inserted_sequence"**,  e.g. g.123\_127delinsAG

**"prefix"**  =  reference sequence used  =  g.<br>
**"position(s)_deleted"**  =  position nucleotide or range of nucleotides deleted  =  123\_127<br>
**"delins"**  =  type of change is a deletion-insertion (indel)  =  delins<br>
**"inserted_sequence"**  =  description inserted sequence  =  AG<br>

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	by definition, when **one** nucleotide is replaced by **one** other nucleotide the change is a [_substitution_](/recommendations/RNA/variant/substitution/).
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the inserted sequence ("inserted\_sequence") which is different when compared to the source, e.g.  g.123\_345delins1101\_1222**{1167A>G}**