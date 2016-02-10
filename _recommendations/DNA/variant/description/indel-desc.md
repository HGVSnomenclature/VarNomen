---
parent: DNA
title: deletion/ insertion (indel)
category: description
---

Format:   **"prefix""nucleotides_deleted""delins""nucleotides_inserted"**,  e.g. g.123_127delinsAG

**"prefix"**  =  reference sequence used  =  g.<br>
**"nucleotides_deleted"**  =  the range of nucleotides deleted  =  123_345<br>
**"delins"**  =  the type of change is a deletion-insertion (indel)  =  delins<br>
**"nucleotides_inserted"**  =  the nucleotides inserted  =  AG<br>
 
 
**NOTE:**

*	prefix</b> reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	by definition, when **one** nucleotide is replaced by **one** other nucleotide the change is a [_substitution_](/recommendations/DNA/variant/substitution/).
*	under discussion ([_see Open Issues_](/recommendations/open-issues#imperfectcopy))
	:	{ } (curly braces) can be used to list any change in the region duplicated ("sequence_duplicated") which is different when compared to the source, e.g.  g.123_345delins1101_1222<b><i>{1167A>G}</i></b>.
