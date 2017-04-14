---
parent: RNA
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
*	by definition, when **one** nucleotide is replaced by **one** other nucleotide the change is a [_substitution_](/recommendations/RNA/variant/substitution/).
*	two variants separated by one or more nucleotides should preferably be described individually and not as a “delins”
	*	two variants separated by one nucleotide, together affecting one amino acid, can be described as a “delins” (e.g. r.142_144delinsugg (p.Arg48Trp))
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been 
