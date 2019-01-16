---
parent: Protein
title: deletion-insertion
category: description
---

Format:   **"prefix""amino_acid(s)+position(s)\_deleted""delins""inserted\_sequence"**,  e.g. p.(Arg123\_Lys127delinsSerAsp)

**"prefix"**  =  reference sequence used  =  p.<br>
**"amino\_acid(s)+position(s)\_deleted"**  =  position amino acid or range of amino acids deleted  =  Arg123\_Lys127<br>
**"delins"**  =  type of change is a deletion-insertion  =  delins<br>
**"inserted_sequence"**  =  description inserted sequence  =  SerAsp<br>

---

### Note

* **prefix** reference sequence accepted is "p." (protein).
* by definition, when **one** amino acid is replaced with **one** other amino acid, the change is a [_substitution_](/recommendations/protein/variant/substitution/).
* for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
* predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Arg123_Lys127delinsSerAsp).
* when the inserted protein sequence is large and it is possible to derive the inserted amino acid sequence from the description given at DNA or RNA level, the insertion may be described by its length only (e.g. p.Arg456_Leu488delins(54)).
* two variants separated by one or more amino acids should preferably be described individually and not as a “delins”<br>
* variants should be described on the protein level and not incorporate knowledge regarding the change at the DNA level. 
  * deletion-insertion variants containing a translation stop codon in the inserted DNA sequence are described as [_**insertion**_](/recommendations/protein/variant/insertion), not as a deletion-insertion removing the entire C-terminal amino acid sequence
  *	deletion-insertion variants encoding an open reading frame but after the DNA insertion shifting to another reading are described as a [_**frame shift**_](/recommendations/protein/variant/frameshift/)
  * deletion/insertion variants extending the amino acid sequence at the C-terminal end with one or more amino acids are described as [_Extension_](/recommendations/protein/variant/extension).
  * deletion-insertion variants on DNA/RNA level starting **starting 5' of and including** the translation termination (stop) codon are described as [_**frame shift**_](/recommendations/protein/variant/frameshift).
