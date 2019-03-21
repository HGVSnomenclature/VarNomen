---
parent: DNA
title: insertion
category: description
---

Format: **"prefix""positions_flanking""ins""inserted_sequence"**,  e.g. g.123\_124insAGC

**"prefix"**  =  reference sequence used  =  g.<br>
**"positions_flanking"**  =  position two nucleotides flanking insertion site  =  123\_124<br>
**"ins"**  =  type of change is an insertion  =  ins<br> 
**"inserted_sequence"**  =  inserted sequence  =  AGC <sup>1</sup>

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	the "positions flanking" should contain **two flanking nucleotides**, e.g. 123 and 124 but not 123 and 125.
	*	<sup>1</sup> = [_see Uncertain_](/recommendations/uncertain/); when the postion and/or the sequence of an inserted sequence has not been defined, a description may have a format like g.(100_150)ins(25)
	*	the “positions_flanking” should be listed from 5’ to 3’, e.g. 123_124 not 124_123
*	tandem duplications are described as a duplication (g.123\_456**dup**), not an insertion (g.456\_457ins123\_456, see [_Prioritization_](/recommendations/general/))
	*	**inverted duplications** are described as insertion (g.234\_235ins123\_234inv), not as a duplication ([_see Inversion_](/recommendations/DNA/variant/inversion))
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
*	the **"inserted_sequence"** can be given as the nucleotides inserted (e.g. insAGC) or, for larger insert sequences, by referring to the sequence in the reference sequence (e.g. c.849_850ins858_895) or another reference (see Examples).
	*	when the inserted sequence is very long it can best be submitted to a database (e.g. [GenBank](http://www.ncbi.nlm.nih.gov/genbank/submit/){:target="\_blank"}); the accession.version number obtained can then be used to describe the variant like g.123\_124insLRG\_199:g.2233\_2361
	*	<sup>1</sup> = [_see Uncertain_](/recommendations/uncertain/); when the postion and/or the sequence of an inserted sequence has not been defined, a description may have a format like g.(100_150)ins(25) 
