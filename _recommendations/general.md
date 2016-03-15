---
layout: default-md
title: General
order: 1
---

# {{page.title}}

Since references to web sites are not yet acknowledged as citations, please mention [_Den Dunnen et al., 2016. HGVS recommendations for the description of sequence variants: 2016 update. Hum.Mutat. 25: in press_](XXX) when referring to these pages.

Note that although the examples on these pages mainly give examples for human (_Homo sapiens_), the recommendations can be applied to **all species**.

* * *

### General recommendations

*	all variants should be described at the most basic level, **the DNA level**. Descriptions at the RNA and/or protein level may be given in addition.
    *	descriptions should make clear whether the change was **experimentally determined** or **theoretically deduced** (predicted). 
*	all variants should be described in relation to an accepted **reference sequence** ([_see Reference Sequences_](/bg-material/refseq)).
	*	a **letter prefix** should be used to indicate the reference sequence used. Accepted prefixes are;
		*	"**g.**" for a genomic reference sequence
		*	"**m.**" for a mitochondrial reference sequence
		*	"**c.**" for a coding DNA reference sequence	
		*	"**n.**" for a non-coding reference sequence
		*	"**r.**" for an RNA reference sequence
		*	"**p.**" for a protein reference sequence
    *	the reference sequence file used should be **public and clearly described**, e.g. NC_000023.10, LRG_199, NG_012232.1, ENST00000357033, NM_004006.2, NR_002196.1, NP_003997.1, etc.
    	*	when variants are not reported in relation to a genomic reference sequence based on a recent genome build, the preferred reference sequence is a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org)**.
    	*	when no LRG is available, one should be requested ([_see Reference Sequences_](/bg-material/refseq)).
    *	the reference sequence used must contain the residue(s) described to be changed. 
