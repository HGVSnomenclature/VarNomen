---
parent: DNA
title: insertion
category: description
---

Format: **"prefix""positions_flanking""ins""inserted_sequence"**,  e.g. g.123\_124insAGC

**"prefix"**  =  reference sequence used  =  g.<br>
**"positions_flanking"**  =  position two nucleotides flanking insertion site  =  123\_124<br>
**"ins"**  =  type of change is an insertion  =  ins<br> 
**"inserted_sequence"**  =  inserted sequence  =  AGC

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	the "position" description should contain **two flanking nucleotides**, e.g. 123 and 124 but not 123 and 125.
*	an insertion can not be described using one nucleotide position, like g.123insG
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
*	tandem duplications are described as a duplication (g.123\_456**dup**), not an insertion (g.456\_457ins123\_456)
	*	**inverted duplications** are described as insertion (g.234\_235ins123\_234inv), not as a duplication ([_see Inversion_](/recommendations/DNA/variant/inversion))
*	when the inserted sequence is very long it can best be submitted to a database (e.g. [_GenBank_](http://www.ncbi.nlm.nih.gov/genbank/submit/)); the accession.version number obtained can then be used to describe the variant like g.123\_124insL37425.1:23\_361 
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the inserted sequence ("inserted_sequence") which is different when compared to the source, e.g. g.123\_124ins100\_120**{111A>G}**
