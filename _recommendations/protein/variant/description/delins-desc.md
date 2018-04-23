---
parent: Protein
title: deletion-insertion
category: description
---

Format:   **"prefix""amino_acid(s)+position(s)\_deleted""delins""inserted\_sequence"**,  e.g. p.(Arg123\_Lys127delinsSerAsp)

**"prefix"**  =  reference sequence used  =  g.<br>
**"amino\_acid(s)+position(s)\_deleted"**  =  position nucleotide or range of nucleotides deleted  =  Arg123\_Lys127<br>
**"delins"**  =  type of change is a deletion-insertion  =  delins<br>
**"inserted_sequence"**  =  description inserted sequence  =  SerAsp<br>

---

### Note

* **prefix** reference sequence accepted is "p." (protein).
* predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Arg123\_Lys127delinsSerAsp).
* by definition, when **one** amino acid is replaced with **one** other amino acid the change is a [_substitution_](/recommendations/protein/variant/substitution/).
* for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
* two variants separated by one or more amino acids should preferably be described individually and not as a “delins”
* **in-frame** deletion-insertion variants containing a translation termination (stop) codon should be described as a deletion-insertion replacing the affected with the new amino acid sequence (not as a deletion-insertion replacing the entire C-terminus of the protein from the variant site with a new amino acid sequence)
* **frame shifting** deletion-insertion variants are a special type of protein variants described as a frame shift ([_see Frame shift_](/recommendations/protein/variant/frameshift/))<br>
_**NOTE**_ :  insertions from intron sequences which maintain the normal open reading are described as deletion-insertion or [_Insertion_](/recommendations/protein/variant/insertion/), intronic insertions which give premature translation termination are described as [_frame shifts_](/recommendations/protein/variant/frameshift/)
* deletion/insertion variants **in** the translation termination (stop) codon, extending the reading frame, are described as [_Extension_](/recommendations/protein/variant/extension). Deletion/insertion variants **starting 5' of and including** the translation termination (stop) codon are described as [_Frame shift_](/recommendations/protein/variant/frameshift).
