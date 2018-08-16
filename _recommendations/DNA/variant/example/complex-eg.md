---
parent: DNA
title: complex (HGVS/ISCN)
category: example
---

The basis of the examples is from Community Consultation proposal [_SVD-WG004_](/bg-material/consultation/svd-wg004/). To simplify descriptions genomic reference sequences are indiacted as e.g. "chr4" (representing NC\_000010.10 (hg19))

*	**translocations**
	*	**balanced**
		*	t(2;11)(p25.1;p15.2)
		:	_(involving short arms chromosomes 2 and 11)_
		:	g.[chr2:pter\_8247756::chr11:15825273\_cen\_qter]  (der11)
		:	and g.[chr11:pter\_15825272::chr2:8247757\_cen\_qter]  (der2)
		*	t(2;11)(q31.1;q22.3)
		:	_(involving long arms chromosomes 2 and 11, with 5 bp deletion of chr11 sequence)_
		:	g.[chr2:pter\_cen\_174500098::chr11:108111987\_qter]  (der2)
		:	and g.[chr11:pter\_cen\_108111981::chr2:174500099\_qter]  (der11)
		:	_**NOTE:**_	coupling chr11:108111981 to 108111987 implies nucleotides 108111982\_108111986 are deleted
		*	t(3;14)(14qter->14q12::3p22.2->3qter;14pter->14q12::3p22.2->3pter)
		:	_(between short arm chromosome 3 and long arm chromosomes 14, with an inserted sequence at the break point on the derivative chromosome 3)_
		:	g.[chr14:pter\_cen\_29745313::chr3:pter\_36969141inv]  (der14)
		:	and g.[chr14:29745314\_qterinv::CATTTGTTCAAATTTAGTTCAAATGA::chr3:36969142\_cen\_qter]  (der3)
		*	t(9;9)(9qter->9q22.33::9p21.2->9qter;9pter->9q22.33::9p21.2->9pter)
		:	_(between homologous chromosomes, based on [Ordulu et al. example](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
		:	g.[chr9:102425452\_qterinv::chr9:26393002\_cen\_qter]
		:	and g.[chr9:pter\_cen\_102425451::chr9:26393001pterinv]
	*	**unbalanced**
		*	der(2)t(2;11)(p25.1;p15.2)
		:	_(derivative chromosome 2, translocation between short arms chromosomes 2 and 11)_
		:	g.chr2:pter\_8247756delinschr11:pter\_15825266
		*	der(3)(3pter->3q25.32::8q24.21->8qter)
		:	_(derivative chromosome 3, translocation between long arms chromosomes 3 and 8, with an estimated nucleotide range for the break point on chromosome 8, based on Uncertain Break point Localization example from [Ordulu et al.](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
		:	g.chr3:158573187\_qterdelinschr8:(128534000\_128546000)\_qter
		*	der(5)t(5;10)(p13.3;q21.3)
		:	_(derivative chromosome 5, translocation between short arm chromosome 5 and long arm chromosome 10 with homology at the break point (chr5 29658440\_29658442 and chr10 67539995\_67539997), based on Homology examples in [Ordulu et al.](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
		:	g.chr5:pter\_29658442delinschr10:67539995\_qterinv
*	**inversion, pericentric**
	*	inv(6)(pter->p25.3::q16.1->p25.3::q16.1->qter)
	:	_(with substitution at break point)_
	:	chr6:g.[776788\_93191545inv;93191546T>C]
	*	inv(2)(pter->p22.3::q31.1->p22.3::q31.1->qter)dn
	:	_(de novo, with 275bp deletion and 1bp insertion at break points)_
	:	chr2:g.[32310435\_32310710del;32310711\_171827243inv;insG]
	:	_**NOTE:**_	the HGVS description does not include the de novo occurence of the variant
*	**deletion**
	*	del(X)(q21.31q22.2)
	:	_(within a chromosome, breakpoint not sequenced)_
	:	chrX:g.(86200001\_103700000del
	*	r(22)(p11.1q13.1)
	:	_(ring chromosome derived from chromosome 22, breakpoint not sequenced)_
	:	chr22:g.pter\_(12200001|_14700000)del::(37600001\_410000000\_qterdel
	:	_**NOTE:**_	"::" is used to indicate the join instead of ";" to describe two not connected deletions
*	**insertion**
	*	**duplication**  (tandem)
		*	dup(8)(q24.21q24.22)
		:	_(within a chromosome, breakpoint not sequenced)_
		:	chr8:g.(127300001\_131500000)\_(131500001\_136400000)dup
		*	dup(8)(q24.22q24.21)
		:	_(within a chromosome, orientation reversed relative to original sequence, breakpoint not sequenced)_
		:	chr8:g.(131500001\_136400000)ins(127300001\_131500000)\_(131500001\_136400000)inv
	*	**insertion**
		*	der(4)ins(4;X)(q28.3;q22.2q21.31)
		:	_(inserted sequence reversed in orientation relative to chromosome sequence containing centromere)_
		:	g.chr4:134850793\_134850794inschrX:89555676\_100352080inv
	*	**transposition**
		*	**balanced**  (deletion + insertion elsewhere)
			*	ins(4;X)(q28.3;q21.31q22.2)
			:	_(balanced intrachromosomal, inserted sequence same orientation as chromosome sequence containing centromere, based on [Ordulu et al. Fig.1C](http://ac.els-cdn.com/S0002929714001724/1-s2.0-S0002929714001724-main.pdf))_
			:	g.[chr4:134850793\_134850794inschrX:89555676\_100352080] and chrX:g.[89555676\_100352080del]
			*	ins(4;X)(q28.3;q22.2q21.31)
			:	_(balanced intrachromosomal, inserted sequence reversed in orientation relative to chromosome sequence containing centromere)_
			:	g.[chr4:134850793\_134850794inschrX:89555676\_100352080inv] and chrX:g.[89555676\_100352080del]
		*	**unbalanced**  (copy inserted elsewhere)
			:	describe as insertion
*	**additional chromosome**
	*	+r(22)(p11.1q13.1)
	:	_(supernumerary ring chromosome derived from chromosome 22, breakpoint not sequenced)_
	:	chr22:g.[pter\_(12200001|_14700000)del::(37600001\_410000000\_qterdel]add
	*	46,XY,upd(14)mat
	:	_(uniparental disomy, additional copy of maternal chromosome 14)_
	:	chr14:g.[pter\_cen\_qter]add
	:	_**NOTE:**_	the HGVS description does not include the maternal origin of the additional chromosome
