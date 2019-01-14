---
parent: Protein
title: duplication
category: description
---

Format:  **"prefix""amino\_acid(s)+position(s)\_duplicated""dup"**,  e.g. p.(Cys76\_Glu79dup)

**"prefix"**  =  reference sequence used  =  p.<br>
**"amino_acid(s)+position(s)\_duplicated"**  =  amino acid with position or range (first amino acid with position to last amino acid with position) duplicated  =  Cys76\_Glu79<br>
**"dup"**  =  type of change is a duplication =  dup

---

### Note

*	**prefix** reference sequence accepted is "p." (protein).
*	the "amino\_acids+positions\_duplicated" should contain **two different** positions, i.e. Cys76\_Glu79, not Cys76\_Cys76.
*	the "positions\_duplicated" should be listed from **5' to 3'**, i.e. Cys76\_Glu79, not Glu79\_Cys76.
*	by definition, duplication may only be used when the additional copy is **directly C-terminal** of the original copy (a "tandem duplication").
	*	when the extra copy is not in tandem (directly C-terminal), the change should be described as **insertion** ([_see Insertion_](/recommendations/protein/variant/insertion/)).
*	for all descriptions the **most C-terminal position** possible of the reference sequence is arbitrarily assigned to have been changed (_**3'rule**_)
	*	the 3'rule ("C-terminal rule") also applies for changes in single amino acid stretches and tandem repeats
*	predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Arg727\_Ser783dup).
*	variants should be described on the protein level and not incorporate knowledge regarding the change at the DNA level
	*	duplications extending the amino acid sequence at the C-terminal end with one or more amino acids are described as [_Extension_](/recommendations/protein/variant/extension)
	*	duplications **starting N-terminal of and including** the translation termination (stop) codon may have no effect or are described as [_Frame shift_](/recommendations/protein/variant/frameshift).
