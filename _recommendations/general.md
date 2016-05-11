---
layout: default-md
title: General
order: 1
---

# {{page.title}}

Since references to web sites are not yet acknowledged as citations, please mention Den Dunnen et al. (2016) [HGVS recommendations for the description of sequence variants: 2016 update. Hum.Mutat. 25: 37: 564-569](http://onlinelibrary.wiley.com/doi/10.1002/humu.22981/pdf){:target="\_blank"} when referring to these pages. Note that although the examples on these pages mainly give examples for human (_Homo sapiens_), the recommendations can be applied to **all species**.

* * *

### General recommendations

*	all variants should be described at the most basic level, **the DNA level**. Descriptions at the RNA and/or protein level may be given in addition.
    *	descriptions should make clear whether the change was **experimentally determined** or **theoretically deduced** by giving predicted consequences in parentheses.
*	all variants should be described in relation to an accepted **reference sequence** ([_see Reference Sequences_](/bg-material/refseq)).
	*	a **letter prefix** should be used to indicate the reference sequence used. Accepted prefixes are;
		*	"**g.**" for a genomic reference sequence
		*	"**m.**" for a mitochondrial reference sequence
		*	"**c.**" for a coding DNA reference sequence	
		*	"**n.**" for a non-coding DNA reference sequence
		*	"**r.**" for an RNA reference sequence (transcript)
		*	"**p.**" for a protein reference sequence
    *	the reference sequence file used should be **public and clearly described**, e.g. NC\_000023.10, LRG\_199, NG\_012232.1, ENST00000357033, NM\_004006.2, NR\_002196.1, NP\_003997.1, etc.
    	*	when variants are not reported in relation to a genomic reference sequence from a recent genome build, the preferred reference sequence is a [Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org){:target="\_blank"}
    	*	when no LRG is available, one should be requested ([_see Reference Sequences_](/bg-material/refseq)).
		*	the reference sequence used must contain the residue(s) described to be changed. 
	*	numbering of the residues (nucleotide or amino acid) in relation to the reference sequence used should **follow the approved scheme** ([_see Numbering_](/bg-material/numbering))
*	**3'rule**: for all descriptions the most 3' position possible is arbitrarily assigned to have been changed
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
*	descriptions at DNA, RNA and protein level are clearly different:
	*	**DNA-level** 123456A>T ([_see Details_](/recommendations/DNA)): number(s) referring to the nucleotide(s) affected, nucleotides in CAPITALS using [_IUPAC-IUBMB assigned nucleotide symbols_](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}
	*	**RNA-level** 76a>u ([_see Details_](/recommendations/RNA)): number(s) referring to the nucleotide(s) affected, nucleotides in lower case using [IUPAC-IUBMB assigned nucleotide symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}
	*	**protein level** Lys76Asn ([_see Details_](/recommendations/protein)): the amino acid(s) affected in 3- or 1-letter followed by a number [IUPAC-IUBMB assigned amino acid symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}
			*	**three-letter** amino acid code is preferred ([_see Standards_](/bg-material/standards/#aacode))
*	**prioritisation**: when a description is possible according to several types, the preferred description is: (1) deletion, (2) inversion, (3) duplication, (4) conversion, (5) insertion
	* when a variant can be described as a duplication or an insertion, prioritisation determines it should be described as a duplication
*	only **approved** [HGNC gene symbols](http://www.genenames.org){:target="\_blank"} should be used to describe genes or proteins

* * *

#### Characters used

In HGVS nomenclature some **characters** have a **specific meaning**

*	"**<font color="red">+</font>**" (plus) is used in [_nucleotide numbering_](bg-material/numbering/); c.123+45A>G
*	"**<font color="red">-</font>**" (minus) is used in [_nucleotide numbering_](bg-material/numbering/); c.124-56C>T
*	"**<font color="red">*</font>**" (asterisk) is used in [_nucleotide numbering_](bg-material/numbering/) and to indicate a translation termination (stop) codon ([_see Standards_](/bg-material/standards#RNAcode)); c.*32G>A and P.Trp41* 
*	"**<font color="red">_</font>**" (underscore) is used to indicate a range; g.12345\_12678del
*	"**<font color="red">[ ]</font>**" (angled brackets) are used for alleles (see [_DNA_](/recommendations/DNA/variant/alleles), [_RNA_](/recommendations/RNA/variant/alleles), [_protein_](/recommendations/protein/variant/alleles))
	*	"**<font color="red">;</font>**" (semi colon) is used to separate variants and alleles; g.[123456A>G;345678G>C] or g.[123456A>G];[345678G>C]
	*	"**<font color="red">,</font>**" (comma) is used to separate different transcripts/proteins derived from one allele; r.[123a>t, 122\_154del]
*	"**<font color="red">:</font>**" (colon) is used to separate the reference sequence file identifier (_accession.version\_number_) from the actual description of a variant; NC\_000011.9:g.12345611G>A
*	"**<font color="red">( )</font>**" (parentheses) are used to indicate uncertainties; g.(123456\_234567)\_(345678\_456789)del<br>
	_**NOTE**_: the range of the uncertainty should be described as precisely as possible ([_see below_](#uncertain1))
*	"**<font color="red">?</font>**" (question mark) is used to indicate unknown positions (nucleotide or amino acid); g.(?\_234567)\_(345678\_?)del
*	"**<font color="red">^</font>**" (caret) is used as "or"; c.(370A>C^372C>R) as back translation of p.Ser124Arg
*	"**<font color="red">&gt;</font>**" (greater then) is used to describe substitution variants (DNA and RNA level); g.12345A>T, r.123a>u (see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
*	"**<font color="red">{ }</font>**" (curly braces) suggested for the description of variants in otherwise perfect copy sequences ([_see Open Issues_](/recommendations/open-issues#imperfectcopy)); g.24\_65dup{46G>T}	
*	"**<font color="red">=</font>**" (equals) is used to indicate a sequence was tested but found unchanged; p.(Arg234=)
*	"**<font color="red">/</font>**" (forward slash) is used to indicate mosaicism ([_see Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/))
*	"**<font color="red">//</font>**" (double forward slash) is used to indicate chimerism ([_see Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/))

* * *

#### Abbreviations in variant descriptions

Specific abbreviations are used to describe different variant types.

*	"**<font color="red">&gt;</font>**" (greater then) indicates a **substitution** (DNA and RNA level); g.123456G>A, r.123c>u (see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
	*	a substitution at the protein level is described as p.Ser321Arg (see [_protein_](/recommendations/protein/variant/substitution)) 
*	"**<font color="red">del</font>**" indicates a **deletion**; c.76delA (see [_DNA_](/recommendations/DNA/variant/deletion), [_RNA_](/recommendations/RNA/variant/deletion), [_protein_](/recommendations/protein/variant/deletion))
*	"**<font color="red">dup</font>**" indicates a **duplication**; c.76dupA (see [_DNA_](/recommendations/DNA/variant/duplication), [_RNA_](/recommendations/RNA/variant/duplication), [_protein_](/recommendations/protein/variant/duplication))
*	"**<font color="red">ins</font>**" indicates an **insertion**; c.76\_77insG (see [_DNA_](/recommendations/DNA/variant/insertion), [_RNA_](/recommendations/RNA/variant/insertion), [_protein_](/recommendations/protein/variant/insertion))
	*	duplicating insertions are described as duplications, not as insertions	
*	"**<font color="red">inv</font>**" indicates an **inversion**; c.76\_83inv (see [_DNA_](/recommendations/DNA/variant/inversion), [_RNA_](/recommendations/RNA/variant/inversion))
*	"**<font color="red">con</font>**" indicates a **conversion**; NC\_000022.10:g.42522624\_42522669con42536337\_42536382 (see [_DNA_](/recommendations/DNA/variant/conversion), [_RNA_](/recommendations/RNA/variant/conversion))
*	"**<font color="red">fs</font>**" indicates a **frame shift**; p.Arg456Glyfs**Ter17 ([_see Frame shifts_](/recommendations/protein/variant/frameshift))
*	"**<font color="red">ext</font>**" indicates an **extension**; p.Met1**<font color="red">ext</font>**-5 ([_see Frame shifts_](/recommendations/protein/variant/extension))

*	HGVS/ISCN ([_see Community Consultation_](http://www.hgvs.org/mutnomen/comments004.html))
	*	"**<font color="red">add</font>**" indicates an **additional** chromosome (marker chromosome)
	*	"**<font color="red">cen</font>**" indicates the **centromere** of a chromosome
	*	"**<font color="red">chr</font>**" indicates a **chromosome**; chr11:g.12345611G>A (NC_000011.9)
	*	"**<font color="red">pter</font>** indicates the **first nucleotide** of a chromosome
	*	"**<font color="red">qter</font>**" indicates the **last nucleotide** of a chromosome

* * *

### Questions

*	Some papers and web sites use a "-" (minus) to indicate a range, is this correct?
:	The sign used to indicate a range is "_" (underscore) and not a "-" (minus). The minus sign should only be used as a minus in the description of variants based on a coding DNA reference sequence. c.12-14del describes a deletion of nucleotide -14 in the intron directly preceding coding DNA nucleotide 12, **not** a deletion of nucleotides c.12 to c.14.

*	Why is it recommended to use **three-letter amino acid code** to describe protein variants?
:	Several amino acids start with the same initial letter (**<font color="red">A</font>**la, **<font color="red">A</font>**rg, **<font color="red">A</font>**sn, **<font color="red">A</font>**sp start with **<font color="red">A</font>**, **<font color="green">G</font>**ln, **<font color="green">G</font>**lu, **<font color="green">G</font>**ly with **<font color="green">G</font>**, **<font color="blue">L</font>**eu, **<font color="blue">L</font>**ys with **<font color="blue">L</font>**, **<font color="red">P</font>**he, **<font color="red">P</font>**ro with **<font color="red">P</font>** and **<font color="green">T</font>**hr, **<font color="green">T</font>**yr with **<font color="green">T</font>**) but in one-letter amino acid code this letter is used as abbreviation for only one. In practice this leads to many mistakes. It is therefore recommended to use three-letter amino acid code abbreviations. 

*	Is it correct that when I apply **the 3'rule** for genes that are on the minus strand of a chromosome, the "g." and "c." variant descriptions differ regarding the nucleotide that I describe as deleted?
	:	Yes, when a gene is on the minus strand of a chromosome (opposite transcriptional orientation) and the change is located in a repeated sequence (mono-, di-, tri-, etc. nucleotide stretches) the 3'rule has this as a consequence. When the chromosome sequence is -TGGGGCAT- and one of the G's is deleted (change to -TGGG_CAT-) the description based on chromosome coordinates is g.5delG. When the annotated coding DNA reference sequence is on the minus strand (ATGCCCCA) the description is c.7delC. Not only is the deleted nucleotide different (delG vs. delC), in fact the descriptions also point to another nucleotide, g.5 vs. g.2 (equivalent to c.7delC).

<a name="uncertain1"></a>

*	Can I describe a deletion when I have not yet sequenced the break point?
:	Yes, using the characters to indicate uncertainties, i.e. the question mark ("**<font color="red">?</font>**") and brackets ("**<font color="red">( )</font>**"), such cases can be described. Describe the range of uncertainty as precise as possible. When for a specific probe/primer/sequence tested it is difficult to give an exact nucleotide position, the rule of thumb is to use the central nucleotide.
The basic format to describe un-sequenced deletions is: **(last-normal_first-deleted)_ (last-deleted_first-normal)**. Descriptions differ based on the technology used to detect the rearrangement:
	*	FISH
	:	Genomic rearrangements detected using FISH (Fluorescence In Situ Hybridisation) can be described using [ISCN guidelines](http://www.karger.com/Article/FullText/353118){:target="\_blank"}. When genomic positions of the probes used are known, variants can also be described using genomic coordinates; **(position-last-normal-probe\_positions-first-altered probe)\_(position-last-altered-probe\_position-first-normal-probe)**.
		*	chrX:g.(AC096506.5\_AL109609.5)\_(AL451144.5\_AL050305.9)del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5) to RP11-151J4 (GenBank AL451144.5), both yielding no signal. On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-64I1 (GenBank AC096506.5), on the centromeric side the closest probe tested positive was RP6-60B16 (GenBank AL050305.9).
		:	_**NOTE**_ g.(AC096506.5\_AL109609.5)del indicates that the deletion breakpoint is somewhere between the sequences AC096506.5 and AL109609.5 (PAC-derived) and gives a direct link to the genome.
		:	The deletion can also be described directly in relation to the genome sequence as hg19 chrX:g.(32218983\_32238146)\_(32984039\_33252615)del, i.e. (end-position-last-normal-clone\_start-position-first-altered-clone)\_ (end-position-last-altered-clone\_start-position-first-normal-clone). 
		*	chrX:g.(?\_AL109609.5)\_(AL451144.5\_?)del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5) to RP11-151J4 (GenBank AL451144.5), both yielding no signal. No flanking positive probes were tested, making it unclear how far the deletion extends (compare with previous description).
		*	chrX:g.(AC096506.5\_AL109609.5)\_AL451144.5del
		:	a deletion on the X-chromosome detected using FISH. The deletion spans from PAC probes RP4-556A22 (GenBank AL109609.5) to RP11-151J4 (GenBank AL451144.5). On the telomeric side (p-arm) the closest probe tested positive was PAC RP11-64I1 (GenBank AC096506.5), while RP4-556A22 (GenBank AL109609.5) tested negative. On the centromeric side the probe RP11-151J4 (GenBank AL451144.5) gave a reduced signal, indicating that the breakpoint lies **in this clone** (note that this identifier is not between brackets).
        :	An alternative description is chrX:g.(AC096506.5\_AL109609.5)\_AL451144.5:g.(1\_100207)del where AL451144.5:g.(1\_100207) indicates that the range where the deletion junction lies spans nucleotides 1 to 100,207. One can argue whether this addition is very informative.
	*	Southern blotting
	:	usually the sequence of the probe(s) used is known (or can be determined easily), can be linked to a genomic reference sequence and the rearrangement can be described using the format **(position-last-normal-probe\_position-first-altered-probe)\_ (position-last-altered-probe\_position-first-normal-probe)**.
	*	array (CGH or SNP)
	:	genomic rearrangements detected using arrays (CGH or SNP arrays) can be described using [ISCN guidelines](http://www.karger.com/Article/FullText/353118){:target="\_blank"}. In most cases the probe sequence are known and the variants can also be described using genomic coordinates;   **(position-last-normal\_position_first-altered)\_ (position-last-altered\_position-first-normal)**.
		*	chrX:g.(32218983\_32238146)\_(32984039\_33252615)del (hg19)
		:	a deletion on the X chromosome, based on reference genome build hg19, starting between nucleotides 32,218,983 to 32,238,146 and ending between nucleotides 32,984,039 to 33,252,615.
		*	chrX:g.(?\_32238146)\_(32984039\_?)del (hg19)
		:	a deletion on the X chromosome, based on reference genome build hg19, starting upstream of nucleotide 32,238,146 and ending downstream of nucleotide 32,984,039.
		:	_**NOTE**_: the description leaves it thus unclear how far the deletion might extend, suggesting no up- or downstream probes were tested (and scored positive).
		*	chr13:g.(18858133\_18867056)\_(24517730\_24531502)del (hg19)
		:	alternatively g.(rs2342234\_rs3929856)\_(rs10507342\_rs947283)del
		:	a deletion on chromosome 13 detected using a SNP-array. The deletion spans from dbSNP entries rs3929856 to rs10507342, both yielding no signal. On the centromeric side (q-arm) the closest probe tested positive was rs2342234, on the telomeric side the closest probe tested positive was rs947283. Although the alternative description based on the human genome nucleotide numbering is more precise, the information regarding the probe sequences used is lost. 
		*	chr13:g.(?\_18,867,056)\_(24,517,73\0\_?)del (hg10)
		:	alternatively g.(?\_rs3929856)\_(rs10507342\_?)del
		:	a deletion detected using an array spanning from dbSNP entries rs3929856 to rs10507342. The description assumes no flanking positive probes were tested, making it unclear how far the deletion extends.
	*	MLPA
	:	The description uses the basic format **(position-last-normal-probe\_position-first-altered-probe)\_ (position-last-altered-probe\_position-first-normal-probe)**. In MLPA a pair of short oligonucleotides is used to detect the copy number of a specific sequence (mostly an exon). Effectively, when the signal for a probe is decreased, it only indicates that the pair of oligo nucleotide sequences could not be ligated. Ligation usually failed because either or both oligonucleotides did not hybridize to the 20-30 nucleotide target sequence. It is common practice, after excluding other variants in the probe binding sequence when only 1 exon probe is affected, to describe the result as a change affecting the entire exon. When the exact probe location would need to be used, variant description becomes too complex to be useful. Furthermore, assuming the MLPA probe pair used hybridizes from position c.3211 to c.3266, which location should be used (only part of the target sequence might be deleted)?  To make descriptions not too complicated, it is therefore **allowed** to assume the entire exon is affected (deleted or duplicated) and to base the description on the exon/intron borders.
	:	_**NOTE**_: when a probe location is used the recommendation is to use the central position. For details [_see Deletions_](/recommendations/DNA/variant/deletion/) or [_Duplications_](/recommendations/DNA/variant/duplication/).
	*	PCR
	:	The description uses the basic format **(position-last-normal-PCR_position-first-altered-PCR)_ (position-last-altered-PCR_position-first-normal-PCR)**. In PCR a pair of short oligonucleotides is used to detect the presence (amplification) of a speficic sequence (target). Effectively, when PCR fails, it means that either or both oligonucleotides did not hybridize to the 20-30 nucleotide target sequence. For variant descriptions the recommendation is to indicate **presence at the 5' side** using the most 3' nucleotide of the primer pair, **presence at the 3' side** using the most 5' nucleotide of the primer pair, **absence at the 5' side** using the most 5' nucleotide of the primer pair and **absence at the 3' side** using the most 5' nucleotide of the primer pair. For details [_see Deletions_](/recommendations/DNA/variant/deletion/) or [_Duplications_](/recommendations/DNA/variant/duplication/).
	:	_**NOTE**_: when, like in MLPA (see above), one primer pair is used per exon it is allowed to assume the entire exon is affected (deleted or duplicated) and to base the description on the exon/intron borders.

