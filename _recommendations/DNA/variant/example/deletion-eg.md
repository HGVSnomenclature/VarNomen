---
parent: DNA
title: deletion
category: example
---

*	one nucleotide - NG\_012232.1:g.19del
	:	a deletion of the T at position g.19 in the sequence AGAA**<font color="red">T</font>**CACA to AGAA**<font color="red">_</font>**CACA
	:	_**NOTE**_: it is allowed to describe the variant as NG\_012232.1:g.19delT 
*	several nucleotides
	*	NG\_012232.1:g.19\_21del
		:	a deletion of nucleotides g.19 to g.21 in the sequence AGAA**<font color="red">TCA</font>**CA to AGAA**<font color="red">___</font>**CA
		:	_**NOTE**_: it is allowed to describe the variant as NG\_012232.1:g.19\_21delTGC 
	*	NG\_012232.1(NM\_004006.1):c.183\_186+48del
		:	a deletion of nucleotides c.183 to c.186+48 (coding DNA reference sequence), crossing an exon/intron border
*	exon/intron border
	*	LRG\_199t1:c.1152del
		: the deletion of the G nucleotide at the intron/exon border in the sequence CATGAGgt.../..agGG**<font color="red">G</font>**TAC to CATGAGgt.../..agGG**<font color="red">_</font>**TAC
	*	LRG\_199t1:c.1149+1del
		:	the deletion of the G nucleotide at the exon/intron border in the sequence CATGAG**<font color="red">g</font>**t.../..agGGGTAC to CATGAG**<font color="red">_</font>**t.../..agGGGTAC (not c.1152del, [_see exception in Numbering_](/bg-material/numbering/#DNAc) and [_see Q&A_](/recommendations/DNA/variant/deletion/#6del))
*	NG\_012232.1(NM\_004006.1):c.4072-1234\_5155-246del
	:	a deletion of nucleotides c.4072-1234 to c.5155-246 removing exon 30 (starting at position c.4072) to exon 36 (ending at position c.5154) of the DMD-gene.
	:	_**NOTE**_ : c.4072-1234\_5155-246delXXXXX, the size of the deletion (XXXXX) **should not** be described
*	exons 
	*	NG\_012232.1(NM\_004006.1):c.(4071+1\_4072-1)\_(5154+1\_5155-1)del
		:	a deletion of exon 30 (starting at position c.4072) to exon 36 (ending at position c.5154) of the DMD-gene. The deletion break point has **not been sequenced**. Exons 29 (ending at c.4071) and 37 (starting at nucleotide c.5155) have been tested an shown to be **not deleted**. The deletion therefore starts in intron 29 (position c.4071+1 to c.4072-1) and ends in intron 36 (position c.5154+1 to c.5155-1).
		:	_**NOTE**_ : as mentioned ([_Uncertain_](/recommendations/uncertain/)) the description can also be **probe-based**. For a deletion of exons 30 to 36, detected using MLPA, the description would be NG\_012232.1(NM\_004006.1):c.(3996\_4196)\_(5090\_5284)del, i.e. following the suggestion to use the central position (3’ nucleotide) of the probe ligation site. E.g. the MLPA exon 29 probes hybdrize from position c.3963 to c.4030 giving c.3996 as the position to use in the description.
		:	_**NOTE**_ : this description is part of proposal [_SVD-WG003 (undecided)_](/bg-material/consultation/svd-wg003).
		:	_**NOTE**_ : previously, the suggestion was made to describe such deletions using the format NG\_012232.1(NM\_004006.1):c.4072-?\_5154+?del. However, since c.4072-? indicates "**to an unknown postion 5' of c.4072**" and c.5154+? "**to an unknown postion 3' of c.5154**" this description is not correct when it is known that exons 29 and 37 are present.
	*	LRG\_199t1:c.720\_991del
		:	a deletion of nucleotides c.720 to c.991 starting in exon 8 (position c.720) and ending in exon 10 (position c.991) of the DMD-gene.
		:	_**NOTE**_ : the description NM_\004006.2:c.720_991del is not correct, the reference sequence NM_\004006.2 is a coding DNA reference sequence which **does not include** the intron sequences involved
	*	NG\_012232.1(NM\_004006.1):c.(?\_-245)\_(31+1\_32-1)del
		:	a deletion starting somewhere upstream of a gene, last postion tested postive c.-244, and ending in the intron between nucleotides c.31+1 and c.32-1 (intron 1).
*	gene
	*	NG\_012232.1(NM\_004006.1):c.(?\_-1)\_(\*1\_?)del
		:	a deletion of the entire protein coding region of a gene based on a coding DNA reference sequence).
		:	_**NOTE**_: when more details are available regarding the deletion, based on the probes tested to determine its location, the description can be specified like NG\_012232.1(NM\_004006.1):c.(?\_-189)\_(\*884\_?)del, meaning the deletion starts 5' of c.-189 and extends 3' of c.\*884.
*	NG\_012232.1:g.19\_21=/del
	:	a mosaic case where from position g.19 to g.21 besides the normal sequence also chromosomes are found containing a deletion of this sequence
*	NG\_012232.1:g.19\_21del=//del
	:	a chimeric case, i.e. the sample is a mix of cells containing g.19\_g.21= and g.19\_21del
