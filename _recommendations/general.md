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
	*	descriptions should make clear whether the change was **experimentally determined** or **theoretically deduced** by giving predicted consequences in parentheses
	*	descriptions at RNA/protein level should describe the changes observed on that level (RNA/protein) and not try to incorporate any knowledge regarding the change at DNA-level (see Questions below)	
*	all variants should be described in relation to an accepted **reference sequence** ([_see Reference Sequences_](/bg-material/refseq)).
	*	the reference sequence file used should be **public and clearly described**, e.g. NC\_000023.10, LRG\_199, NG\_012232.1, ENST00000357033, NM\_004006.2, NR\_002196.1, NP\_003997.1, etc.
		*	when variants are not reported in relation to a genomic reference sequence from a recent genome build, the preferred reference sequence is a [Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org){:target="\_blank"}
		*	when no LRG is available, one should be requested ([_see Reference Sequences_](/bg-material/refseq)).
		*	the reference sequence used must contain the residue(s) described to be changed. 
	*	a **letter prefix** should be used to indicate the type of reference sequence used. Accepted prefixes are;
		*	"**g.**" for a genomic reference sequence
		*	"**c.**" for a coding DNA reference sequence	
		*	"**m.**" for a mitochondrial DNA reference sequence
		*	"**n.**" for a non-coding DNA reference sequence
		*	"**r.**" for an RNA reference sequence (transcript)
		*	"**p.**" for a protein reference sequence
	*	numbering of the residues (nucleotide or amino acid) in relation to the reference sequence used should **follow the approved scheme** ([_see Numbering_](/bg-material/numbering))
