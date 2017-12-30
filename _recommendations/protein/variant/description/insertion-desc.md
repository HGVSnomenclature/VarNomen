---
parent: Protein
title: insertion
category: description
---

Format: **"prefix""amino_acids+positions_flanking""ins""inserted_sequence"**,  e.g. p.(Lys23\_Leu24insArgSerGln)

**"prefix"**  =  reference sequence used  =  p.<br>
**"amino_acids+positions_flanking"**  =  amino acids with positio flanking insertion site  =  Lys23\_Leu24<br>
**"ins"**  =  type of change is an insertion  =  ins<br> 
**"inserted_sequence"**  =  inserted sequence  =  ArgSerGln

---

### Note

*	**prefix** reference sequence accepted is "p." (protein).
*	predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Arg727\_Ser728insTrpCys).
*	an insertion can not be described using **one** amino acid position, like p.Lys23insAsp
*	the "amino\_acids+positions\_flanking" should contain **two flanking residues**, e.g. Lys23 and Leu24, not two non-flanking residues (Lys23 and Asn25)
*	duplicating insertions should be described as duplications ([_see Duplication_](/recommendations/DNA/variant/duplication/)), not as insertion
*	**in-frame** insertions containing a translation stop codon in the inserted sequence are described as an insertion, not as a deletion-insertion removing the entire C-terminal amino acid sequence.
*	**out-of-frame** insertions are described as a [_**frame shift**_](/recommendations/protein/variant/frameshift/).
*	for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
	*	the 3'rule also applies for changes in single amino acid stretches and tandem repeats
*	variants should be described on the protein level and not incorporate knowledge regarding the change at the DNA level
*	insertions **in** the translation termination (stop) codon, extending the reading frame, are described as [_Extension_](/recommendations/protein/variant/extension)
*	when the inserted protein sequence is large and it is possible to derive the inserted amino acid sequence from the description given at DNA or RNA level, the insertion may be described by its length only (e.g. p.Lys2\_Leu3ins(34) ).
