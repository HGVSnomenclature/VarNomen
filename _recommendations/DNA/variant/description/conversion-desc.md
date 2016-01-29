---
parent: DNA
title: conversion
category: description
---

Format:   **"prefix""sequence_changed""con"origin_replacing_sequence"**,  e.g. g.123_345con888_1110

**"prefix"**  =  reference sequence used  =  g.<br>
**"sequence_changed"**  =  the range of nucleotides changed  =  g.123_345<br>
**"con"** =  the type of change is a conversion =  con<br> 
**"origin_replacing_sequence"**  =   the origin and the range of nucleotides replacing the original sequence  =  888_1110
 
 
 **NOTE:**
<ul>
<li><b>prefix</b> reference sequences accepted are g., c. and n. (genomic, coding DNA and non-coding DNA reference sequences).</li>
<li>the region converted ("sequence_changed") should <b><i>start</i></b> and <b><i>end</i></b> with a variant nucleotide.</li>
<li>under discussion, see <i><a ref='http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc'>Proposal for complex variants</a></i>:<br>
{ } (curly braces) can be used to list any change in the inverted sequence ("origin_replacing_sequence") which is different when compared to the source, e.g. g.123_345con888_1110<b><i>{999A>G}.</i></b> </li>
</ul>