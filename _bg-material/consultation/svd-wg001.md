---
layout: default-md
title: SVD-WG001
category: SVD-WG
---

##Community Consultation

###Proposal SVD-WG001 (no change)

*	Status: <font color="red">accepted</font>
	:	proposal SVD-WG001 was opened for **Community Consultation** on May 14 (2015), closing on Jul.16 (2015). Since no major objections were received the proposal was **accepted** by the SVD-WG on Oct.6 (2015). The proposal is part of the HGVS nomenclature **version 15.11** update.

The proposal suggests to extend the HGVS recommendations to allow description of **variant tested but no change detected** using the character "**=**" (equal to); g.50377648A=, m.15366G=, c.1823A=, n.611T=, r.377u=, p.Val76=. The description should include the position(s) screened (nucleotides or amino acids) and the reference sequence used should always be mentioned.

* * *

####DNA

*	g.11890634G=
	:	a screen was performed showing that nucleotide g.11890634G was a "G" like in the genomic reference sequence (the nucleotide was not changed).
*	c.123G=
	:	a screen was performed showing that nucleotide c.123 was a "G" like in the coding DNA reference sequence (the nucleotide was not changed).
	:	_**NOTE**_: the description c.123G>G is not allowed
*	c.[123G=;456A=;789C=]
	:	a screen was performed showing that nucleotides c.123, c.456 and c.789 (all on the same allele) were identical to the coding DNA reference (the nucleotide was not changed).
*	c.[633G>A];[633G=]
	:	a screen was performed showing that one chromosome carries variant c.633G>A and the other chromosome the reference sequence (a "G").
*	NM\_001849.3:c.1\_\*1=
	:	a screen was performed showing that nucleotides c.1 to c.*1 of the COL6A2 gene (the entire protein coding DNA sequence) were as in coding DNA reference sequence NM\_001849.3 (exons only).
*	LRG\_476:g.4950\_39800=
	:	a screen was performed showing that nucleotides g.4950 to g.39800 of the COL6A2 gene were as in genomic reference sequence LRG\_476 (exons and introns).

####RNA

*	r.473u= &nbsp; (c.473T=)
	:	a screen was performed showing that nucleotide r.473 (on RNA level) was a "u" as in the RNA reference sequence (the nucleotide was not changed).
	:	_**NOTE**_: description of the variant at DNA level is mandatory 

####protein

*	p.(Arg41=) &nbsp; (c.123G>A)
	:	the predicted consequence of variant c.123G>A (DNA level) is that amino acid residue 41 is an "Arg" like in the protein reference sequence (the nucleotide was not changed, RNA was not analysed).
	:	_**NOTE**_: description of the variant at DNA level is mandatory (depending on the amino acid, up to 5 different DNA changes may leave the amino acid unchanged).
