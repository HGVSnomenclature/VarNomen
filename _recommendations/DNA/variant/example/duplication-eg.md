---
parent: DNA
title: duplication
category: example
---

*	one nucleotide - NM\_004006.2:c.20dup (NC\_000023.10:g.33229410dup)
	:	the duplication of a T at position c.20 in the sequence AGAAGTAGAGG to AGAAGT**<font color="red">T</font>**AGAGG
	:	_**NOTE**_: it is allowed to describe the variant as c.20dupT
	:	_**NOTE**_: it is **not** allowed to describe the variant as g.19\_20insT ([_see prioritisation_](/recommendations/general/))
*	several nucleotides
	*	NM\_004006.2:c.20\_23dup (NC\_000023.10:g.33229407\_33229410dup)
		:	a duplication from position c.20 to c.23 in the sequence AGAAGTAGAGG to AGAAGTAGA**<font color="red">TAGA</font>**GG
		:	_**NOTE**_: it is allowed to describe the variant as c.20\_23dupTAGA
	*	LRG\_199t:c.260\_264+48dup (NC\_000023.10:g.32862852\_32862904dup)
		:	a duplication of nucleotides c.160 to c.264+48 (coding DNA reference sequence), crossing an exon/intron border
*	exon/intron border
	*	LRG\_199t1:c.1152dup
		:	the duplication of the G nucleotide at the intron/exon border in the sequence CATGAGgt.../..agGGGTAC to CATGAGgt.../..agGGG**<font color="red">G</font>**TAC
	*	LRG\_199t1:c.1149+1dup
		:	the duplication of the G nucleotide at the exon/intron border in the sequence CATGAGgt.../..agGGGTAC to CATGAGg**<font color="red">g</font>**t.../..agGGGTAC (not c.1152dup, [_see exception in Numbering_](/bg-material/numbering/#DNAc) and [_see Q&A below_](/recommendations/DNA/variant/duplication/#123dup))
*	exons
	*	LRG\_199t1:c.4072-1234\_5155-246dup
		:	a duplication of nucleotides c.4072-1234 to c.5155-246 duplicating exon 30 (starting at position c.4072) to exon 36 (ending at position c.5154) of the DMD-gene.
		: 	_**NOTE**_ : the format c.4072-1234\_5155-246dupXXXXX, with XXXXX indicating the size of the duplication, **should not** be used
		: 	_**NOTE**_ : the description NM\_004006.2:c.4072-1234\_5155-246dup is not correct, the reference sequence NM\_004006.2 is a coding DNA reference sequence which **does not include** the intron sequences involved
	*	LRG\_199t1:c.720\_991dup
		:	a duplication of nucleotides c.720 to c.991 starting in exon 8 (position c.720) and ending in exon 10 (position c.991) of the DMD-gene.
		: 	_**NOTE**_ : the description NM\_004006.2:c.720\_991dup is not correct, the reference sequence NM\_004006.2 is a coding DNA reference sequence which **does not include** the intron sequences involved
	*	NG\_012232.1(NM\_004006.2):c.(4071+1\_4072-1)\_(5154+1\_5155-1)dup
		:	a duplication of exon 30 (starting at position c.4072) to exon 36 (ending at position c.5145) of the human DMD-gene. The duplication break point has **not been sequenced**. Exons 29 (ending at c.4071) and 37 (starting at nucleotide c.5146) have been tested an shown to be **not duplicated**. The duplication therefore starts in intron 29 (position c.4071+1 to c.4072-1) and ends in intron 36 (position c.5145+1 to c.5156-1).
		:	_**NOTE**_ : this description is part of [_proposal SVD-WG003 (undecided)_](/bg-material/consultation/svd-wg003).
		:	_**NOTE**_ : previously, the suggestion was made to describe such duplications using the format c.4072-?\_5154+?dup. However, since c.4072-? indicates "**to an unknown postion 5' of c.4072**" and c.5154+? "**to an unknown postion 3' of c.5154**" this description is not correct when it is known that exons 29 and 37 are involved.
	*	NC\_000023.10:g.(32381076\_32382698)\_(32430031\_32456357)[3]  (LRG\_199t1:c.(4071+1\_4072-1)\_(5154+1\_5155-1)[3])
		:	a triplication of the sequence from exon 30 (starting at position c.4072) to exon 36 (ending at position c.5154) of the DMD-gene (break points not sequenced).
		:	_**NOTE**_ : this description should only be used when the two additional copies are in tandem with the original copy. There is no specific recommendation yet how to describe such a change but following current recommendations the format would be something like g.?\_?ins(32381076\_32382698)\_(32430031\_32456357)[2] ([2] since **2** additional copies have been inserted somewhere in the genome).
	*	LRG\_199t1:c.(?\_-127)\_(31+1\_32-1)dup
		:	a duplication starting somewhere upstream of the DMD gene, last postion tested duplicated c.-127, and ending in the intron between nucleotides c.31+1 and c.32-1 (intron 1).
*	gene
	*	LRG\_199t1:c.(?\_-1)\_(\*1\_?)dup
		:	a duplication of the entire protein coding region of a gene (based on a coding DNA reference sequence).
		:	_**NOTE**_: when more details are available regarding the duplication, based on the probes tested to determine its location, the description can be specified like c.(?\_-189)\_(\*884\_?)dup, meaning the duplication starts 5' of c.-189 and extends 3' of c.\*884.

