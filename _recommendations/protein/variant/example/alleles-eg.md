---
parent: Protein
title: alleles
category: example
---

For more examples [_see DNA alleles_](/recommendations/DNA/variant/alleles/).

*	p.[Ser73Arg;Asn603del]
	: a protein allele contains two different variants, p.Ser73Arg and p.Asn603del. The variants are found **in cis**.
*	p.[(Ser73Arg;Asn603del)]
	: a protein allele contains two different predicted variants, p.Ser73Arg and p.Asn603del. The predicted variants are found **in cis**.
	: _**NOTE**_: the parentheses are placed **inside** of the allele brackets
	: _**NOTE**_: the description p.([Ser73Arg;Asn103del]) is not correct
*	p.[Ser73Arg;(Asn603del)]
	: a protein allele contains two different variants, p.Ser73Arg and predicted variant p.Asn103del. The variants are found **in cis**.
*	p.[Ser73Arg];[Asn603del]
	: the two protein alleles each contain a different variant, p.Ser73Arg and p.Asn603del. A **heterozygous** case (compound heterozygote, e.g. in a recessive disease). The variants are found **in trans**.
*	p.[(Ser73Arg)];[(Asn603del)]
	: the two protein alleles each contain a different predicted variant, p.(Ser73Arg) and p.(Asn603del). A **heterozygous** case (compound heterozygote, e.g. in a recessive disease). The variants are found **in trans**.
	: _**NOTE**_: the parentheses are placed inside of the allele brackets
	: _**NOTE**_: the description p.([Ser73Arg];[Asn603del]) is not correct
*	p.[Ser73Arg];[Ser73Arg]
	: both protein alleles contain the same variant, p.Ser73Arg. A **homozygous** case (e.g. in a recessive disease).
*	p.(Ser73Arg)(;)(Asn603del)
	: two predicted protein variants are found, p.(Ser73Arg) and p.(Asn603del), but it is not known whether they derive from the same or from different alleles (chromosomes).
	: _**NOTE**_: when it is not known on which allele a variant is, allele brackets should not be used
*	p.[Ser73Arg];[Ser73=]
	: one protein allele contains a variant, p.Ser73Arg, the other protein allele contains the reference sequence, Ser73= (is **wild-type**).
	: _**NOTE**_: for other variant types the format is p.[Ser73del];[Ser73=], p.[Ser73_Arg79dup];[Ser73_Arg79=], p.[Ser73_Ala74insSerGln];[Ser73_Ala74=], etc.
	: _**NOTE**_: using p.[=] would mean the entire protein reference sequence was tested and found not changed
*	p.[Ser73Arg];[(?)]
	: one protein allele contains a variant, p.Ser73Arg, while a variant for the other protein allele is expected but not yet identified (p.(?)) (e.g. in individuals affected by a recessive disease).
*	p.[Asn26His,Ala25\_Gly29del]
	: two different proteins, p.Asn26His and p.Ala25\_Gly29del, derived from a variant on one chromosome (c.76A>T at the DNA level and r.[76a>c,73_88del] at the RNA level)
*	p.[Arg83=/Arg83Ser]
	: a somatic case where a protein allele in some cells has a normal sequence (Arg83=), while other cells have a Ser at this position (Arg83Ser)  
*	p.[Arg83=//Arg83Ser]
	: a chimeric organism where a protein allele in one cell type has a normal sequence (Arg83=), while the other cell type has a Ser at this position (Arg83Ser).
