---
parent: DNA
title: complex (HGVS/ISCN)
category: example
---

The basis of the examples is from Community Consultation proposal [_SVD-WG004_](/bg-material/consultation/svd-wg004/). To simplify descriptions genomic reference sequences may be indicated as "chrX" (representing NC\_000023.11 (hg38)). For the HGVS descriptions we only use full reference sequence identifiers. Note that in HGVS the variant detected is described, while ISCN describes more the structure of the resulting chromosome(s).

*	**translocations**
	*	**balanced**
		*	t(2;11)(p25.1;p15.2)
		:	_(involving short arms chromosomes 2 and 11)_
		:	chr2:g.pter\_8,247,756::chr11:g.15,825,273\_cen\_qter (der11) and chr11:g.pter\_15,825,272::chr2:g.8,247,757\_cen\_qter (der2)
		:	using HGVS the variant is reported as NC\_000002.12:g.8247756::NC\_000011.10:g.15825273 (der11) and NC\_000011.10:g.15825272::NC\_000002.12:g.8247757
		*	t(2;11)(q31.1;q22.3)
		:	_(involving long arms chromosomes 2 and 11, with 5 bp deletion of chr11 sequence)_
		:	chr2:g.pter\_cen\_174500098::chr11:g.108111987\_qter (der2) and chr11:g.pter\_cen\_108111981::chr2:g.174500099\_qter  (der11)
		:	_**NOTE:**_	coupling chr11:108111981 to 108111987 implies nucleotides 108111982\_108111986 are deleted
		:	using HGVS the variant is reported as NC\_000002.12:g.174500098::NC\_000011.10:g.[108111982\_108111986del;108111987] (der2) and NC\_000011.10:g.108111981::NC\_000002.12:g.174500099 (der11)
		*	t(3;14)(14qter->14q12::3p22.2->3qter;14pter->14q12::3p22.2->3pter)
		:	_(between short arm chromosome 3 and long arm chromosomes 14, with an inserted sequence at the break point on the derivative chromosome 3)_
		:	chr14:g.pter\_cen\_29,745,313::chr3:g.pter\_36,969,141inv (der14) and chr14:g.29,745,314\_qterinv::CATTTGTTCAAATTTAGTTCAAATGA::chr3:g.36,969,142\_cen\_qter (der3)
		:	using HGVS the variant is reported as NC\_000014.9:g.29745313::NC\_000003.12:g.36969141inv (der14) and NC\_000014.9:g.[29745314inv;insCATTTGTTCAAATTTAGTTCAAATGA]::NC\_000003.12:g.36969142 (der3)
		*	t(9;9)(9qter->9q22.33::9p21.2->9qter;9pter->9q22.33::9p21.2->9pter)
		:	_(between homologous chromosomes, based on [Ordulu et al. example](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
		:	chr9:g.102425452\_qterinv::chr9:g.26393002\_cen\_qter and chr9:g.pter\_cen\_102425451::chr9:g.26393001pterinv
		:	using HGVS the variant is reported as NC\_000009.12:g.102425452inv::NC\_000009.12:g.26393002 and NC\_000009.12:g.102425451::NC\_000009.12:g.26393001inv
	*	**unbalanced**
		*	der(2)t(2;11)(p25.1;p15.2)
		:	_(derivative chromosome 2, translocation between short arms chromosomes 2 and 11)_
		:	chr2:g.pter\_8,247,756delins[chr11:g.pter\_15,825,266]
		:	using HGVS the variant is reported as NC\_000002.12:g.pter\_8247756delins[NC\_000011.10:g.pter\_15825266]
		*	der(3)(3pter->3q25.32::8q24.21->8qter)
		:	_(derivative chromosome 3, translocation between long arms chromosomes 3 and 8, with an estimated nucleotide range for the break point on chromosome 8, based on uncertain break point localization example from [Ordulu et al.](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
		:	chr3:g.158573187\_qterdelins[chr8:g.(128534000\_128546000)\_qter]
		:	using HGVS the variant is reported as NC\_000003.12:g.158573187\_qterdelins[NC\_000008.11:g.(128534000\_128546000)\_qter]
		*	der(5)t(5;10)(p13.3;q21.3)
		:	_(derivative chromosome 5, translocation between short arm chromosome 5 and long arm chromosome 10 with homology at the break point (chr5 29658440\_29658442 and chr10 67539995\_67539997), based on Homology examples in [Ordulu et al.](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
		:	chr5:g.pter\_29658442delins[chr10:g.67539995\_qterinv]
		:	using HGVS the variant is reported as NC\_000005.10:g.29658442delins[NC\_000010.11:g.67539995\_qterinv]
*	**inversion, pericentric**
	*	inv(6)(pter->p25.3::q16.1->p25.3::q16.1->qter)
	:	_(with substitution at break point)_
	:	using HGVS the variant is reported as NC\_000006.12:g.[776788\_93191545inv;93191546T>C]
	*	inv(2)(pter->p22.3::q31.1->p22.3::q31.1->qter)dn
	:	_(de novo, with 275 bp deletion and 1 bp insertion at break points)_
	:	using HGVS the variant is reported as NC\_000002.12:g.[32310435\_32310710del;32310711\_171827243inv;insG]
	:	_**NOTE:**_	the HGVS description does not include the de novo occurence of the variant
*	**deletion**
	*	del(X)(q21.31q22.2)
	:	_(within a chromosome, breakpoint not sequenced)_
	:	using HGVS the variant is reported as NC_000023.11:g.(86200001\_103700000)del
	*	r(22)(p11.1q13.1)
	:	_(ring chromosome derived from chromosome 22, breakpoint not sequenced)_
	:	using HGVS the variant is reported as NC\_000022.11:g.pter\_(12200001\_14700000)del::(37600001\_410000000)\_qterdel
	:	_**NOTE:**_	"::" is used to indicate the join instead of ";" to describe two not connected deletions
*	**insertion**
	*	**duplication**  (tandem)
		*	dup(8)(q24.21q24.22)
		:	_(within a chromosome, breakpoint not sequenced)_
		:	using HGVS the variant is reported as NC\_000008.11:g.(127300001\_131500000)\_(131500001\_136400000)dup
		*	dup(8)(q24.22q24.21)
		:	_(within a chromosome, orientation reversed relative to original sequence, breakpoint not sequenced)_
		:	using HGVS the variant is reported as NC\_000008.11:g.(131500001\_136400000)ins[(127300001\_131500000)\_(131500001\_136400000)inv]
	*	**insertion**
		*	der(4)ins(4;X)(q28.3;q22.2q21.31)
		:	_(inserted sequence reversed in orientation relative to chromosome sequence containing centromere)_
		:	using HGVS the variant is reported as NC\_000004.12:g.134850793\_134850794ins[NC\_000023.11:g.89555676\_100352080inv]
	*	**transposition**
		*	**balanced**  (deletion + insertion elsewhere)
			*	ins(4;X)(q28.3;q21.31q22.2)
			:	_(balanced intrachromosomal, inserted sequence same orientation as chromosome sequence containing centromere, based on [Ordulu et al. Fig.1C](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
			:	using HGVS the variant is reported as NC\_000004.12:g.134850793\_134850794ins[NC\_000023.11:g.89555676\_100352080] and NC\_000023.11:g.89555676\_100352080del
			*	ins(4;X)(q28.3;q22.2q21.31)
			:	_(balanced intrachromosomal, inserted sequence reversed in orientation relative to chromosome sequence containing centromere)_
			:	using HGVS the variant is reported as NC\_000004.12:g.134850793\_134850794ins[NC\_000023.11:g.89555676\_100352080inv] and NC\_000023.11:g.89555676\_100352080del
		*	**unbalanced**  (copy inserted elsewhere)
			:	describe as insertion
*	**additional chromosome**
	*	+r(22)(p11.1q13.1)
	:	_(supernumerary ring chromosome derived from chromosome 22, breakpoint not sequenced)_
	:	using HGVS the variant is reported as NC\_000022.11:g.[pter\_(12200001\_14700000)del::(37600001\_410000000)\_qterdel]add
	
