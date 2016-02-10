---
layout: default-md
title: Checklist
order: 5
---

# {{ page.title }}

* * *

## Purpose

Going through publications one can easily see where people give variant descriptions that _**do not correctly follow HGVS nomenclature**_. The checklist below covers the most frequently offended rules. Going through should assist you while preparing a publication containing sequence variant descriptions.

* * *

## Checklist

1.  **Reference Sequence** - do you clearly mention the reference sequence used for numbering (nucleotides/amino acids)?  
    A publication should mention, preferably in the Materials & Methods section and/or Figure or Table legend, which reference sequence file was used for numbering of the residues (DNA, RNA and protein) and to describe the variants; see [_Reference Sequences_](/bg-material/refseq).
	*	do you mention a _GenBank_ (not Gen**<u>e</u>**Bank) RefSeq-file with accession  _**and version number**_?; do not forget the underscore in the accession number (correct is NM_004006**.2**, not NM004006.2).
	*	genomic (**g.**) and non-coding DNA (**n.**) reference sequences start with nucleotide 1 and can not have nucleotides with additions like a +, - or *.
    *	for a coding DNA reference sequence, do you clearly state that nucleotide numbering starts with the A of the ATG translation initiation site as _**nucleotide 1**_?
	*	legacy numbering is only allowed _**in addition to**_ approved numbering
	*	does your reference sequence contain the residue that you describe as changed?  Note that _**NM_**_ reference sequences cover mature transcripts, do _**not contain**_ intronic sequences and can thus not be used to describe intronic variants.
2.  **Intronic variants** - are descriptions of intron variants correct and complete?
	*	_**variants in introns**_ are described using the format "_**c.89-2A>G**_", descriptions like "_c.IVS4-2A>G_" are not allowed.
	*	do you properly describe ranges in the introns? The format c.123-65_123-50 is correct, the format c.123-65**_-50** is not, it is **incomplete**.
3.  **Insertions** - are descriptions of intron variants correct and complete ([_see Insertion_](../DNA/variant/insertion))?
	*	insertions should be reported using the format c.51_52insT. The format c.52insT is incomplete and not allowed.
	*	do you give the inserted sequence? Describing a variant as c.5439_5430**ins6** is not allowed, the inserted sequence (ins6, e.g. TGCCAT) should be specified.
	*	are the insertions reported really insertions or are they in fact duplications? Duplicating insertions should be described as duplications, not as insertions ([_see Duplication_](../DNA/variant/duplication)). 
4.	**The 3' rule** - do you correctly apply the 3' rule? position possible (C-terminal for protein variants)?
	For deletions, duplications and insertions the _**most 3' position possible is arbitrarily assigned**_ to have been changed ([_see General recommendations_](../general)). This rule also applies to variants in single residue (mono-nucleotide or amino acid) stretches or tandem repeats.
5.	**Range** - the sign used to indicate a range is the "_" (underscore), not a "-" (minus)?  
	The correct description to indicate a deletion of coding DNA nucleotides 12 to 14 is c.12_14del. Not correct is c.12-14del, this describes a deletion of nucleotide -14 in the intron directly 5' of nucleotide c.12 ([_see Numbering_](/bg-material/numbering)).
6.	**Deletion** - do you indicate the first and last residue involved in a deletion?  
	Descriptions like g.123del3 are not allowed, correct is g.123_125del ([_see Deletion_](../DNA/variant/deletion)).
7.  **Describe always at DNA-level** - do you describe all changes reported at DNA-level?  
    All changes reported **must** be described at DNA-level
	*	when descriptions at protein level are given in the text, upon first appearance, use a format like "**_c.76G>T (p.(Gly26Cys), RNA not analysed)_**" or "**_c.76G>T (r.76g>u, p.Gly26Cys)_**"
7.	**RNA level descriptions**  
    HGVS nomenclature includes recommendations for the description of changes detected at RNA level ([_see Recommendations_](../RNA)).
    *	several transcripts derived from one allele are described using the format r.[76a>c, 73_88del] ([_see RNA_](../RNA/variant/alleles))
9.	**protein level descriptions**
	*	the protein reference sequence should represent the primary translation product, not a processed mature protein, and thus include e.g. a signal peptide sequence
    *   the recommendation is to use **three letter amino acid code** ([_see Protein_](../protein/))	
    *   **Ter or * should be used** to indicate a translation stop codon; the X should not be used ([_see Protein_](../protein/))
	*	predicted "**silent**" protein level variants are described as **p.(Leu54=)** (not as p.Leu54Leu or p.(54L/L)).
	*	the description p.(Met1Val) is not allowed ([_see Protein_](../protein/variant/substitution))
10.	**Mutation / polymorphism**  
	Do not use the terms mutation or polymorphism ([_see General recommendations_](../general))
	*	"polymorphic" variants should not be described using the "/" (slash), describe them as "non-polymorhic" variants like c.127A>G and p.(Ile43Val).
11.	**Recessive diseases** - do you clearly describe which changes are found in which combination?  
	A publication describing variants in patients suffering from a recessive phenotype should, for each individual, explicitly mention _**which variants were found and in which combination (per allele)**_.
12.  **Tabular overview** - is the overview of all changes reported clear and complete?  
    Preferably, a publication contains a _**tabular overview**_ of all variants reported. This overview contains columns describing the change at the DNA-level (_**absolutely essential**_) and, optional, at the _RNA_ and _protein level_. When data on RNA and/or protein level are provided, it should be made clear whether the data were **_deduced or experimentally verified_** (i.e. state explicitly when RNA was analysed, e.g. to study the consequences of a variant affecting splicing). Are _**predicted**_ protein variant description reported in parentheses, like p.(Arg123Ser).