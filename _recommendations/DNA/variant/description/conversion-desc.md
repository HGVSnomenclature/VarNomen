---
parent: DNA
title: conversion
category: description
---

Format: **"prefix""positions_converted""con""positions_replacing_sequence"**,  e.g. g.123_345con888_1110

**"prefix"**  =  reference sequence used  =  g.<br>
**"positions_converted"**  =  range of nucleotides converted  =  g.123_345<br>
**"con"**  =  type of change is a conversion =  con<br> 
**"positions_replacing_sequence"**  =  description of replacing sequence  =  888_1110
 
---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	the region converted ("positions_converted") should _**start**_ and _**end**_ with a variant nucleotide.
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the converted sequence ("positions_replacing_sequence") which is different when compared to the source, e.g. g.123_345con888_1110**{999A>G}**