*	numbering of the residues (nucleotide or amino acid) in relation to the reference sequence used should **follow the approved scheme** ([_see Numbering_](/bg-material/numbering))
*	for a clear distinction, descriptions at DNA, RNA and protein level are **unique**
	*	**DNA-level**: in capitals, starting with a number referring to the first nucleotide affected and using [IUPAC-IUBMB assigned nucleotide symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); g.12345A>T, [_see DNA_](/recommendations/DNA))
	*	**RNA-level**: in lower-case, starting with a number referring to the first nucleotide affected and using [IUPAC-IUBMB assigned nucleotide symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); r.76a>u [_see RNA_](/recommendations/RNA))
	*	**protein level**: in capitals, starting with a letter referring to first the amino acid affected and using [IUPAC-IUBMB assigned amino acid symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); p.Lys76Asn, [_see protein_](/recommendations/protein))
		*	preferably use **three-letter amino acid code** ([_see Standards_](/bg-material/standards/#aacode))
*	**3'rule**: for all descriptions the most 3' position possible is arbitrarily assigned to have been changed
	*	the 3'rule also applies for changes in single residue stretches or tandem repeats  (nucleotide or amino acid)
*	**prioritisation**: when a description is possible according to several types, the preferred description is: (1) deletion, (2) inversion, (3) duplication, (4) conversion, (5) insertion.
	* when a variant can be described as a duplication or an insertion, prioritisation determines it should be described as a duplication.
*	only **approved [HGNC gene symbols](http://www.genenames.org)** should be used to describe genes or proteins.

* * *

####Characters used

In HGVS nomenclature some **characters** have a **specific meaning**

*	"**<font color="red">+</font>**" (plus) is used in [_nucleotide numbering_]((bg-material/numbering/)
*	"**<font color="red">-</font>**" (minus) is used in [_nucleotide numbering_]((bg-material/numbering/)
*	"**<font color="red">*</font>****" (asterisk) is used in [_nucleotide numbering_]((bg-material/numbering/) and to indicate a translation termination (stop) codon [_see Standards_](/bg-material/standards#RNAcode)
*	"**<font color="red">_</font>**" (underscore) is used to indicate a range; g.12345**<font color="red">_</font>**12678del or c.123**<font color="red">_</font>**124insG
*	"**<font color="red">[ ]</font>**" (angled brackets) are used for alleles (see [_DNA_](/recommendations/DNA/variant/alleles), [_RNA_](/recommendations/RNA/variant/alleles), [_protein_](/recommendations/protein/variant/alleles))
	*	"**<font color="red">;</font>**" (semi colon) is used to separate variants or alleles
	*	"**<font color="red">,</font>**" (comma) is used to separate different transcripts/proteins derived from one allele
*	"**<font color="red">:</font>**" (colon) is used to separate the reference sequence file identifier (_accession.version_number_) from the actual description of a variant; NC_000011.9**<font color="red">:1</font>**g.12345611G>A
*	"**<font color="red">( )</font>**" (parentheses) are used to indicate uncertainties, e.g. when the exact position of a change is not known; g.(1267_1270)insG<br>
	_**NOTE**_: the range of the uncertainty should be described as precisely as possible [_see below_](#uncertain1)
*	"**<font color="red">?</font>**" (question mark) is used to indicate unknown positions (nucleotide or amino acid); g.12345_(23456_?)del
*	"**<font color="red"></font>**" (caret) is used as "or" in the back translation of protein variants to DNA level descriptions; c.(370A>C**<font color="red"></font>**372C>R) as back translation of p.Ser124Arg
*	"**<font color="red">&gt;</font>**" (greater then) is used to describe substitution variants (DNA and RNA level); g.12345A>T, r.123a>u (for details see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
*	"**<font color="red">{ }</font>**" (curly braces), under discussion ([_see Open Issues_](/recommendations/open-issues#imperfectcopy)), for the description of variant nucleotides in an otherwise perfect copy sequence; g.24_65dup**<font color="red">{</font>**46G>T**<font color="red">}</font>**	
*	"**<font color="red">=</font>**" (equals) is used to indicate a sequence was tested but not changed; g.12345A=, c.456C=, n.567G=, r.789u=, p.Arg234=
*	"**<font color="red">/</font>**" (forward slash) is used to indicate mosaicism [_see Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/))
*	"**<font color="red">//</font>**" (double forward slash) is used to indicate chimerism [_see Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/))

* * *

####Abbreviations in variant descriptions

Specific abbreviations are used to describe different variant types.

*	"**<font color="red">&gt;</font>**" (greater then) indicates a **substitution** (DNA and RNA level); g.12345A>T, r.123a>u (for details see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
	*	a substitution at the protein level is described as p.Ser321Arg (see [_protein_](/recommendations/protein/variant/substitution)) 
*	"**<font color="red">del</font>**" indicates a **deletion**; c.76delA (for detailes see [_DNA_](/recommendations/DNA/variant/deletion), [_RNA_](/recommendations/RNA/variant/deletion), [_protein_](/recommendations/protein/variant/deletion))
*	"**<font color="red">dup</font>**" indicates a **duplication**; c.76dupA (for detailes see [_DNA_](/recommendations/DNA/variant/duplication), [_RNA_](/recommendations/RNA/variant/duplication), [_protein_](/recommendations/protein/variant/duplication))
*	"**<font color="red">ins</font>**" indicates an **insertion**; c.76_77insG (for detailes see [_DNA_](/recommendations/DNA/variant/insertion), [_RNA_](/recommendations/RNA/variant/insertion), [_protein_](/recommendations/protein/variant/insertion))
	*	duplicating insertions are described as duplications, not as insertions	
*	"**<font color="red">inv</font>**" indicates an **inversion**; c.76_83inv (for detailes see [_DNA_](/recommendations/DNA/variant/inversion), [_RNA_](/recommendations/RNA/variant/inversion))
*	"**<font color="red">con</font>**" indicates a **conversion**; NC_000022.10:g.42522624_42522669con42536337_42536382 (for detailes see [_DNA_](/recommendations/DNA/variant/conversion), [_RNA_](/recommendations/RNA/variant/conversion), [_protein_](/recommendations/protein/variant/conversion))
*	"**<font color="red">fs</font>**" indicates a **frame shift**; p.Arg456Gly**<font color="red">fs</font>**Ter17 ([_for detailes see Frame shifts_](/recommendations/protein/frameshift))
*	"**<font color="red">ext</font>**" indicates an **extension**; p.Met1**<font color="red">ext</font>**-5 ([_for detailes see Frame shifts_](/recommendations/protein/extension))

*	HGVS/ISCN ([_see Community Consultation_](http://www.hgvs.org/mutnomen/comments004.html))
	*	"**<font color="red">add</font>**" indicates an **additional** chromosome (marker chromosome)
	*	"**<font color="red">cen</font>**" indicates the **centromere** of a chromosome (cen)
	*	"**<font color="red">chr</font>**" indicates a **chromosome**; chr11:g.12345611G>A (NC_000011.9)
	*	"**<font color="red">pter</font>** indicates the **first nucleotide** of a chromosome (**pter**)
	*	"**<font color="red">qter</font>**" indicates the **last nucleotide** of a chromosome (**qter**)
	*	"**<font color="red">t</font>**" indicates a **translocation**

* * *

###Discussions

*	Some papers and web sites use a "-" (minus) to indicate a range, is this correct?
:	The sign used to indicate a range is "_" (underscore) and not a "-" (minus). The minus sign should only be used as a minus in the description of variants based on a coding DNA reference sequence. **c.12-14del** describes a deletion of nucleotide -14 in the intron directly preceding cDNA nucleotide 12, **not a deletion of nucleotides c.12 to c.14**.

*	Why is it recommended to use **three-letter amino acid code** to describe protein variants?
:	Several amino acids start with the same initial letter (**<font color="red">A</font>**la, **<font color="red">A</font>**rg, **<font color="red">A</font>**sn, **<font color="red">A</font>**sp start with **<font color="red">A</font>**, **<font color="green">G</font>**ln, **<font color="green">G</font>**lu, **<font color="green">G</font>**ly with **<font color="green">G</font>**, **<font color="blue">L</font>**eu, **<font color="blue">L</font>**ys with **<font color="blue">L</font>**, **<font color="red">P</font>**he, **<font color="red">P</font>**ro with **<font color="red">P</font>** and **<font color="green">T</font>**hr, **<font color="green">T</font>**yr with **<font color="green">T</font>**) but in one-letter amino acid code this letter is used as abbreviation for only one. In practice this leads to many mistakes. It is therefore better to use three-letter amino acid code. 

<a name="uncertain1"></a>

*	Can I describe a deletion when I have not yet sequenced the break point?
:	Yes, using the characters to indicate uncertainties, i.e. the question mark ("**<font color="red">?</font>**") and brackets ("**<font color="red">( )</font>**"), such cases can be described. Describe the range of uncertainty as precise as possible. When for a specific probe/sequence tested it is difficult to give an exact nucleotide position, the rule of thumb is to use the central nucleotide.
The basic format to describe un-sequenced deletions is: **(last-positive_first-negative)_ (last-negative_first-positive)**. Descriptions differ based on the technology used to detect the rearrangement:
	*	FISH
	:	Genomic rearrangements detected using FISH (Fluorescence In Situ Hybridisation) can be described using [_ISCN guidelines_](XXX). When the probe sequence are known, variants can also be described using genomic coordinates;   **(position-last-positive-position-clone_first-negative-clone)_ (position-last-negative-clone_position-first-positive-clone)**.
		*	chrX:g.(AC096506.5_AL109609.5)_(AL451144.5_AL050305.9)del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5) to RP11-151J4 (GenBank AL451144.5), both yielding no signal. On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-64I1 (GenBank AC096506.5), on the centromeric side the closest probe tested positive was RP6-60B16 (GenBank AL050305.9). _**NOTE**_ g.(AC096506.5_AL109609.5)del indicates that the deletion breakpoint is somewhere between the sequences AC096506.5 and AL109609.5 (PAC-derived) and gives a direct link to the genome.
		:	The deletion can also be described directly in relation to the genome sequence as hg19 chrX:g.(32218983_32238146)_(32984039_33252615)del, i.e. (genomic-end-position-last-positive-clone_genomic-start-position-first-negative-clone)_ (genomic-end-position-last-negative-clone_genomic-start-position-first-positive-clone). Note that although this description is more precise, the information regarding the probe sequences used can not be derived from the description and needs to be reported separately. 
		*	chrX:g.(?_AL109609.5)_(AL451144.5_?)del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5) to RP11-151J4 (GenBank AL451144.5), both yielding no signal. No flanking positive probes were tested, making it unclear how far the deletion extends (compare with previous description).
		*	chrX:g.(AC096506.5_AL109609.5)_AL451144.5del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5) to RP11-151J4 (GenBank AL451144.5). On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-64I1 (GenBank AC096506.5), while RP4-556A22 (GenBank AL109609.5) tested negative. On the centromeric side the probe RP11-151J4 (GenBank AL451144.5) gave a reduced signal, indicating that the breakpoint lies **in this clone** (note that this identifier is not between brackets).
        :	An alternative description is chrX:g.(AC096506.5_AL109609.5)_AL451144.5:g.(1_100207)del where AL451144.5:g.(1_100207) indicates that the range where the deletion junction lies spans nucleotides 1 to 100,207. One can argue whether this addition is very informative.
	*	Southern blotting
	:	Usually the sequence of the probe(s) used is known (or can be determined easily), can be linked to a genomic reference sequence and the rearrangement can be described using the format **(position-last-positive-probe_position-first-negative-probe)_ (position-last-negative-probe_position-first-positive-probe)**.
	*	array (CGH or SNP)
	:	Genomic rearrangements detected using arrays (CGH or SNP arrays) can be described using [_ISCN guidelines_](XXX). In most cases the probe sequence are known and the variants can also be described using genomic coordinates;   **(position-last-positive-position-clone_first-negative-clone)_ (position-last-negative-clone_position-first-positive-clone)**.
		*	chrX:g.(32218983_32238146)_(32984039_33252615)del (hg19)
		:	a deletion on the X chromosome, based on reference genome build hg19, starting between nucleotides 32,218,983 to 32,238,146 and ending between nucleotides 32,984,039 to 33,252,615.
		*	chrX:g.(?_32238146)_(32984039_?)del (hg19)
		:	a deletion on the X chromosome, based on reference genome build hg19, starting upstream of nucleotide 32,238,146 and ending downstream of nucleotide 32,984,039.
		:	_**NOTE**_: the description leaves it thus unclear how far the deletion might extend, suggesting no up- or downstream probes were tested (and scored positive).
		*	chr13:g.(18,858,133_18,867,056)_(24,517,730_24,531,502)del (hg19)
		:	alternatively g.(rs2342234_rs3929856)_(rs10507342_rs947283)del
		:	a deletion on chromosome 13 detected using a SNP-array. The deletion spans from dbSNP entries rs3929856 to rs10507342, both yielding no signal. On the centromeric side (q-arm) the closest probe tested positive was rs2342234, on the telomeric side the closest probe tested positive was rs947283. Although the alternative description based on the human genome nucleotide numbering is more precise, the information regarding the probe sequences used is lost. 
		*	chr13:g.(?_18,867,056)_(24,517,730_?)del (hg10)
		:	alternatively g.(?_rs3929856)_(rs10507342_?)del
		:	a deletion detected using an array spanning from dbSNP entries rs3929856 to rs10507342. The description assumes no flanking positive probes were tested, making it unclear how far the deletion extends.
	*	MLPA
	:	The description uses the basic format **(position-last-positive-probe_position-first-negative-probe)_ (position-last-negative-probe_position-first-positive-probe)**. In MLPA a pair of short oligonucleotides is used to detect the copy number of a speficic sequence (mostly an exon). Effectively, when the signal for a probe is decreased, it only indicates that the pair of oligo nucleotide sequences could not be ligated. Ligation probably failed because either or both oligonucleotides did not hybridize to the 20-30 nucleotide target sequence. It is common practice, after excluding other variants in the probe binding sequence when only 1 exon probe is affected, to describe the result as a change affecting the entire exon. When the exact probe location would need to be used, variant description become too complex to be useful. Furthermore, assuming the MLPA probe pair used hybridizes from position c.3211 to c.3266, which location should be used, only part of the target sequence might be deleted. To make descriptions not too complicated, it is therefore **allowed** to assume the entire exon is affected (deleted or duplicated) and to base the description on the exon/intron borders.<br>
_**NOTE**_: when a probe location is used the recommendation is to use the central position. For details [_see Deletions_](/recommendations/DNA/variant/deletion/) or [_Duplications_](/recommendations/DNA/variant/duplication/).
	*	PCR
	:	The description uses the basic format **(position-last-positive-PCR_position-first-negative-PCR)_ (position-last-negative-PCR_position-first-positive-PCR)**. In PCR a pair of short oligonucleotides is used to detect the presence (amplification) of a speficic sequence (target). Effectively, when PCR fails, it means that either or both oligonucleotides did not hybridize to the 20-30 nucleotide target sequence. For variant descriptions the recommendation is to indicate **presence at the 5' side** using the most 3' nucleotide of the primer pair, **presence at the 3' side** using the most 5' nucleotide of the primer pair, **absence at the 5' side** using the most 5' nucleotide of the primer pair and **absence at the 3' side** using the most 5' nucleotide of the primer pair. For details [_see Deletions_](/recommendations/DNA/variant/deletion/) or [_Duplications_](/recommendations/DNA/variant/duplication/).<br>
_**NOTE**_: when, like in MLPA (see above), one primer pair is used per exon it is allowed to assume the entire exon is affected (deleted or duplicated) and to base the description on the exon/intron borders.

*	Is it correct that when I apply **the 3'rule** "g." and "c." variant descriptions for genes that are on the minus strand of a chromosome may differ regarding the nucleotide that I describe as deleted?
	:	Yes, when a gene is on the minus strand of a chromosome (opposite transcriptional orientation) and the change is located in a repeated sequence (mono-, di-, tri-, etc. nucleotide stretches) the 3'rule has this as a consequence. When the chromosome sequence is -TGGGGCAT- and one of the G's is deleted (change to -TGGG_CAT-) the description based on chromosome coordinates is g.5delG. When the annotated coding DNA reference sequence is on the minus strand (ATGCCCCA) the description is c.7delC. Not only is the deleted nucleotide different (delG vs. delC), in fact the descriptions also point to another nucleotide, g.5 vs. g.2 (equivalent to c.7delC).



