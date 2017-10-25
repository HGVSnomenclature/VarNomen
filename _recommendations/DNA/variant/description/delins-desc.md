---
parent: DNA
title: deletion-insertion
category: description
---

Format:   **"prefix""position(s)\_deleted""delins""inserted_sequence"**,  e.g. g.123\_127delinsAG

**"prefix"**  =  reference sequence used  =  g.<br>
**"position(s)\_deleted"**  =  position nucleotide or range of nucleotides deleted  =  123\_127<br>
**"delins"**  =  type of change is a deletion-insertion (indel)  =  delins<br>
**"inserted\_sequence"**  =  description inserted sequence  =  AG<br>

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	by definition, when **one** nucleotide is replaced by **one** other nucleotide the change is a [_substitution_](/recommendations/DNA/variant/substitution/).
*	two variants separated by one or more nucleotides should preferably be described individually and **not** as a "delins"
	*	two variants separated by one nucleotide, together affecting one amino acid, should be described as a "delins" (e.g. c.142_144delinsTGG (p.Arg48Trp))
	:	**_NOTE:_**	this prevents tools predicting the consequences of a variant to make erroneous predictions based on e.g. two individual substitutions
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
