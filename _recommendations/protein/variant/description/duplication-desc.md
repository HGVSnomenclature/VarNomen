---
parent: Protein
title: duplication
category: description
---

Format:  **"prefix""amino_acid(s)+position(s)_deleted""dup"**,  e.g. p.Cys76\_Glu79dup

**"prefix"**  =  reference sequence used  =  p.<br>
**"amino_acid(s)+position(s)_duplicated"**  =  amino acid with position or range (first amino acid with position to last amino acid with position) duplicated  =  Cys76\_Glu79<br>
**"dup"**  =  type of change is a duplication =  dup

---

### Note

*	**prefix** reference sequences accepted are p. (protein).
*	the "amino\_acids+positions\_duplicated" should contain **two different** positions, e.g. Cys76\_Glu79, not Cys76\_Cys76.
*	the "positions\_duplicated" should be listed from **5' to 3'**, e.g. Cys76\_Glu79, not Glu79\_Cys76.
*	by definition, duplication may only be used when the additional copy is **directly 3'-flanking** the original copy (a "tandem duplication").
*	when there is no evidence that the extra copy of a sequence detected is in tandem (directly 3'-flanking) the original copy, the change can not be described as a duplication, it should be described as **an insertion** ([_see Insertion_](/recommendations/protein/variant/insertion/)).
*	for all descriptions the **most C-terminal position** possible is arbitrarily assigned to have been changed (**3'rule**)
*	variants should be described on the protein level and not incorporate knowledge regarding the change at the DNA level
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the duplicated sequence ("positions\_duplicated") which is different when compared to the source, e.g. p.Cys76\_Glu94dup**{Ala88Glu}**

