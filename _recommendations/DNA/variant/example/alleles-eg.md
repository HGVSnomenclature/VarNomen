---
parent: DNA
title: alleles
category: example
---

*	LRG_199:g.[2376G>C;3103del]
	: one allele (chromosome) of a gene contains two different changes, g.2376G>C and c.3103del. The variants are found **in cis**.
*	LRG_199:g.[2376G>C];[3103del]
	: the two alleles (chromosomes) of a gene each contain a different change, g.2376G>C and g.3103del. A **heterozygous** case (compound heterozygote, e.g. in a recessive disease). The variants are found **in trans**.
*	LRG_199:g.2376[G>C];[G>C]
	: both alleles (chromosomes) of a gene contain the same variant, g.2376G>C. A **homozygous** case (e.g. in a recessive disease).
*	LRG_199:g.2376G>C(;)3103del
	: two variants in a gene, g.2376G>C and g.3103del, but it is not known whether they are on the same or on different alleles (chromosomes).
	: _**NOTE**_: when it is not known on which allele a variant is, allele brackets should not be used
*	LRG_199:g.2376[G>C];[(G>C)]
	: analysis detects one variant (g.2376G>C), suggesting both alleles (chromosomes) contain this variants but it can not be excluded the other allele is deleted.
*	LRG_199:g.2376[G>C];[=]
	: one allele (chromosome) of a gene contains a variant, g.2376G>C, the other allele (chromosome) contains the reference sequence, g.2376= (is **wild-type**).
	: _**NOTE**_: the description g.[2376G>C];[=], containing g.2376G>C and g.=, is different since it indicates the entire genomic reference sequence was tested and the only variant identified was g.2376G>C (on one allele).
	: _**NOTE**_: for other variant types the format is g.2376[del];[=], g.2376_2399[dup];[=], g.2376_2377[insGT];[=], etc.
*	LRG_199:g.2376[G>C];[?]
	: one allele (chromosomes) of a gene contains a variant, g.2376G>C, while a variant for the other allele is expected but not yet identified (g.?) (e.g. in individuals affected by a recessive disease).
*	g.[266C>G;476C>T;1083G>C];[266C>G;1083G>C]
	: a sample contains variants g.266C>G and g.1083G>C on both alleles (chromosomes) and variant g.476C>T on only one allele.
*	g.[266C>G;476C>T];[476C>T]\(;)1083G>C
	: a sample contains a homozygous variant (g.476C>T) and two heterozygous variants (g.266C>G and 1083G>C) for which it is not known on which allele (chromosome) they are.
*	g.[266C>G];[476C>T]\(;)1083G>C(;)1406del
	: a sample contains heterozygous variants on different alleles (g.266C>G and g.476C>T) and two additional heterozygous variants (g.1083G>C and 1406del) for which it is not known on which allele (chromosome) they are.
*	chrX:g.[30683643A>G;33038273T>G]
	: one allele (X-chromosome) contains two different changes in two different genes, g.30683643A>G in the GK gene and g.33038273T>G in the DMD gene.
*	c.[NM\_000167.5:94A>G;NM\_004006.2:76A>C]
	: one allele (X-chromosome) contains two different changes in two different genes, NM\_000167.5:c.94A>G in the GK and NM\_004006.2:c.76A>C in the DMD gene.
