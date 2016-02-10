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
	*	**protein level**: in capitals, starting with a letter referring to first the amino acid affected and using [IUPAC-IUBMB assigned amino acid symbols](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500); p.Lys76Asn, [_see protein_](/recommendations/protein)))
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
*	"**<font color="red">( )</font>**" (parentheses) are used to indicate uncertainties, e.g. when the exact position of a change is not known; g.(1267_1270)insG
	_**NOTE**_:	the range of the uncertainty should be described as precisely as possible
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
:	the sign used to indicate a range is "_" (underscore) and not a "-" (minus). The minus sign should only be used as a minus in the description of variants based on a coding DNA reference sequence. **c.12-14del** describes a deletion of nucleotide -14 in the intron directly preceding cDNA nucleotide 12, **not a deletion of nucleotides c.12 to c.14**.

*	Is it correct that when I apply **the 3'rule** "g." and "c." variant descriptions for genes that are on the minus strand of a chromosome may differ regarding the nucleotide that I describe as deleted?
	:	Yes, when a gene is on the minus strand of a chromosome (opposite transcriptional orientation) and the change is located in a repeated sequence (mono-, di-, tri-, etc. nucleotide stretches) the 3'rule has this as a consequence. When the chromosome sequence is -TGGGGCAT- and one of the G's is deleted (change to -TGGG_CAT-) the description based on chromosome coordinates is g.5delG. When the annotated coding DNA reference sequence is on the minus strand (ATGCCCCA) the description is c.7delC. Not only is the deleted nucleotide different (delG vs. delC), in fact the descriptions also point to another nucleotide, g.5 vs. g.2 (equivalent to c.7delC).



