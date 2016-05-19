---
parent: RNA
title: conversion
category: description
---

Format: **"prefix""positions_converted""con""positions_replacing_sequence"**,  e.g. r.123\_345con888\_1110

**"prefix"**  =  reference sequence used  =  g.<br>
**"positions_converted"**  =  range of nucleotides converted  =  r.123\_345<br>
**"con"**  =  type of change is a conversion =  con<br> 
**"positions_replacing_sequence"**  =  description of replacing sequence  =  888\_1110
 
---

### Note

*	**prefix** reference sequences accepted are r. (coding and non-coding RNA)
*	the region converted ("positions\_converted") should **start** and **end** with a variant nucleotide
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the converted sequence ("positions\_replacing_sequence") which is different when compared to the source, e.g. r.123\_345con888\_1110**{999a>g}**