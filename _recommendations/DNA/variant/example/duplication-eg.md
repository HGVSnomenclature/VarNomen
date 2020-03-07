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
	*	LRG\_199t1:c.260\_264+48dup (NC\_000023.10:g.32862852\_32862904dup)
	:	a duplication of nucleotides c.160 to c.264+48 (coding DNA reference sequence), crossing an exon/intron border
*	exon/intron/exon
	*	exon/exon
		*	LRG_199t1:c.3921dup
		:	the duplication of the T nucleotide at the exon/exon border in the sequence ..GA**<font color="red">T</font>** gta..//..cag TCA.. changing to ..GA**<font color="red">TT</font>** gta..//..cag TCA..
		:	_**NOTE**_ : according to an exception of the 3'rule the variant (NC\_000023.10:g.32459297dup) is **not described** as c.3922dup since this would shift the position of the variant to the next exon (c. 3922 linking to g.32456507) ([_see exception in Numbering_](/bg-material/numbering/#DNAc) and [_see Q&A_](/recommendations/DNA/variant/deletion/#6del))
	*	exon/intron
		*	LRG\_199t1:c.1704+1dup
		:	the duplication of the G nucleotide at the exon/intron border in the sequence GAACAG**<font color="red">g</font>**t.../..agTGCCTT changing to GAACAG**<font color="red">gg</font>**t.../..agTGCCTT (not c.1704dup)
		:	_**NOTE**_: this description does not depend on the effect observed on RNA level, giving either altered splicing or r.1704dup
	*	intron/exon
		*	LRG\_199t1:c.1813dup
		:	the duplication of the G nucleotide at the intron/exon border in the sequence CTGGCCgt.../..ag**<font color="red">G</font>**TTTTA changing to CTGGCCgt.../..ag**<font color="red">GG</font>**TTTTA (not c.1813-1dup)
		:	_**NOTE**_: this description does not depend on the effect observed on RNA level, giving either altered splicing or r.1813dup
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
	*	duplications extending beyond the transcribed region
	:	following current recommendations (see [_Numbering_](bg-material/numbering/) it is not allowed to describe variants in nucleotides beyond the boundaries of a reference sequence. Consequently, duplications extending 5' of a transcript **can not** be described like NC\_000023.11(NM\_004006.2):c.(?\_-244\_(31+1\_32-1)dup (c.-244 is the first nucleotide of NM\_004006.2) and duplications extending 3' of a transcript **can not** be described like NC\_000023.11(NM\_004006.2):c.(10086+1\_10087-1)\_(\*2691\_?)dup (c.\*2691 is the last nucleotide of NM\_004006.2). Such duplications can only be described using genomic coordinates. The HGVS nomenclature committee (SVD-WG) is discussing whether a c. based format should be proposed.
*	gene
	*	NC\_000023.11:g.(31060227\_31100351)\_(33274278\_33417151)dup
	:	a duplication of the entire DMD gene based on a SNP-array analysis where the maximum size of the duplication lies between SNPs rs396303 and rs7887548 (nucleotides 31060227 and 33417151) and the minimum size between SNPs rs808178 and rs7887103 (nucleotides 31100351 and 33274278). Describing the duplication based on a coding DNA reference sequence using NC\_000023.11(NM\_004006.2):c.(-205839\_-62966)\_(\*21568\_\*61692)dup makes no sense.
	:	_**NOTE**_: the array analysis detects an extra copy of the sequences and it has to be determined whether it is a duplication. When it is not sure the variant is a duplication the variant should be described as an insertion, g.?\_?insNC\_000023.11:(31060227\_31100351)\_(33274278\_33417151)
	*	NC\_000023.11:g.(?\_31120496)\_(33339477\_?)dup
	:	a duplication of the entire DMD gene based on a MLPA assay where nucleotides g.31120496 and g.33339477 are the center of the probes for the resp. last and first (brain promoter) exons.
	:	_**NOTE**_: the MLPA analysis detects an extra copy of the sequences and it has to be determined whether it is a duplication. When it is not sure the variant is a duplication the variant should be described as an insertion, g.?\_?insNC\_000023.11:(?\_31120496)\_(33339477\_?)
*	NG\_012232.1:g.19\_21=/dup
:	a mosaic case where from position g.19 to g.21 besides the normal sequence also chromosomes are found containing a duplication of this sequence
*	NG\_012232.1:g.19\_21=//dup
:	a chimeric case, i.e. the sample is a mix of cells containing g.19\_21= and g.19\_21dup
