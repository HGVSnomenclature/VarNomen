---
layout: default-md
title: Uncertain
order: 6
---

# {{page.title}}

HGVS recommendations also contain suggestions to describe variants for which not all details are available. Missing details may include unsequenced deletion/duplication breakpoints (e.g. detected using FISH, an array, a MLPA assay, Southern blotting, etc.), variants reported on the protein level only or variants that likely affect RNA splicing but for which RNA was not analysed. This page summarises how to describe variants when not all information is available.

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

*	position
	:	When a variant has been identified but it can not be mapped to a unique location, possible descriptions should be given separated by a "**<font color="red">^</font>**" (caret)
	*	NM\_000517.4:c.424C>T^NM\_000558.3:c.424C>T
	:	describes variant c.427T>C which is either in the HBA2 (NM\_000517.4) or the HBA1 (NM\_000558.3) gene
	*	NC\_000023.10:g.33038277C>T^33038278C>T  (LRG\_199t1:c.71G>A^72G>A) 
	:	describes the variant Trp24* in the DMD gene reported on protein level only
*	deletion
	:	The standard format to describe a deletion for which the break point has not been sequenced is (A\_B)\_(C\_D)del, where B\_C describes the **minimal** extent and A\_D to **maximal** extent of the deletion/duplication.
	*	**PCR**
	:	In PCR a pair of oligonucleotides (the primers) is used to detect the presence (amplification) of a specific sequence (target). Amplification will fail when one or both primers do not hybridise to the target sequence either because the target sequence is absent (deleted) or because there are differences between the sequence of the target and the primer.
		*	size
		:	when a fragment containing a deletion has been amplified but only its size was determined (and not its sequence), the variant should be reported as g.(position-fragment-start\_position-fragment-end)del(#). In this description "position-fragment-start" is the first nucleotide of the amplified fragment (i.e. after the last nucleotide of the forward primer), "position-fragment-last" is the last nucleotide of the amplified fragment (i.e. before the first nucleotide of the reverse  primer) and “#” the difference in size (or estimated size) in nucleotides compared to the fragment in the reference sequence.
			*	NC\_000003.12:g.(63912602\_63912844)del(15) or NM\_000333.3:c.(4\_246)del(15)
			:	compared to the reference the amplified fragment is nine nucleotides shorter giving an estimated 7-unit CAG/Gln repeat in the ATXN7 gene. Format based on [_Repeated sequences_](/recommendations/DNA/variant/repeated/)
		*	present/absent
		:	when a deletion was detected based on the presence/absence of a specific amplification product (PCR) it is described as (position-last-normal-PCR\_position-first-altered-PCR)\_(position-last-altered-PCR\_position-first-normal-PCR). In this description "position-last-normal-PCR" is the last nucleotide of the amplified fragment, "position-first-altered-PCR" is the first nucleotide of the amplified fragment, "position-last-PCR" is the last nucleotide of the amplified fragment and "position-first-normal-PCR" is the first nucleotide of the amplified fragment.
		:	_**NOTE**_: an amplified fragment runs from the first nucleotide after the forward primer to first nucleotide before the reverse primer.
	*	MLPA
	:	An MLPA assay is used to detect Copy Number Variants (CNVs), the number of copies of a sequence present in a sample. In MLPA a pair of oligonucleotide probes is used to determine the copy number of a specific sequence (mostly an exon). In the first step of a MLPA assay the two flanking oligonucleotide probes hybridising to a target sequence are fused by ligation. In the second step the ligated oligonucleotides are amplified in a quantitative PCR assay. When the signal of a probe is absent it indicates the pair of oligonucleotide sequences could not be ligated. Ligation will fail when one or both oligonucleotides did not hybridise to the target sequence either because the target sequence is absent (deleted) or because there are differences between the sequence of the target and the oligonucleotide probes. _**NOTE**_: in samples containing 2 alleles a decreased signal usually indicates the absence (deletion) of one allele.
		*	description of the variant detected use the basic format **(position-last-normal-probe\_position-first-altered-probe)\_ (position-last-altered-probe\_position-first-normal-probe)**.  In this description the **"probe position"** is 3’ nucleotide of the ligation site.
		:	_**NOTE**_: in diagnostics it is common practice to describe MLPA results using a so-called exon-based description. In this description, when a probe is affected, it is assumed the entire exon is affected and the description is based on the location of the exon/intron borders (exception: large exons measured using several MLPA probes).
		:	_**NOTE**_: The ["Reading frame checker"](https://databases.lovd.nl/shared/){:target="\_blank"} offered through the gene home pages of the "GVsharedLOVD" might be a useful tool to generate exon-based descriptions (e.g. for the [DMD gene](https://databases.lovd.nl/shared/scripts/readingFrameChecker.php?gene=DMD&transcript=NM_004006.2){:target="\_blank"}.
	*	array (CGH or SNP)
	:	An array can be used to detect Copy Number Variants (CNVs), the number of copies of a sequence present in a sample. In array technology hybridisation to arrayed probe sequences is used to determine presence or absence of these sequences (target) in samples analysed. Hybridisation will fail when the target sequence is absent (deleted) or because there are differences between the sequence of the target and the probe. **NOTE**_: in samples containing 2 alleles a decreased signal usually indicates the absence (deletion) of one allele.
		*	description of the variant detected uses the basic format **(position-last-normal-probe\_position-first-altered-probe)\_ (position-last-altered-probe\_position-first-normal-probe)**. In this description the **"probe position"** is based on the position of the nucleotide tested (SNP array) or the center of the arrayed probe (CGH array). Similar, alternative descriptions have been suggested by the [ISCN guidelines](http://www.karger.com/Article/FullText/353118){:target="\_blank"}. Note also that more examples can be found under [_Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/), including array-characterised translocations.
			*	NC\_000023.10:g.(32218983\_32238146)\_(32984039\_33252615)del
			:	a deletion on the X chromosome, based on reference genome build hg19 (reference sequence NC\_000023.10), starting between nucleotides 32,218,983 to 32,238,146 and ending between nucleotides 32,984,039 to 33,252,615.
			*	NC\_000023.10:g.(?\_32238146)\_(32984039\_?)del
			:	a deletion on the X chromosome, based on reference genome build hg19, starting upstream of nucleotide 32,238,146 and ending downstream of nucleotide 32,984,039.
			:	_**NOTE**_: from the description indicated it is unclear how far the deletion extends, suggesting no up- or downstream probes were tested (and scored positive).
			*	NC\_000013.11:g.(19385993\_19394916)\_(25045592\_25059364)del
			:	a deletion on chromosome 13, based on reference genome build hg38, detected using a SNP-array. The deletion spans from dbSNP entries rs3929856 (g.19394916) to rs10507342 (g.25045592), both yielding a 50% reduced signal. On the centromeric side (q-arm) the closest probe tested normal was rs2342234 (g.19385993), on the telomeric side the closest probe tested normal was rs947283 (g.25059364).
			*	NC\_000013.11:g.(?\_19394916)\_(25045592\_?)del
			:	a deletion on chromosome 13, based on reference genome build hg38, detected using a SNP-array. The deletion spans from rs3929856 (g.19394916) to rs10507342 (g.25045592). The description indicates no flanking probes were tested normal, making it unclear how far the deletion extends.
	*	FISH
	:	In Fluorescent In-Situ Hybridisation (FISH) presence or absence of sequences is analysed by microscopic visualisation of a fluorescently labeled probe hybridising to a target sequence. Hybridisation will fail when the target sequence is absent (deleted) or will be weak when only part of the target sequence is present. **NOTE**_: in samples containing 2 alleles both alleles can be visualised independently.
		*	rearrangements detected using FISH (Fluorescence In Situ Hybridisation) can be described using [ISCN guidelines](http://www.karger.com/ISCN2016){:target="\_blank"}. When probe positions are known, variants can be described using genomic coordinates. The basic format is **(position-last-normal-probe\_position-first-variant probe)\_(position-last-variant-probe\_position-first-normal-probe)** ([_see also ISCN<>HGVS_](/bg-material/consultation/svd-wg004/)). In this description the **"probe position"** is based on the center of the labelled probe used during hybridisation.
			*	NC\_000023.10:g.(32057077\_32364657)\_(32975163\_33394206)del
			:	a deletion on the X-chromosome detected using FISH. The deletion, based on reference genome build hg38, spans from PAC probes RP4-556A22 (central position g.32364657) to RP11-151J4 (central position 32975163), both yielding no signal. On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-509C1 (g.32057077), on the centromeric side the closest probe tested positive was RP6-60B16 (g.33394206).
			*	NC\_000023.10:g.(?\_32364657)\_(32975163\_?)del
			:	a deletion on the X-chromosome detected using FISH. The deletion, based on reference genome build hg38, spans from PAC probes RP4-556A22 (central position g.32364657) to RP11-151J4 (central position 32975163), both yielding no signal. No flanking positive probes were tested, making it unclear how far the deletion extends.
			*	chrX:g.(32057077\_32364657)\_(32894352\_33055973)del
			:	a deletion on the X-chromosome detected using FISH. The deletion, based on reference genome build hg38, spans from PAC probe RP4-556A22 (central position g.32364657) to within RP11-151J4 (g.32894352_33055973), as indicated by the reduced signal. On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-509C1 (g.32057077).
	*	Southern blotting
	:	In Southern blotting presence or absence of sequences is analysed by hybridisation of a labeled probe sequence to paper-blotted DNA fragments separated by size using gel-electrophoresis after fragmentation by restriction enzyme digestion. Hybridisation will fail when the target sequence is absent (deleted) or will be weak when only part of the target sequence is present. Sometimes, details on the size of a deletion can be derived from the length of the hybridising fragment.  _**NOTE**_: in samples containing 2 alleles a decreased signal usually indicates the absence (deletion) of one allele.
		*	description of the variant detected uses the basic format **(position-last-normal-probe\_position-first-altered-probe)\_ (position-last-altered-probe\_position-first-normal-probe)**.  In this description the **"probe position"** is based on the center of the labelled probe used during hybridisation and/or the position of the restriction enzyme recognition sites of the DNA fragment.

*	**insertion**
	:	the format to describe insertions that have not been fully characterised (sequenced) depends on the method used. The same recommendations apply as described above for deletions.
	*	size
	:	when a fragment containing an insertion has been amplified but only its size was determined (and not its sequence), the variant should be reported as g.(position-fragment-start\_position-fragment-end)ins(#).
		:	NC\_000003.12:g.(63912602\_63912844)ins(15) or NM\_000333.3:c.(4\_246)ins(15) where compared to the reference the amplified fragment is nine nucleotides larger giving an estimated 13-unit CAG/Gln repeat in the ATXN7 gene
	*	present/absent
	:	the format to describe insertions that have not been fully characterised, i.e. the inserted sequence and/or the insertion break point has not been sequenced, is **g.(left-ins-position\_right-ins-position)ins(last-normal\_first-inserted)\_(last-inserted\_first-normal)**
	:	_**NOTE**_: the description of the insertion, "ins(last-normal\_first-inserted)\_(last-inserted\_first-normal)", is based on the uncertainty of the extent of the inserted sequence. To describe the inserted sequence, follow the standard recommendations, i.e. try to describe it as precise as possible.
		*	NC\_000002.11:g.47643464\_47643465ins[NC\_000022.10:35788169\_35788352]
		:	the insertion on chromosome 2, between nucleotides g.47643464 and g.47643465 (in the MSH2 gene), of sequences from chromosome 22, nucleotides g.35788169 to g.35788352 (of the HMOX1 gene).
		*	NC\_000002.11:g.?\_?ins[NC\_000022.10:35788169\_35788352]
		:	the insertion of sequences from chromosome 22, nucleotides g.35788169 to g.35788352 (of the HMOX1 gene) at an unknown position in chromosome 2.

*	**duplication**
	:	the standard format to describe a duplicaion for which the break point has not been sequenced is (A\_B)\_(C\_D)dup, where B\_C describes the **minimal** extent and A\_D to **maximal** extent of the duplication.
	:	_**NOTE**_: many assay detect the presence of an **additional copy** of specific sequences, not the location of the extra copy. When there is **no evidence** the additional copy is **in tandem** with the original copy but might be anywhere in a genome, the variant should be described as an **insertion** (see above). 
		*	the format to describe duplications that have not been fully characterised, i.e. the duplication break point has not been sequenced, is: **g.(last-normal\_first-duplicated)\_(last-duplicated\_first-normal)dup**.
	
* * *

#### RNA

*	r.?
	:	used to indicate that an effect on the RNA level is expected but that it is not possible to give a reliable prediction of the consequences
*	r.spl
	:	frequently used to indicate that it is **very likely** that splicing is affected (RNA not analysed). The format is used for variants changing the +1, +2, -2 and -1 position of an intron, i.e. affecting the GT splice donor and AG splice acceptor site (excl. GT to GC and GC to GT variants)
*	r.(spl?)
	:	frequently used to indicate that splicing **might** be affected (RNA not analysed). The format is used for variants in the first/last nucleotide of an exon, the +3 to +6 intron position (splice donor site) and variants generating a new AG-dinucleotide directly upstream of a splice acceptor site (AG).
*	r.(?)
	:	frequently used to indicate that RNA was not analysed but that no changes on the RNA level are expected other than those simply derived from the change at the DNA level. Alternatively the predicted consequence at the RNA level can be described like e.g. r.(306g>u)

* * *

#### Protein

*	p.?
	:	used to indicate that an effect on the protein level is expected but that it is not possible to give a reliable prediction of the consequences
*	p.(?)
	:	used to indicate that no changes on the protein level are expected other than those simply derived from the change at the DNA level. Alternatively the predicted consequence at the protein level can be described, e.g. p.(Arg2371Ser)
*	p.(Ala123\_Pro131)\*
	:	used to describe that at an unknown position between amino acids Ala123 and Pro131 an amino acid is substituted for a translation termination (stop) codon
*	p.(Ala123\_Pro131)fs
	:	used to describe there is a frame shift variant starting at an unknown position between amino acids Ala123 and Pro131
*	p.(Ala123\_Pro131)ins(4).
	:	used to describe there is an insertion of four unknown amino acids at an unknown position between amino acids Ala123 and Pro131
*	p.Gly719(Ala^Ser)fs\*23
	:	used to describe there is a frame shift variant starting at an unknown position in the codon for amino acid Gly719
*	p.(Gly23Glufs\*7^Gly23Cysfs\*26)
	:	used to describe there is a predicted frame shift variant starting in the codon for amino acid Gly23 giving either p.(Gly23Glufs\*7) or p.(Gly23Cysfs\*26)
	
