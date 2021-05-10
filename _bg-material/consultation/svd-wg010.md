---
layout: default-md
title: SVD-WG010
category: SVD-WG
---

## Community Consultation

### Proposal SVD-WG010 (var distance)

*	Status: <font color="red">open</font>
	:	proposal SVD-WG010 opened for **Community Consultation** on May 15 (2021), will close on July 31 (2021). 

* * *

The proposal suggests to simplify the HGVS nomenclature recommendations for the description of two variants which are close to eachother

*	two variants separated by fewer than three nucleotides should be described as a “delins”
	:	_**NOTE:**_ to determine the distance between two variants both their most 5' and 3' positions should be considered, where 'fewer than three' is the shortest distance: the variant AGCGTTTAGC to AG<font color="red">G</font>GTTT<font color="red">T</font>AGC is described as g.3_4delinsGGT, not als g.[3C>G;7dup]
	:	_**NOTE:**_ the recommendation applies on DNA, RNA and protein level

According to the current recommendations, the description of two variants which are close to eachother depends on whether they are in a protein coding sequence or not.

*	making a discrimination between variants in protein-coding and non-coding sequences **is undesired** and makes application of the recommendations unnecessarily complex.
*	the proposal **does ensure** that tools predicting the consequences of a variant at the protein level do not make conflicting and incorrect predictions (e.g. c.235_237delinsTAT (p.Lys79Tyr) versus c.[235A>T;237G>T] (p.[Lys79*;Lys79Asn])

_**NOTE:**_ the current recommendation is:
*	two variants separated by one or more nucleotides should be described individually and **not** as a "delins"
*	_**exception:**_ two variants separated by one nucleotide, together affecting one amino acid, should be described as a "delins"

* * *

#### Examples

*	LRG\_199t1:c.235\_236delinsTAT 
	:	variants c.235A>T and c.236A>T are separated by fewer then two nucleotides and described as a "delins" variant (both affect the same amino acid residue)
	:	_**NOTE:**_	when the method used does not allow to determine whether the variants are on the same allele or not the variant should be described as LRG\_199t1:c.235A>T(;)237G>T ([_see Alleles_](/recommendations/DNA/variant/alleles/))
*	LRG\_199t1:c.235\_237delinsTAT 
	:	variants c.235A>T and c.237G>T are separated by fewer then two nucleotides and described as a "delins" variant (both affect the same amino acid residue)
*	LRG\_199t1:c.[235A>T;238G>T]
	:	variants c.235A>T and c.238G>T are separated by three nucleotides and described as separate variants, not as "delins" (c.235_235delinsTAGT)
*	NC\_000023.10:g.32862927\_32862929delinsATA 
	:	variants g.32862927C>A and g.32862929T>A are separated by fewer then two nucleotides and described as a "delins" variant
*	LRG\_199t1:c.992\_1004delinsAC 
	:	variants c.992\_1002del and c.1004T>C are separated by fewer then two nucleotides and described as a "delins" variant
	
*	NP\_003997.1:p.Ser988\_Gln900delinsAlaLeuHis
	:	variants p.Ser988 and p.Gln900 (LRG\_199t1:c.[2962T>G;2970A>T]) are separated by fewer then two amino acids and described as a "delins" variant, not as p.[Ser988Ala;Gln900His]

