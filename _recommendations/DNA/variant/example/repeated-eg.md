---
parent: DNA
title: repeated sequences
category: example
---

*	unique repeat
	*	sequenced
		*	NC\_000014.8:g.101179660TG[14]
		:	a repeated TG di-nucleotide sequence starting at position g.101179660 on human chromosome 14, with 14 TG copies
		*	NC\_000014.8:g.101179660TG[14];[18]
		:	a repeated TG di-nucleotide sequence starting at position g.101179660 on human chromosome 14, is present with 14 TG copies on one allele and 18 TG copies on the other allele
	*	repeat expansion disorders
		*	unique repeat reference sequence
			*	NM\_023035.2(CACNA1A):c.6955CAG[26]  (or c.6955_6993dup)
			:	a repeated CAG tri-nucleotide sequence starting at position c.6955 in the CACNA1A gene with 26 CAG copies (p.(Gln2319[26] or p.(Gln2319_Gln2331dup))
			:	_**NOTE**_:	when not sequenced but estimated from fragment size the description is NM\_023035.2(CACNA1A):c.(6928\_7020)ins(39), i.e. indicating that at an unknown position between nucleotides c.6928 and c.7020 (the nucleotides amplified) there is an estimated insertion of 39 nucleotides
			*	HD repeat
			:	in literature the Huntington's Disease tri-nucleotide repeat, encoding a poly-Gln repeat on protein level, is known as the CAG repeat. However, based on the HTT (huntingtin) coding DNA reference sequence (GenBank LRG\_763t1 or NM\_002111.8) and applying the **3'rule**, the repeat has to be described as an GCA repeat
				*	LRG\_763t1:c.54GCA[23]
				:	a sequenced GCA tri-nucleotide repeat starting at position c.54 contains 23 units, on protein level described as NP\_002102.4:p.(Gln18)[25]
				:	_**NOTE:**_ the GCA repeat is followed by ACAG extending the encoded Gln-repeat by 2)
*	mixed repeat reference sequence
	*	repeat expansion disorders
		*	HD repeat
		:	LRG\_763t1:54\_149GCA[23]ACA[1]GCC[2]ACC[1]GCC[10]
		:	the allele sequenced from position c.54 to c.149 contains 23 GCA, 1 ACA, 2 GCC, 1 ACC and 10 GCC repeats 
		*	FMR1 repeat
		:	in literature the Fragile-X tri-nucleotide repeat is described as a CGG-repeat. However, based on a coding DNA reference sequence (GenBank NM\_002024.5) and applying the **3'rule**, the repeat has to be described as a mixed GGC-GGA-GGC repeat
			*	NM\_002024.5:c.-128\_-69GGC[10]GGA[1]GGC[9]GGA[1]GGC[10]
			:	a sequenced GGC tri-nucleotide repeat from position c.-128 to c.-69 containing contains 10 GGC, 1 GGA, 9 GGC, 1 GGA and 10 GGC units (31 repeat units)
			*	NM\_002024.5:c.-129CGG[79]
			:	a repeated CGG tri-nucleotide sequence starting at position c.-129 with 79 CAG copies
			:	_**NOTE**_:	by definition, since the reference sequence contains a mixed repeat (CGG and AGG units), the variant description only covers the sequence up to the first AGG interruption (position c.-99). A better description is NM\_002024.5:c.-128\_-69GGC[79]GGA[1]GGC[10]
			*	NM\_002024.5:c.-128GGM[108]
			:	a repeated mixed tri-nucleotide sequence starting at position c.-129 with 108 GGC/GGA copies
			*	NM\_002024.5:c.(-231\_-20)ins(1800\_2400)
			:	the amplified region containing the FMR1 repeat region (between nucleotides c.-231 and c.-20) contains an insertion of 1800 to 2400 nucleotides (600 to 800 GGC/GGA units)
		*	CFTR intron 9
			:	NM\_000492.3:c.1210-33\_1210-6GT[11]T[6]
			:	the mixed repeat sequence form position c.1210-33 to c.1210-6 contains 11 GT and 6 T copies
			:	_**NOTE**_:	when only the variable T-stretch is described the format is NM\_000492.3:c.1210-12T[7] (see Q&A below)
	*	NC\_000012.11:g.112036755\_112036823CTG[9]TTG[1]CTG[13]
	:	a complex repeated sequence from position g.112036755 to g.112036823 on chromosome 12 with first a CTG unit present in 9 copies, then a TTG unit present in 1 copy and then a CTG unit present in 13 copies
*	differing genomic (g.) and coding DNA (c.) descriptions
	:	NC\_000001.10:g.57832719ATAAA[15] and NM\_021080.3:c.-136-75952ATTTT[15] describe the same repeat allele in intron 3 of the DAB1 gene
	:	_**NOTE**_:	based on the **3' rule** and the transcriptional orientation of the gene (minus strand) the description of the repeat units differs
