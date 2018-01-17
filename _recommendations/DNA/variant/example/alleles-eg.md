---
parent: DNA
title: alleles
category: example
---

*	LRG_199t1:c.[2376G>C;3103del]
	:	one allele (chromosome) of a gene contains two different changes, g.2376G>C and c.3103del. The variants are found **in cis**.
*	LRG_199t1:c.[2376G>C];[3103del]
	:	the two alleles (chromosomes) of a gene each contain a different change, c.2376G>C and c.3103del. A **heterozygous** case (compound heterozygote, e.g. in a recessive disease). The variants are found **in trans**.
*	LRG_199t1:c.[2376G>C];[2376G>C]
	:	both alleles (chromosomes) of a gene contain the same variant, c.2376G>C. A **homozygous** case (e.g. in a recessive disease).
		:	_**NOTE**_: it is not allowed to shorten this to c.2376[G>C];[G>C] or even c.2376G>C[];[]
*	LRG_199t1:c.2376G>C(;)3103del
	:	two variants in a gene, c.2376G>C and c.3103del, but it is not known whether they are on the same or on different alleles (chromosomes).
	:	_**NOTE**_: in the latest publication of the recommendations (_[Den Dunnen et al. (2016)_](http://onlinelibrary.wiley.com/doi/10.1002/humu.22981/pdf){:target="\_blank"}) the example given is not correct. Allele brackets should not be used when it is not known whether variants are on one allele or not.
*	LRG_199t1:c.[2376G>C];[(2376G>C)]
	:	analysis detects one variant (c.2376G>C), suggesting both alleles (chromosomes) contain this variants but it can not be excluded the other allele is deleted.
*	LRG_199t1:c.[2376G>C];[2376=]
	:	one allele (chromosome) of a gene contains a variant, c.2376G>C, the other allele (chromosome) contains the reference sequence, c.2376= (is **wild-type**).
	:	_**NOTE**_: the description c.[2376G>C];[=], containing c.2376G>C and c.=, is different since it indicates the entire coding DNA reference sequence was analysed and the only variant identified was c.2376G>C (on one allele).
	:	_**NOTE**_: for other variant types the format is c.[2376del];[2376=], c.[2376_2399dup];[2376_2399=], c.[2376_2377insGT];[2376_2377=], etc.
*	LRG_199t1:c.[2376G>C];[?]
	:	one allele (chromosomes) of a gene contains a variant, c.2376G>C, while a variant for the other allele is expected but not yet identified (c.?) (e.g. in individuals affected by a recessive disease).
*	LRG_199t1:c.[296T>G;476T>C;1083A>C];[296T>G;1083A>C]
	:	a sample contains variants c.296T>G and c.1083A>C on both alleles (chromosomes) and variant c.476C>T on only one allele.
*	NM\_004006.2:c.[296T>G;476T>C];[476T>C]\(;)1083A>C
	:	a sample contains a homozygous variant (c.476T>C) and two heterozygous variants (c.296T>G and c.1083G>C) for which it is not known on which allele (chromosome) they are (although at least one, in the example c.296T>G, is on the same allele as c.476T>C).
*	LRG_199t1:c.[296T>G];[476T>C]\(;)1083G>C(;)1406del
	:	a sample contains heterozygous variants on different alleles (c.296T>G and c.476T>C) and two additional heterozygous variants (c.1083G>C and c.1406del) for which it is not known on which allele (chromosome) they are.
*	NC_000023.10:g.[30683643A>G;33038273T>G]
	:	one allele (X-chromosome) contains two different variants in two different genes, g.30683643A>G in the GK gene and g.33038273T>G in the DMD gene.
