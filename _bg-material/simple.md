---
layout: default-md
title: HGVS Simple
order: 5
---

# HGVS simple

**Changes** in DNA, RNA and protein sequences, also called **variants**, mutations or polymorphisms, are described using a specific language. To prevent confusion regarding its meaning a standard has been developed for this language, the so called **HGVS nomenclature**. The standard is used world-wide, especially in human health and diagnostics. This page will try to explain the standard, briefly and in simple terms. After reading you should understand the basics of the HGVS nomenclature and be able to use the internet to find more information on specific variants. In addition, while searching, you should be able to prevent making the most frequently made mistakes by misinterpretation of the variant description. More details, on all subjects, are availble elsewhere on the HGVS nomenclature pages.

* * *

## The format

The format of a complete variant description is **reference:description**, e.g.;

	*	NM\_004006.2:c.4375C>T

All variants are described in relation to a reference, the so called reference sequence. In the example **NM\_004006.2** is the reference sequence and **c.4375C>T** is the description of a variant.

A description without a reference sequence is near useless, additional information will then be required to guess what reference may have been used, e.g. variant descriptions based on several levels (DNA, RNA and/or protein), the name of the gene containing the variant, the associated phenotype studied (disease), the chromosome number, etc. Furthermore, since reference sequences usually change over time, the date of the report can give useful information as well.

Variants are usually detected by reading the DNA sequence (sequencing). A proper report always contains the variant described on the DNA level. Often it has in addition a description of the predicted consequences on the protein level. In rare cases, not following current standards, only the predicted consequences at the protein level are reported.

* * *

## Reference sequences

Variants described on the DNA level are mostly reported in relation to a so called **"coding DNA reference sequence"**. When a coding DNA reference sequence is used the description of the variant starts with **"c."** (in the example c.4375C>T). Since we nowadays have a reliable reference sequence of the complete human genome, it becomes more common to (also) give the description based on a genome reference. Descriptions based on a **"genomic reference sequence"** start with **"g."** (g.32407761G>A). A description of the (predicted) consequences on the protein level should start with **"p."** (note that the "p." addition is often missing).

Reference sequences have a format like **NC\_000023.10**, where **NC\_000023** is the **accession number** of the reference sequence and "**.10**" its **version number**. Version numbers are required since we started to use reference sequences at a time our knowledge of the human genome was far from complete. The version number directly follows the accession number and increases over time; NC\_000023.9 from March 2006 was followed by NC\_000023.10 (Feb.2009) and NC\_000023.11 (Dec.2013).

#### Example descriptions

*	NC\_000023.10:g.32407761G>A  (Feb.2009: h19, GRCh37)
	*	NC\_000023.9:g.32317682G>A  (Mar.2006: hg18, NCBI36)
	*	NC\_000023.11:g.32389644G>A  (Dec.2013: hg38, GRCh38)
*	NG\_012232.1:g.954966C>T
*	LRG\_199t1:c.4375C>T
*	NM\_004006.2:c.4375C>T  (r.4375c>u, p.Arg1459*)

### Genomic reference sequences

For human the reference sequence **accession number** directly in front of the version number gives the number of the chromosome, 1-22 and 23 for the X-chromosome and 24 for the Y-chromosome. In NC\_000023.10 this number is "23" so a reference sequence of human **chromosome X**.

In many cases the reference sequence is not given but a **genome build** is mentioned. The genome build has two formats, either "hg" and a number (hg18, hg19, hg38) or "GRCh/NCBI" and a number (NCBI35, NCBI36, GRCh37, GRCh38). Having the reference sequence is exact, when it is missing it is very informative to know the genome build. The difference is that genome builds are versioned as well, so called **"patches"** (e.g. p1) in which errors are corrected.

Genomic reference sequences can also be based on smaller sequences, usually including a specific gene or specifically named genomic segment only. The most frequently used are **LRG_s** (Locus Genomic Reference sequences, format LRG\_199) or NG\_s (RefSeq Gene reference sequences, format NG\_012232.1).

### Coding DNA reference sequences

In a human diagnostic setting the most frequently used reference is a **"coding DNA reference sequence"** (description starting with **"c."**, e.g. c.4375C>T). Variant descriptions based on this format are very popular because they directly link to the encoded protein. Numbering **starts** with 1 at the first position of the protein coding region, the A of the starting ATG triplet. Numbering **ends** at the last position of the ending triplet, the last A of the stop codon TAA, TAG or TGA. Positions in front of the protein coding sequence get a minus sign (**"c.-"**) those after the stop an asterisk (**"c.*"**). When you divide the position number from a "c." description by three you get in most cases the position of the affected amino acid from the protein sequence (description starting with "p."); for c.4375C>T i.e. 4375 divided by three > 1459.
	The most frequently used coding DNA reference sequences are the NM\_s (RefSeq gene transcript sequences, NM\_004006.2) and the LRG\_s (Locus Genomic Reference sequences, LRG\_199t1).

