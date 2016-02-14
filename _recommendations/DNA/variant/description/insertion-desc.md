---
parent: DNA
title: insertion
category: description
---

Format: **"prefix""position""ins""inserted_sequence"**,  e.g. g.123_124insAGC

**"prefix"**  =  reference sequence used  =  g.<br>
**"position"**  =  position two nucleotides flanking insertion site  =  123_124<br>
**"ins"**  =  type of change is an insertion  =  ins<br> 
**"inserted_sequence"**  =  description inserted sequence  =  AGC

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	the "position" description should contain _**two flanking nucleotides**_, e.g. 123 and 124 but not 123 and 125.
*	an insertion can not be described using one nucleotide position, like g.123insG
*	when the inserted sequence is very long ....
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the inserted sequence ("inserted_sequence") which is different when compared to the source, e.g. g.123_124ins100_120**{111A>G}**
