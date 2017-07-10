---
parent: Protein
title: frame shift
category: description
---

Format:   **"prefix""amino_acid"position"new_amino_acid""fs""Ter""position_termination_site"**,  e.g. p.(Arg123LysfsTer34)

**"prefix"**  =  reference sequence used  =  p.<br>
**"amino_acid"**  =  first amino acid changed  =  Arg<br>
**"position"**  =  position  =  123<br>
**"new_amino_acid"**  =  new amino acid  =  Lys<br>
**"fs"**  =  type of change is a frame shift  =  fs<br>
**"Ter"**  =  termination codon  =  Ter / \*<br>
**"position_termination_site"**  =  position new termination site  =  34

---

### Note

*	**prefix** reference sequence accepted is "p." (protein).
*	predicted consequences, i.e. without experimental evidence (no RNA or protein analysed), should be given in parentheses, e.g. p.(Arg123LysfsTer34).
*	frame shifts can also be described using a **short format**; p.Arg123fs i.e. indicating the first amino acid changed, its position and "fs" without further detail.
*	frame shifts are a special type of amino acid **deletion/insertion**, but the description does not include the deletion from the site of the change to the C-terminal end of the protein (stop codon), like "Arg123\_Leu833del", nor the amino acid sequence inserted.
*	the position of the translation termination (stop) codon in the new reading frame is calculated **starting** at the first amino acid changed by the frame shift (codon 1), and **ending** at the first stop codon encountered (Ter# or \*#)<br>
_**NOTE**_: the number of amino acids in the new C-terminal sequence is "#-1" amino acids<br>
*	the description of a frame shift variant can not contain "fsTer1", such a variant is a nonsense variant ([_see Substitution_](/recommendations/protein/variant/substitution/)). The shortest frame shift variant possible contains "fsTer2"
*	for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
*	variants should be described on the protein level and not incorporate any knowledge regarding the change at DNA-level ([_see Discussion_](/recommendations/protein/variant/frameshift/#protonly)).
	*	the description of a frame shift starts with the **first new** amino acid, this might not be first codon affected by the variant at the DNA level