* * *

## Variants

Depending on the change found, the variant, its description can have many different formats. For a detailed overview we refer to the specific pages on this website [_see header "Recommendations"_](http://varnomen.hgvs.org/recommendations){:target="\_blank"}. Here we will list and briefly explain, the major variant types.

A standard variant description has the format **"prefix\_position(s)\_change"**. In the variant description c.4375C>T the prefix **"c."** indicates the type of reference sequence used ("c." indicating a coding DNA reference sequence), **"4375"** the position of the nucleotide(s) affected and **"C>T"** the change (a C changed to T).

### Types of variants

All variants given are in the DMD gene and reported in relation to coding DNA reference sequence NM\_004006.2.

*	substitution
	:	one letter (nucleotide) of the DNA code is replaced (substituted) by one other letter. A substitution is indicated using **">"**.
	*	c.4375C>T
		:	the C nucleotide at position c.4375 changed to a T
*	deletion
	:	one or more letters of the DNA code are missing (deleted). A deletion is indicated using **"del"**.
	*	c.4375\_4379del
		:	the nucleotides from position c.4375 to c.4379 (GATT) are missing (deleted). Also reported as c.4375\_4379delGATT.
*	duplication
	:	one or more letters of the DNA code are present twice (doubled, duplicated). A duplication is indicated using **"dup"**.
	*	c.4375\_4385dup
		:	the nucleotides from position c.4375 to c.4385 (GATTATTCCA) are present twice (duplicated). Also reported as c.4375\_4385dupGATTATTCCA or c.4385\_4386insGATTATTCCA (not a correct HGVS description).
*	insertion
	:	one or more letters in the DNA code are new (inserted). An insertion is indicated using **"ins"**.
	*	c.4375\_4376insACCT
		:	the new sequence "ACCT" was found inserted between positions c.4375 and c.4376.
*	deletion/insertion (indel)
	:	one or more letters in the DNA code are missing and replaced by several new letters. An deletion/insertion is indicated using **"delins"**.
	*	c.4375\_4376delinsAGTT
		:	the nucleotides from position c.4375 to c.4376 (CG) are missing (deleted) and replaced by the new sequence "AGTT". Also reported as c.4375\_4376delCGinsAGTT
	
There are more variant types yet these occur less frequently then those listed above. For details [_see header "Recommendations"_](http://varnomen.hgvs.org/recommendations){:target="\_blank"}.
	
* * *

### Other descriptions

Sometimes variants are not described using the format **reference:description** (NM\_004006.2:c.4375C>T) explained above but using an identifier (ID) in another database. Common formats include a rs ID (from dbSNP, [_rs1800266_](http://www.ncbi.nlm.nih.gov/SNP/snp_ref.cgi?type=rs&rs=rs1800266){:target="\_blank"}), OMIM ID (from OMIM, [_OMIM300377:0073_](http://omim.org/entry/300377#0073){:target="\_blank"}), LOVD ID (from LOVD, [_ANO5\_000052_](http://www.LOVD.nl/ANO5_000052){:target="\_blank"}), RCV ID (from ClinVar, [_RCV000012031_](https://www.ncbi.nlm.nih.gov/clinvar/RCV000012031/){:target="\_blank"}), etc. In most cases, using these IDs, the database can be used to find the full description of the variant using the approved HGVS format **reference:description**.

* * *

## Missing information

When a reference sequence is not known the best way forward is to try and get the name of the gene that is affected by the variant. All genes have an official abbreviation, the so called **gene symbol**. For the Duchenne muscular dystrophy gene the gene symbol is "DMD". The [HGNC](http://www.genenames.org){:target="\_blank"} keeps a catalog of all approved gene symbols (and their aliases/synonyms). The HGNC site can be used to find the gene symbol and check whether the name/symbol you have is the officially approved one. Using "dystrophin", the name of a protein, you will see this is an alias for the Duchenne muscular dystrophy gene, official gene symbol "DMD". HGNC, and many other sources, can also tell you on which human chromosome a gene is so to which chromosome the variant description you have may relate.

When you are interested in what is known about a specific variant the best start is a Gene variant database, also called Locus-Specific Database (LSDB)... _in preparation_ ...
