---
layout: default-md
title: Uncertain
order: 6
---

# {{page.title}}

HGVS recommendations also contain suggestions to describe variants for which not all details are available. Missing details may include unsequenced deletion breakpoints (e.g. detected using FISH, a SNP-array or an MLP assay), variants reported on the protein level only or variants that probably affect RNA splicing but RNA was not available for analysis. This page summarises how to describe variants when not all information is available.

* * *

### Characters used

*	"**<font color="red">( )</font>**" (parentheses)
	:	are used to indicate uncertainties
	*	in g.(123456\_234567)\_(345678\_456789)del the extent (region) of uncertainty for the location of the deletion breakpoint, where (123456\_234567) and (345678\_456789) indicate the two regions where the break point should be located
	*	in p.(Cys123Gly) indicating the amino acid change is predicted from DNA level data (no experimental proof)
<br><br>
*	"**<font color="red">?</font>**" (question mark)
	:	is used to indicate unknown positions (nucleotide or amino acid), like in g.(?\_234567)\_(345678\_?)del
*	"**<font color="red">^</font>**" (caret)
	:	is used as “or”, like p.(Gly719Ala^Ser)
*	IUPAC codes
	:	all IUPAC nucleotide codes can be used to describe uncertain nucleotides ([_see Standards_](/bg-material/standards/))

* * *

### Examples

<a name="uncertain1"></a>

#### DNA

*	deletion
	:	The basic format to describe deletions that have not been fully characterised (sequenced) depends on the method used.
	*	**PCR**
		*	size
		:	when a fragment containing a deletion has been amplified but only its size was determined (and not its sequence), the variant should be reported as **g.(position-fragment-start\_position-fragment-end)del(#)** with "#" indicating the size (or estimated size) of the deletion in nucleotides. Example NM\_002111.6:c.(-12\_262)del(6).
		* present/absent
		:	when a deletion based was detected based on the presence/absence of specific sequences tested it is described as **(position-last-normal-PCR\_position-first-altered-PCR)\_(position-last-altered-PCR\_position-first-normal-PCR)**. The description of the uncertain part (the range of uncertainty) should be as precise as possible. When for a specific probe/primer/sequence tested it is difficult to give an exact nucleotide position, the rule of thumb is to **use the central nucleotide**.
		:	In PCR a pair of oligonucleotides (the primers) is used to detect the presence (amplification) of a specific sequence (target). Amplification will fail when one or both primers did not hybridize to the target sequence either because the target sequence is absent (deleted) **or** by differences between the target and primer sequence.
		:	For variant descriptions the recommendation is to indicate **presence at the 5' side** using the central position of the 3' primer, **presence at the 3' side** using the central nucleotide of 5' primer , **absence at the 5' side** using the central nucleotide of the 5' primer and **absence at the 3' side** using the central nucleotide of the 3' primer. For details and examples [_see Deletions_](/recommendations/DNA/variant/deletion/).
		:	_**NOTE**_: when, like in MLPA (see below), one primer pair is used per exon it is allowed to assume the entire exon is affected (deleted or duplicated) and to base the description on the location of the exon/intron borders.
	*	MLPA
	:	The description uses the basic format **(position-last-normal-probe\_position-first-altered-probe)\_ (position-last-altered-probe\_position-first-normal-probe)**.
	:	In MLPA a pair of short oligonucleotides is used to detect the copy number of a specific sequence (mostly an exon). When the signal of a probe is decreased or absent it indicates that the pair of oligo nucleotide sequences could not be ligated. Ligation will fail when one or both oligonucleotides did not hybridize to the target sequence either because the target sequence is absent (deleted) **or** by differences between the target and probe sequence.
	:	_**NOTE**_: in diagnostics it is common practice to describe MLPA results as a change affecting the entire exon. When the exact probe location would be used, variant description is precise but rather complex and difficult to understand. Furthermore, assuming the MLPA probe pair used hybridizes from position c.3211 to c.3266, which location should be used (only part of the target sequence might be deleted)?  To make descriptions not too complicated, when an exon probe is affected, it is therefore **allowed** to assume the entire exon is affected (deleted) and to base the description on the locations of the exon/intron borders (exception; large exons are measured using several probes).
	:	_**NOTE**_: when a probe location is used the recommendation is to use the central position, i.e. for MLPA the 3' nucleotide of the probe ligation site. For detailed descriptions and examples [_see Deletions_](/recommendations/DNA/variant/deletion/).
	*	array (CGH or SNP)
	:	genomic rearrangements detected using arrays (CGH or SNP arrays) can be described using teh [ISCN guidelines](http://www.karger.com/Article/FullText/353118){:target="\_blank"}. In most cases the probe sequences used are known and the variants can be described using genomic coordinates;  **(position-last-normal\_position_first-altered)\_ (position-last-altered\_position-first-normal)**.
		*	chrX:g.(32218983\_32238146)\_(32984039\_33252615)del (hg19, NC\_000023.10)
		:	a deletion on the X chromosome, based on reference genome build hg19 (reference sequence NC\_000023.10), starting between nucleotides 32,218,983 to 32,238,146 and ending between nucleotides 32,984,039 to 33,252,615.
		*	chrX:g.(?\_32238146)\_(32984039\_?)del (hg19, NC\_000023.10)
		:	a deletion on the X chromosome, based on reference genome build hg19, starting upstream of nucleotide 32,238,146 and ending downstream of nucleotide 32,984,039.
		:	_**NOTE**_: the description indicated it is unclear how far the deletion extends, suggesting no up- or downstream probes were tested (and scored positive).
		*	chr13:g.(18858133\_18867056)\_(24517730\_24531502)del (hg19)
		:	a deletion on chromosome 13 detected using a SNP-array. The deletion spans from dbSNP entries rs3929856 (g.18867056) to rs10507342 (g.24517730), both yielding a 50% reduced signal. On the centromeric side (q-arm) the closest probe tested normal was rs2342234 (g.18858133), on the telomeric side the closest probe tested normal was rs947283 (g.24531502).
		*	chr13:g.(?\_18867056)\_(24517730\_?)del
		:	a deletion detected using a SNP-array spanning from rs3929856 (g.18867056) to rs10507342 (g.24517730). The description indicates no flanking probes were tested normal, making it unclear how far the deletion extends.
	*	FISH
	:	genomic rearrangements detected using FISH (Fluorescence In Situ Hybridisation) can be described using [ISCN guidelines](http://www.karger.com/ISCN2016){:target="\_blank"}. When probe positions are known, variants can be described using genomic coordinates ([_see also ISCN<>HGVS_](/bg-material/consultation/svd-wg004/)). The basic format is **(position-last-normal-probe\_position-first-variant probe)\_(position-last-variant-probe\_position-first-normal-probe)**.
		*	chrX:g.(32249998\_32382824)\_(33024065\_33412373)del (hg19, NC\_000023.10)
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5, central position g.32382824) to RP11-151J4 (GenBank AL451144.5, central position 33024065), both yielding no signal. On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-64I1 (GenBank AC096506.5, g.32249998), on the centromeric side the closest probe tested positive was RP6-60B16 (GenBank AL050305.9, g.33412373).
		*	chrX:g.(?\_32382824)\_(33024065\_?)del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5, g.32382824) to RP11-151J4 (GenBank AL451144.5, g.33024065), both yielding no signal. No flanking positive probes were tested, making it unclear how far the deletion extends.
		*	chrX:g.(32249998\_32382824)\_(32974012\_33074118)del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5, g.32382824) to within RP11-151J4 (GenBank AL451144.5, g.32974012_33074118). On the telomeric side (p-arm) the closest probe tested normal was PAC RP11-64I1 (GenBank AC096506.5, g.32249998). On the centromeric side the probe RP11-151J4 (GenBank AL451144.5) gave a reduced signal, indicating that the breakpoint lies **in this clone**.
	*	Southern blotting
	:	usually the sequence of the probe(s) used is known (or can be determined easily), can be linked to a genomic reference sequence and the deletion can therefore be described using the standard format **(position-last-normal-probe\_position-first-altered-probe)\_(position-last-altered-probe\_position-first-normal-probe)**. For details and examples [_see Deletions_](/recommendations/DNA/variant/deletion/).

