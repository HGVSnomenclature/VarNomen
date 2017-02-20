---
parent: DNA
title: deletion
category: example
---

*	g.7del (one nucleotide)
	: a deletion of the T at position g.7 in the sequence ACTTACTGCC to ACTTAC**<font color="red">_</font>**GCC
	: _**NOTE**_: it is allowed to describe the variant as g.7delT 
*	g.6\_8del (several nucleotides)
	: a deletion of nucleotides g.6 to g.8 in the sequence ACAATTGCC to ACAAT**<font color="red">___</font>**C
	: _**NOTE**_: it is allowed to describe the variant as g.6\_8delTGC 
*	c.120\_123+48del
	: a deletion of nucleotides c.120 to c.123+48 (coding DNA reference sequence), crossing an exon/intron border
*	exon/intron border
	*	c.3del
		: when exon 3 ends with ..CAA and exon 4 starts with ACG.. and the genomic DNA sequence shows that the last A-nucleotide of exon 3 is deleted (and not the first A in exon 4), the deletion changing ..CAAACG.. to ..CAACG.. is described as c.3delA (not c.4delA, [_see exception in Numbering_](/bg-material/numbering/#DNAc))
		: _**NOTE**_: it is allowed to describe the variant as c.3delA
	*	c.8del
		: the deletion of the G nucleotide at the intron/exon border in the sequence ATGCTGgt.../..agG**<font color="red">G</font>**A to ATGCTGgt.../..agG**<font color="red">_</font>**A
		: _**NOTE**_: it is allowed to describe the variant as c.8delG
	*	c.6+1del
		: the deletion of the G nucleotide at the exon/intron border in the sequence ATGCTG**<font color="red">g</font>**t.../..agGGA to ATGCTG**<font color="red">_</font>**t.../..agAAG (not c.8del [_see Q&A_](/recommendations/DNA/variant/deletion/#6del))
		: _**NOTE**_: it is allowed to describe the variant as c.6+1delG
*	c.4072-1234\_5146-246del
	: a deletion of nucleotides c.4072-1234 to c.5146-246 removing exon 30 (starting at position c.4072) to exon 36 (ending at position c.5145) of the DMD-gene.
	: _**NOTE**_ : c.4072-1234\_5146-246delXXXXX, the size of the deletion (XXXXX) **should not** be described
*	c.(4071+1\_4072-1)\_(5145+1\_5146-1)del
	: a deletion of exon 30 (starting at position c.4072) to exon 36 (ending at position c.5145) of the DMD-gene. The deletion break point has **not been sequenced**. Exons 29 (ending at c.4071) and 37 (starting at nucleotide c.5146) have been tested an shown to be **not deleted**. The deletion therefore starts in intron 29 (position c.4071+1 to c.4072-1) and ends in intron 36 (position c.5145+1 to c.5156-1).
	: _**NOTE**_ : this description is part of proposal [_SVD-WG003 (undecided)_](/bg-material/consultation/svd-wg003).
	: _**NOTE**_ : previously, the suggestion was made to describe such deletions using the format c.4072-?\_5154+?del. However, since c.4072-? indicates "**to an unknown postion 5' of c.4072**" and c.5154+? "**to an unknown postion 3' of c.5154**" this description is not correct when it is known that exons 29 and 37 are present.
*	c.(?\_-30)\_(12+1\_13-1)del
	: a deletion starting somewhere upstream of a gene, last postion tested postive c.-29, and ending in the intron between nucleotides c.12+1 and c.13-1 (intron 1).
*	c.(?\_-1)\_(\*1\_?)del
	: a deletion of the entire protein coding region of a gene based on a coding DNA reference sequence).
	: _**NOTE**_: when more details are available regarding the deletion, based on the probes tested to determine its location, the description can be specified like c.(?\_-189)\_(\*884\_?)del, meaning the deletion starts 5' of c.-189 and extends 3' of c.\*884.
*	g.186\_188=/del
	: a mosaic case where from position 186 to 188 besides the normal sequence also chromosomes are found containing a deletion of this sequence
*	g.186\_188=//del
	: a chimeric case, i.e. the sample is a mix of cells containing g.186\_188= and g.186\_188del
