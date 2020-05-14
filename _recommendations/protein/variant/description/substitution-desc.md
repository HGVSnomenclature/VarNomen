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

*	all variants **should be** described at the DNA level, descriptions at the RNA and/or protein level may be given in addition
*	**prefix** reference sequence accepted is "p." (protein)
*	predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Arg727Ser)
*	changes involving two or more consecutive amino acids are described as a deletion/insertion variant (delins) ([_see Deletion/insertion (delins)_](/recommendations/protein/variant/delins/))
	*	_**NOTE**_:	this does not mean that at the DNA level the variant is described as a "delins" variant as well; on DNA level other rules may apply
*	a **nonsense** variant, a variant changing an amino acid to a translation termination (stop) codon, is described as a **substitution**
	*	_**NOTE**_:	a nonsense variant is not described as a [_Deletion_](/recommendations/protein/variant/deletion/) of the C-terminal end of the protein (e.g. p.Trp26\_Arg1623del)
*	a **no-stop** variant, a variant changing the translation termination codon into an amino acid codon, is described as a **extension** ([_Extension_](/recommendations/protein/variant/extension/))
*	amino acids that have been tested and found **not changed** are described as p.Cys123= ([_see SVD-WG001 (no change)_](http://www.hgvs.org/mutnomen/accepted001.html))
	*	_**NOTE**_:	the underlying DNA change **must** be given in addition and in this case is either c.456C>T or c.456C=
	*	_**NOTE**_:	such changes are **silent** protein changes
*	the description p.Arg76\_Cys77delinsSerTrp is preferred over p.[Arg76Ser;Cys77Trp]
	*	_**NOTE:**_	by definition this change can not be described as a substitution (like p.Arg76\_Cys77SerTrp)
*	it is not correct to describe "**polymorphisms**" as p.76Ser/Arg ([_see Discussions_](/recommendations/protein/variant/substitution/#polymorphism))
