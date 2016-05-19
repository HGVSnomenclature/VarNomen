---
parent: Protein
title: deletion/ insertion (indel)
category: description
---

Format:   **"prefix""amino_acid(s)+position(s)_deleted""delins""inserted_sequence"**,  e.g. p.Arg123\_Lys127delinsSerAsp

**"prefix"**  =  reference sequence used  =  g.<br>
**"amino_acid(s)+position(s)_deleted"**  =  position nucleotide or range of nucleotides deleted  =  Arg123\_Lys127<br>
**"delins"**  =  type of change is a deletion-insertion (indel)  =  delins<br>
**"inserted_sequence"**  =  description inserted sequence  =  SerAsp<br>

---

### Note

*	**prefix** reference sequence accepted is "p." (protein).
*	predicted consequences, i.e. without experimental evidence (no RNA or protein analysed), should be given in parentheses, e.g. p.(Arg123\_Lys127delinsSerAsp).
*	by definition, when **one** amino acid is replaced by **one** other amino acid the change is a [_substitution_](/recommendations/protein/variant/substitution/).
*	**frame shifting** deletion/insertion variants are a special type of protein variants described as a frame shift ([_see Frame shift_](/recommendations/protein/variant/frameshift/))
*	for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the inserted sequence ("inserted\_sequence") which is different when compared to the source, e.g.   p.Lys23\_Leu24insArg100\_Asp120**{Gly111Glu}**
