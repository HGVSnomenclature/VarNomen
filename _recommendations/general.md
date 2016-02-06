---
layout: default-md
title: General
order: 1
---

# {{page.title}}

Note that although the examples on these pages mainly give examples for human (_Homo sapiens_), the recommendations can be applied to **all species**.

Since references to web sites are not yet acknowledged as citations, please mention [_Den Dunnen et al., 2016. HGVS recommendations for the description of sequence variants: 2016 update. Hum.Mutat. 25: in press_](XXX) when referring to these pages.

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
*	in HGVS nomenclature some **characters** have a **specific meaning**
	*	an "**_**" (underscore) is used to indicate a range (like g.12345_12678del or c.123_124insG)
	*	"**[ ]**" (angled brackets) are used for alleles (see [_DNA_](/recommendations/DNA/variant/alleles), [_RNA_](/recommendations/RNA/variant/alleles), [_protein_](/recommendations/protein/variant/alleles))
		*	"**;**" (semi colon) is used to separate variants or alleles
		*	"**,**" (comma) is used to separate different trapscripts/proteins derived from one allele
	*	"**( )**" (parentheses) are used to indicate uncertainties, e.g. when the exact position of a change is not known
		*	the range of the uncertainty is described as precisely as possible and listed between parentheses; c.(67_70)insG
	*	"**=**" (equals) is used to indicate a sequence was tested but not changed; g.12345A=, r.456C=, P.Arg234=
* different formats are used to describe different types of variants;
	*	"**>**" indicates a **substitution** at DNA and RNA level; g.12345A>T, r.123a>u (for details see [_DNA_](/recommendations/DNA/variant/substitution), [_RNA_](/recommendations/RNA/variant/substitution))
		*	a substitution at the protein level is described as p.Ser321Arg (see [_protein_](/recommendations/protein/variant/substitution)) 
	*	"**del**" indicates a **deletion**; c.76delA (for detailes see [_DNA_](/recommendations/DNA/variant/deletion), [_RNA_](/recommendations/RNA/variant/deletion), [_protein_](/recommendations/protein/variant/deletion))
	*	"**dup**" indicates a **duplication**; c.76dupA (for detailes see [_DNA_](/recommendations/DNA/variant/duplication), [_RNA_](/recommendations/RNA/variant/duplication), [_protein_](/recommendations/protein/variant/duplication))
	*	"**ins**" indicates an **insertion**; c.76_77insG (for detailes see [_DNA_](/recommendations/DNA/variant/insertion), [_RNA_](/recommendations/RNA/variant/insertion), [_protein_](/recommendations/protein/variant/insertion))
		*	duplicating insertions are described as duplications, not as insertions	
	*	"**inv**" indicates an **inversion**; c.76_83inv (for detailes see [_DNA_](/recommendations/DNA/variant/inversion), [_RNA_](/recommendations/RNA/variant/inversion))
	*	"**con**" indicates a **conversion**; c.123_678conNM_004006.1:c.123_678 (for detailes see [_DNA_](/recommendations/DNA/variant/conversion), [_RNA_](/recommendations/RNA/variant/conversion), [_protein_](/recommendations/protein/variant/conversion))
*	when describing genes or proteins, only **approved [HGNC gene symbols](http://www.genenames.org)** should be used.

* * *

###Discussions

*	Some papers and web sites use a "-" (minus) to indicate a range, is this correct?
:	the sign used to indicate a range is "_" (underscore) and not a "-" (minus). The minus sign should only be used as a minus in the description of variants based on a coding DNA reference sequence. **c.12-14del** describes a deletion of nucleotide -14 in the intron directly preceding cDNA nucleotide 12, **not a deletion of nucleotides c.12 to c.14**.

*	Is it correct that when I apply **the 3'rule** "g." and "c." variant descriptions for genes that are on the minus strand of a chromosome may differ regarding the nucleotide that I describe as deleted?
	:	Yes, when a gene is on the minus strand of a chromosome (opposite transcriptional orientation) and the change is located in a repeated sequence (mono-, di-, tri-, etc. nucleotide stretches) the 3'rule has this as a consequence. When the chromosome sequence is -TGGGGCAT- and one of the G's is deleted (change to -TGGG_CAT-) the description based on chromosome coordinates is g.5delG. When the annotated coding DNA reference sequence is on the minus strand (ATGCCCCA) the description is c.7delC. Not only is the deleted nucleotide different (delG vs. delC), in fact the descriptions also point to another nucleotide, g.5 vs. g.2 (equivalent to c.7delC).



