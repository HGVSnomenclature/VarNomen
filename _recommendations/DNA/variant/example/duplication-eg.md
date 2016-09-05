---
parent: DNA
title: duplication
category: example
---

*	g.7dup (one nucleotide)
	: the duplication of a T at position g.7 in the sequence ACTTACTGCC to ACTTACT**<font color="red">T</font>**GCC
	: _**NOTE**_: it is allowed to describe the variant as g.7dupT
	: _**NOTE**_: it is **not** allowed to describe the variant as g.6\_7insT ([_see prioritisation_](/recommendations/general/))
*	g.6\_8dup (several nucleotides)
	: a duplication from position g.6 to g.8 in the sequence ACAATTGCC to ACAATTGC**<font color="red">TGC</font>**C
	: _**NOTE**_: it is allowed to describe the variant as g.6\_8dupTGC
*	c.120\_123+48dup
	: a duplication of nucleotides c.120 to c.123+48 (coding DNA reference sequence), crossing an exon/intron border
*	c.123dup
	: based on the sequence of a genomic DNA sample, a duplication of the A nucleotide c.123 in the sequence CAAgt.../..agAAG to CAA**<font color="red">A</font>**gt.../..agAAG, i.e. the duplication of the last nucleotide of an exon ([_see Question below_](/recommendations/DNA/variant/duplication/#123dup))
	: _**NOTE**_: when RNA is sequenced and the variant does not alter splicing the description at the RNA level based on a coding RNA reference sequence is r.**<font color="red">125</font>**dup (the **3'rule** needs to be applied)
*	c.4072-1234\_5146-246dup
	: a duplication of nucleotides c.4072-1234 to c.5146-246 duplicating exon 30 (starting at position c.4072) to exon 36 (ending at position c.5145) of the DMD-gene.
	: _**NOTE**_ : c.4072-1234\_5146-246dupXXXXX, the size of the duplication (XXXXX) **should not** be described
*	c.(4071+1\_4072-1)\_(5145+1\_5146-1)dup
	: a duplication of exon 30 (starting at position c.4072) to exon 36 (ending at position c.5145) of the DMD-gene. The duplication break point has **not been sequenced**. Exons 29 (ending at c.4071) and 37 (starting at nucleotide c.5146) have been tested an shown to be **not duplicated**. The duplication therefore starts in intron 29 (position c.4071+1 to c.4072-1) and ends in intron 36 (position c.5145+1 to c.5156-1).
	: _**NOTE**_ : this description is part of [_proposal SVD-WG003 (undecided)_](/bg-material/consultation/svd-wg003).
	: _**NOTE**_ : previously, the suggestion was made to describe such duplications using the format c.4072-?\_5154+?dup. However, since c.4072-? indicates "**to an unknown postion 5' of c.4072**" and c.5154+? "**to an unknown postion 3' of c.5154**" this description is not correct when it is known that exons 29 and 37 are involved.
*	c.(?\_-30)\_(12+1\_13-1)dup
	: a duplication starting somewhere upstream of a gene, last postion tested duplicated c.-29, and ending in the intron between nucleotides c.12+1 and c.13-1 (intron 1).
*	c.(?\_-1)\_(\*1\_?)dup
	: a duplication of the entire protein coding region of a gene based on a coding DNA reference sequence).
	: _**NOTE**_: when more details are available regarding the duplication, based on the probes tested to determine its location, the description can be specified like c.(?\_-189)_(\*884\_?)dup, meaning the duplication starts 5' of c.-189 and extends 3' of c.*884.

