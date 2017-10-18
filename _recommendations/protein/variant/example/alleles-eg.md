---
parent: Protein
title: alleles
category: example
---

For more examples [_see DNA alleles_](/recommendations/DNA/variant/alleles/).

*	NP_003997.1:p.[Ser68Arg;Asn594del]
	:	a protein allele contains two different variants, p.Ser68Arg and p.Asn594del. The variants are found **in cis**.
*	NP_003997.1:p.[(Ser68Arg;Asn594del)]
	:	a protein allele contains two different predicted variants, p.Ser68Arg and p.Asn594del. The predicted variants are found **in cis**.
	:	_**NOTE**_: the parentheses are placed **inside** of the allele brackets
	:	_**NOTE**_: the description p.([Ser68Arg;Asn594del]) is not correct
*	NP_003997.1:p.[Ser68Arg;(Asn594del)]
	:	a protein allele contains two different variants, p.Ser68Arg and predicted variant p.Asn594del. The variants are found **in cis**.
*	NP_003997.1:p.[Ser68Arg];[Asn594del]
	:	the two protein alleles each contain a different variant, p.Ser68Arg and p.Asn594del. A **heterozygous** case (compound heterozygote, e.g. in a recessive disease). The variants are found **in trans**.
*	NP_003997.1:p.[(Ser68Arg)];[(Asn594del)]
	:	the two protein alleles each contain a different predicted variant, p.(Ser68Arg) and p.(Asn594del). A **heterozygous** case (compound heterozygote, e.g. in a recessive disease). The variants are found **in trans**.
	:	_**NOTE**_: the parentheses are placed inside of the allele brackets
	:	_**NOTE**_: the description p.([Ser68Arg];[Asn594del]) is not correct
*	NP_003997.1:p.[Ser68Arg];[Ser68Arg]
	:	both protein alleles contain the same variant, p.Ser68Arg. A **homozygous** case (e.g. in a recessive disease).
*	NP_003997.1:p.(Ser68Arg)(;)(Asn594del)
	:	two predicted protein variants are found, p.(Ser68Arg) and p.(Asn594del), but it is not known whether they derive from the same or from different alleles (chromosomes).
	:	_**NOTE**_: when it is not known on which allele a variant is, allele brackets are not used
*	NP_003997.1:p.Ser68Arg;[(Ser68Arg)]
	:	analysis detects one variant (p.Ser68Arg), suggesting both alleles (chromosomes) contain this variants but it can not be excluded the other allele is deleted.
*	NP_003997.1:p.[Ser68Arg];[Ser68=]
	:	one protein allele contains a variant, p.Ser68Arg, the other protein allele contains the reference sequence, Ser68= (is **wild-type**).
	:	_**NOTE**_: for other variant types the format is p.[Ser68del];[Ser68=], p.[Ser68_Arg70dup];[Ser68_Arg70=], p.[Ser68_Ala74insSerGln];[Ser68_Ala74=], etc.
	:	_**NOTE**_: using p.[=] would mean the entire NP_003997.1 protein reference sequence was tested and found not changed
*	NP_003997.1:p.[Ser68Arg];[(?)]
	:	one protein allele contains a variant, p.Ser68Arg, while a variant for the other protein allele is expected but not yet identified (p.(?)) (e.g. in individuals affected by a recessive disease).
*	NP_003997.1:p.[Lys31Asn,Val25\_Lys31del]
	:	two different proteins, p.Lys31Asn and p.Val25\_Lys31del, derived from a variant on one chromosome (c.93G>T at the DNA level and r.[83g>u,73\_93del] at the RNA level)
*	NP_003997.1:p.[Arg49=/Arg49Ser]
	:	a somatic case where a protein allele in some cells has a normal sequence (Arg49=), while other cells have a Ser at this position (Arg49Ser)  
*	NP_003997.1:p.[Arg49=//Arg49Ser]
	:	a chimeric organism where a protein allele in one cell type has a normal sequence (Arg49=), while the other cell type has a Ser at this position (Arg49Ser).
