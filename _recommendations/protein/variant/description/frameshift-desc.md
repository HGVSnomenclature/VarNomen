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
*	predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Arg123LysfsTer34).
*	frame shifts are a special type of amino acid **deletion/insertion**, but the description does not include the deletion from the site of the change to the C-terminal end of the protein (stop codon), like "Arg123\_Leu833del", nor the amino acid sequence inserted.
	*	frame shifts can also be described using a **short format**; p.Arg123fs i.e. indicating the first amino acid changed, its position and "fs" without further detail.
*	the description of a frame shift starts with the **first new** amino acid, this might not be first codon affected by the variant at the DNA level
	*	the position of the translation termination (stop) codon in the new reading frame is calculated **starting** at the first amino acid changed by the frame shift (codon 1), and **ending** at the first stop codon encountered (Ter# or \*#)<br>
	_**NOTE**_: the number of amino acids in the new C-terminal sequence is "#-1" amino acids<br>
	_**NOTE**_: the shortest frame shift variant possible contains "fsTer2"; "fsTer1" variants are by definition nonsense variants ([_see Substitution_](/recommendations/protein/variant/substitution/)).
	*	for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
*	deletions at DNA/RNA level that go beyond the translation termination (stop) codon are described as [_Deletion-insertion_](/recommendations/protein/variant/delins/), not as frame shift
*	insertions from intron sequences which give premature translation termination are described as frame shifts, intron insertions maintaining the normal open reading are described as [_Insertion_](/recommendations/protein/variant/insertion/) or [_Deletion-insertion_](/recommendations/protein/variant/delins/)
*	variants should be described on the protein level and not incorporate any knowledge regarding the change at DNA-level ([_see Discussion_](/recommendations/protein/variant/frameshift/#protonly)).
