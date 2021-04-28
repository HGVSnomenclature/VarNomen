---
layout: default-md
title: SVD-WG010
category: SVD-WG
---

## Community Consultation

### Proposal SVD-WG009 (var distance)

*	Status: <font color="red">open</font>
	:	proposal SVD-WG010 opened for **Community Consultation** on May 1 (2021), will close on June 30 (2021). 

* * *

The proposal suggests to simplify the HGVS nomenclature recommendations for the description of two variants which are close to eachother
	*	two variants separated by less then two nucleotides should be described as a “delins”.


According to the current recommendations, the description of two variants which are close to eachother depends on whether they are in a protein coding sequence or not.

*	making a discrimination between variants in protein-coding and non-coding sequences is undesired and makes application of the recommendations unnecessarily complex.
*	the proposal does ensure that tools predicting the consequences of a variant at the protein level do not make conflicting and incorrect predictions (e.g. c.235_237delinsTAT (p.Lys79Tyr) versus c.[235A>T;237G>T] (p.[Lys79*;Lys79Asn])

The current recommendation is:
*	two variants separated by one or more nucleotides should be described individually and **not** as a "delins"
*	_**exception:**_ two variants separated by one nucleotide, together affecting one amino acid, should be described as a "delins"

* * *

#### Examples

*	LRG\_199t1:c.235\_237delinsTAT 
	:	variants c.235A>T and c.237G>T are separated by less then two nucleotides and described as a "delins" variant (both affect the same amino acid residue).
*	NC\_000023.10:g.32862927\_32862929delinsATA 
	:	variants g.32862927C>A and g.32862929T>A are separated by less then two nucleotides and described as a "delins" variant .
*	LRG\_199t1:c.992\_1004delinsAC 
	:	variants c.992_1002del and c.1004T>C are separated by less then two nucleotides and described as a "delins" variant (both affect the same amino acid residue).
	