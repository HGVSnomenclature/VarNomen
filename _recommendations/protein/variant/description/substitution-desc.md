---
parent: Protein
title: substitution
category: description
---

Format:   **"prefix""amino_acid""position""new_amino_acid"**,  e.g. p.(Arg54Ser)

**"prefix"**  =  reference sequence used  =  p.<br>
**"amino_acid"**  =  reference amino acid  =  Arg<br>
**"position"**  =  position amino acid subtituted  =  54<br>
**"new_amino_acid"**  =  new amino acid  =  Ser

---

### Note

*	**prefix** reference sequence accepted is "p." (protein).
*	predicted consequences, i.e. without experimental evidence (no RNA or protein analysed), should be given in parentheses, e.g. p.(Arg727Ser).
*	changes involving two or more consecutive amino acids are described as deletion/insertions (indels) ([_see Deletion/insertion (indel)_](/recommendations/protein/variant/indel/)).
*	a **nonsense** variant, a variant changing an amino acid to a translation termination (stop) codon, is described as a **substitution**.
	_**NOTE:**_ a nonsense variant is not described as a [Deletion](/recommendations/protein/variant/deletion/) of the C-terminal end of the protein (e.g. p.Trp26\_Arg1623del)
*	amino acids that have been tested and found **not changed** are described as p.Cys123= ([_see SVD-WG001 (no change)_](http://www.hgvs.org/mutnomen/accepted001.html)).<br>
_**NOTE**_: the underlying DNA change **must** be given in addition and in this case is either c.456C>T or c.456C=<br>
_**NOTE**_: such changes are **silent** protein changes
*	the description p.Arg76\_Cys77delinsSerTrp is preferred over p.[Arg76Ser;Cys77Trp].<br> 
_**NOTE:**_ by definition this change can not be described as a substitution (like p.Arg76\_Cys77SerTrp)<br>
*	it is not correct to describe "**polymorphisms**" as p.76Ser/Arg ([_see Discussions_](/recommendations/protein/variant/substitution/#polymorphism)).