*	**3'rule**: for all descriptions the most 3' position possible of the reference sequence is arbitrarily assigned to have been changed
	*	the 3'rule also applies for changes in single residue stretches and tandem repeats  (nucleotide or amino acid)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
	*	**exception**: deletion/duplication around exon/exon junctions ([_see Numbering_](/bg-material/numbering/#DNAc))
*	descriptions at DNA, RNA and protein level are clearly different:
	*	**DNA-level** 123456A>T ([_see Details_](/recommendations/DNA)): number(s) referring to the nucleotide(s) affected, nucleotides in CAPITALS using [_IUPAC-IUBMB assigned nucleotide symbols_](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}
	*	**RNA-level** 76a>u ([_see Details_](/recommendations/RNA)): number(s) referring to the nucleotide(s) affected, nucleotides in lower case using [IUPAC-IUBMB assigned nucleotide symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}
	*	**protein level** Lys76Asn ([_see Details_](/recommendations/protein)): the amino acid(s) affected in 3- or 1-letter followed by a number [IUPAC-IUBMB assigned amino acid symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}
			*	**three-letter** amino acid code is preferred ([_see Standards_](/bg-material/standards/#aacode))
*	**prioritisation**: when a description is possible according to several types, the preferred description is: (1) deletion, (2) inversion, (3) duplication, (4) conversion, (5) insertion
	* when a variant can be described as a duplication or an insertion, prioritisation determines it should be described as a duplication
*	only **approved** [HGNC gene symbols](http://www.genenames.org){:target="\_blank"} should be used to describe genes

* * *
<a name="characters"></a>

#### Characters used

In HGVS nomenclature some **characters** have a **specific meaning**

*	"**<font color="red">+</font>**" (plus) is used in [_nucleotide numbering_](/bg-material/numbering); c.123+45A>G
*	"**<font color="red">-</font>**" (minus) is used in [_nucleotide numbering_](/bg-material/numbering); c.124-56C>T
*	"**<font color="red">*</font>**" (asterisk) is used in [_nucleotide numbering_](/bg-material/numbering) and to indicate a translation termination (stop) codon ([_see Standards_](/bg-material/standards#RNAcode)); c.\*32G>A and P.Trp41\* 
*	"**<font color="red">_</font>**" (underscore) is used to indicate a range; g.12345\_12678del
*	"**<font color="red">[ ]</font>**" (angled brackets) are used for alleles (see [_DNA_](/recommendations/DNA/variant/alleles), [_RNA_](/recommendations/RNA/variant/alleles), [_protein_](/recommendations/protein/variant/alleles))
	*	"**<font color="red">;</font>**" (semi colon) is used to separate variants and alleles; g.[123456A>G;345678G>C] or g.[123456A>G];[345678G>C]
	*	"**<font color="red">,</font>**" (comma) is used to separate different transcripts/proteins derived from one allele; r.[123a>t, 122\_154del]
*	"**<font color="red">:</font>**" (colon) is used to separate the reference sequence file identifier (_accession.version\_number_) from the actual description of a variant; NC\_000011.9:g.12345611G>A
*	"**<font color="red">( )</font>**" (parentheses) are used to indicate uncertainties and predicted consequences; NC\_000023.9:g.(123456\_234567)\_(345678\_456789)del, p.(Ser123Arg)<br>
	_**NOTE**_: the range of the uncertainty should be described as precisely as possible ([_see below_](#uncertain1))
*	"**<font color="red">?</font>**" (question mark) is used to indicate unknown positions (nucleotide or amino acid); g.(?\_234567)\_(345678\_?)del
*	"**<font color="red">^</font>**" (caret) is used as "or"; c.(370A>C^372C>R) as back translation of p.Ser124Arg
*	"**<font color="red">&gt;</font>**" (greater than) is used to describe substitution variants (DNA and RNA level); g.12345A>T, r.123a>u (see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
*	"**<font color="red">{ }</font>**" (curly braces) suggested for the description of variants in otherwise perfect copy sequences ([_see Open Issues_](/recommendations/open-issues#imperfectcopy)); g.24\_65dup{46G>T}	
*	"**<font color="red">=</font>**" (equals) is used to indicate a sequence was tested but found unchanged; p.(Arg234=)
*	"**<font color="red">/</font>**" (forward slash) is used to indicate mosaicism ([_see Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/))
*	"**<font color="red">//</font>**" (double forward slash) is used to indicate chimerism ([_see Complex (HGVS/ISCN)_](/recommendations/DNA/variant/complex/))

* * *
<a name="abbreviation"></a>

#### Abbreviations in variant descriptions

Specific abbreviations are used to describe different variant types.

*	"**<font color="red">&gt;</font>**" (greater then) indicates a **substitution** (DNA and RNA level); g.123456G>A, r.123c>u (see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
	*	a substitution at the protein level is described as p.Ser321Arg (see [_protein_](/recommendations/protein/variant/substitution)) 
*	"**<font color="red">del</font>**" indicates a **deletion**; c.76delA (see [_DNA_](/recommendations/DNA/variant/deletion), [_RNA_](/recommendations/RNA/variant/deletion), [_protein_](/recommendations/protein/variant/deletion))
*	"**<font color="red">dup</font>**" indicates a **duplication**; c.76dupA (see [_DNA_](/recommendations/DNA/variant/duplication), [_RNA_](/recommendations/RNA/variant/duplication), [_protein_](/recommendations/protein/variant/duplication))
*	"**<font color="red">ins</font>**" indicates an **insertion**; c.76\_77insG (see [_DNA_](/recommendations/DNA/variant/insertion), [_RNA_](/recommendations/RNA/variant/insertion), [_protein_](/recommendations/protein/variant/insertion))
	*	duplicating insertions are described as duplications, not as insertions	
*	"**<font color="red">inv</font>**" indicates an **inversion**; c.76\_83inv (see [_DNA_](/recommendations/DNA/variant/inversion), [_RNA_](/recommendations/RNA/variant/inversion)). Not used at protein level, usually described as [_"delins"_](/recommendations/protein/variant/delins/)
*	"**<font color="red">con</font>**" indicates a **conversion**; NC\_000022.10:g.42522624\_42522669con42536337\_42536382 (see [_DNA_](/recommendations/DNA/variant/conversion), [_RNA_](/recommendations/RNA/variant/conversion), _protein_)
*	"**<font color="red">fs</font>**" indicates a **frame shift**; p.Arg456GlyfsTer17 (or p.Arg456Glyfs*17, [_see Frame shifts_](/recommendations/protein/variant/frameshift))
*	"**<font color="red">ext</font>**" indicates an **extension**; p.Met1**<font color="red">ext</font>**-5 ([_see Frame shifts_](/recommendations/protein/variant/extension))

*	HGVS/ISCN ([_see Community Consultation_](http://www.hgvs.org/mutnomen/comments004.html))
	*	"**<font color="red">add</font>**" indicates an **additional** chromosome (marker chromosome)
	*	"**<font color="red">cen</font>**" indicates the **centromere** of a chromosome
	*	"**<font color="red">chr</font>**" indicates a **chromosome**; chr11:g.12345611G>A (NC_000011.9)
	*	"**<font color="red">pter</font>** indicates the **first nucleotide** of a chromosome
	*	"**<font color="red">qter</font>**" indicates the **last nucleotide** of a chromosome

*	changes of state (modifications)
	*	"**<font color="red">gom</font>**" indicates a **gain of methylation**; g.12345678_12345901**<font color="red">|gom</font>**
	*	"**<font color="red">lom</font>**" indicates a **loss of methylation**; g.12345678_12345901**<font color="red">|lom</font>**	

* * *

### Questions

*	Some papers and web sites use a "-" (minus) to indicate a range, is this correct?
:	The sign used to indicate a range is "_" (underscore) and not a "-" (minus). The minus sign should only be used as a minus in the description of variants based on a coding DNA reference sequence. c.12-14del describes a deletion of nucleotide -14 in the intron directly preceding coding DNA nucleotide 12, **not** a deletion of nucleotides c.12 to c.14.

*	Why is it recommended to use **three-letter amino acid code** to describe protein variants?
:	Several amino acids start with the same initial letter (**<font color="red">A</font>**la, **<font color="red">A</font>**rg, **<font color="red">A</font>**sn, **<font color="red">A</font>**sp start with **<font color="red">A</font>**, **<font color="green">G</font>**ln, **<font color="green">G</font>**lu, **<font color="green">G</font>**ly with **<font color="green">G</font>**, **<font color="blue">L</font>**eu, **<font color="blue">L</font>**ys with **<font color="blue">L</font>**, **<font color="red">P</font>**he, **<font color="red">P</font>**ro with **<font color="red">P</font>** and **<font color="green">T</font>**hr, **<font color="green">T</font>**yr with **<font color="green">T</font>**) but in one-letter amino acid code this letter is used as abbreviation for only one. In practice this leads to many mistakes. It is therefore recommended to use three-letter amino acid code abbreviations. 

*	When I want to report a variant on DNA, RNA and protein level do I need to use a specific separator?
	:	No, best is to report the variant using the format NM\_004006.2:c.124A>G r.(?) p.(Ser42Gly). **_NOTE:_** needless to say, always mention the reference sequence file used

*	What do you mean by "descriptions at protein level should describe the changes observed on that level and not try to incorporate any knowledge regarding the change at DNA-level"?
	:	To describe a variant at the protein level you simply compare the reference and variant protein sequence. You forget what happened at the DNA level. When the sequence ...ATG AGC TCG AGC CTT... (encoding MetSerSerSerLeu) changes to ...TGG AGC AGC CTT... (encoding MetSerSerLeu) this is described as p.(Ser4del) and **not as** p.(Ser3del) because from DNA level the codon for Ser3 is deleted.
	
*	Is it correct that when I apply **the 3'rule** for genes that are on the minus strand of a chromosome, the "g." and "c." variant descriptions differ regarding the nucleotide that I describe as deleted?
	:	Yes, when a gene is on the minus strand of a chromosome (opposite transcriptional orientation) and the change is located in a repeated sequence (mono-, di-, tri-, etc. nucleotide stretches) the 3'rule has this as a consequence. When the chromosome sequence is -TGGGGCAT- and one of the G's is deleted (change to -TGGG_CAT-) the description based on chromosome coordinates is g.5delG. When the annotated coding DNA reference sequence is on the minus strand (ATGCCCCA) the description is c.7delC. Not only is the deleted nucleotide different (delG vs. delC), in fact the descriptions also point to another nucleotide, g.5 vs. g.2 (equivalent to c.7delC).

<a name="uncertain1"></a>

*	Can I describe a deletion when I have not yet sequenced the break point?
:	Yes, using the characters to indicate uncertainties, i.e. the question mark ("**<font color="red">?</font>**") and brackets ("**<font color="red">( )</font>**"), such cases can be described. Describe the range of uncertainty as precise as possible. For details [_see Uncertain_](/recommendations/uncertain/).
