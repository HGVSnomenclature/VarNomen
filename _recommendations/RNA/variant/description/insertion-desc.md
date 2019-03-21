---
parent: RNA
title: insertion
category: description
---

Format: **"prefix""positions_flanking""ins""inserted_sequence"**,  e.g. r.123\_124insauc

**"prefix"**  =  reference sequence used  =  r.<br>
**"positions_flanking"**  =  position two nucleotides flanking insertion site  =  123\_124<br>
**"ins"**  =  type of change is an insertion  =  ins<br> 
**"inserted_sequence"**  =  inserted sequence  =  auc <sup>1</sup>

[_1_ see Uncertain](http://www.ncbi.nlm.nih.gov/genbank/submit/)
---

### Note

*	**prefix** reference sequences accepted are r. (coding and non-coding RNA).
*	the "position" description should contain **two flanking nucleotides**, e.g. 123 and 124 but not 123 and 125.
*	an insertion can not be described using one nucleotide position, like r.123insg
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
*	when the inserted sequence is very long it can best be submitted to a database (e.g. [_GenBank_](http://www.ncbi.nlm.nih.gov/genbank/submit/)); the accession.version number obtained can then be used to describe the variant like r.123\_124insL37425.1:23\_361 