*	**insertion**
	*	size
	:	when a fragment containing an insertion has been amplified but only its size was determined (and not its sequence), the variant should be reported as **g.(position-fragment-start\_position-fragment-end)ins(#)** with "#" indicating the size (or estimated size) of the insertion in nucleotides. Example NM\_002111.6:c.(-12\_262)ins(12).
	*	present/absent
	:	the basic format to describe insertions that have not been fully characterised, i.e. the inserted sequence and/or the insertion break point has not been sequenced, is **g.(last-normal\_first-normal)ins(first-inserted_last-inserted)**. The description of the site of the insertion, g.(last-normal\_first-normal), gives the range of uncertainty of its position. When the insertion site is not known, e.g. when an assay only detects an additional copy of a sequence, the suggestion is to describe the insertion site as "g.?\_?". For the inserted sequence follow the standard recommendations, i.e. try to describe it as precise as possible, including regions of uncertainty. A possible description might then be like g.?\_?insNC\_000023.10:(12345\_23456)\_(34567\_45678).

*	duplication
	:	when there is **no evidence** the additional copy is **in tandem** with the original copy but might be anywhere in a genome, the variant should be described as an **insertion** (see above).  The basic format to describe duplications that have not been fully characterised, i.e. the duplication break point has not been sequenced, is: **g.(last-normal\_first-duplicated)\_(last-duplicated\_first-normal)dup**. The description of the uncertain part (the range of uncertainty) should be as precise as possible. When for a specific probe/primer/sequence tested it is difficult to give an exact nucleotide position, the rule of thumb is to **use the central nucleotide**. For examples see deletions (above). 

* * *

#### RNA

*	r.?
	:	used to indicate that an effect on the RNA level is expected but that it is not possible to give a reliable prediction of the consequences
*	r.spl
	:	frequently used to indicate that it is **very likely** that splicing is affected (RNA not analysed). The format is used for variants changing the +1, +2, -2 and -1 position of an intron, i.e. affecting the GT splice donor and AG splice acceptor site (excl. GT to GC and GC to GT variants)
*	r.(spl?)
	:	frequently used to indicate that splicing **might** be affected (RNA not analysed). The format is used for variants in the first or last nucleotide of an exon, the +3 to +5 intron position (splice donor site) and variants generating a new AG-dinucleotide directly upstream of the splice acceptor site (AG).
*	r.(?)
	:	frequently used to indicate that RNA was not analysed but that no changes on the RNA level are expected other then those simply derived from the change at the DNA level. Alternatively the predicted consequence at the RNA level can be described, e.g. r.(306g>u)

* * *

#### protein

*	p.?
	:	used to indicate that an effect on the protein level is expected but that it is not possible to give a reliable prediction of the consequences
*	p.(?)
	:	used to indicate that no changes on the protein level are expected other then those simply derived from the change at the DNA level. Alternatively the predicted consequence at the protein level can be described, e.g. p.(Arg2371Ser)
