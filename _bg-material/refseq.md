---
layout: default-md
title: Reference Sequences
order: 2
---

#{{ page.title }}

* * *

##Definition

a sequence file that is used as a **reference to describe variants** that are present in a sequence analysed.

* * *

##Reference Sequence Types

Depending on the variants to be reported, different reference sequence files are used at the DNA, RNA or protein level. The type of reference sequence file used is indicated using a **prefix** preceding the variant description. Approved reference sequence types are **g.**, **m.**, **c.**, **n.**, **r.** and **p.**: 

*	####DNA
	*	**g.**	=	[genomic reference sequence](#DNAg)
	*	**m.**	=	[mitochondrial reference sequence](#DNAm)
	*	**c.**	=	[coding DNA reference sequence](#DNAc) (based on a protein coding transcript)
	*	**n.**	=	[non-coding DNA reference sequence](#DNAn) (based on a transcript not coding for a protein)
*	####RNA
	*	**r.**	=	[RNA reference sequence](#RNAr)
*	####protein
	*	**p.**	=	[protein reference sequence](#proteinp)


####Notes

*	only public files from NCBI or EBI are accepted as a reference sequence
	* approved reference sequence formats include; NC_# (e.g. NC_000023.10), LRG_# (e.g. LRG_199), NG_# (e.g. NG_012232.1), NM_# (e.g. NM_004006.2), NR_# (e.g. NR_002196.1) and NP_# (e.g. NP_003997.1)
*	a reference sequence should be listed with both the **accession** and <u>**version number**</u>
	*	 NG_012232<u>**.1**</u> is correct, NG_012232 lacks the essential version number
*	the reference sequence used **must** contain the variant residue described
*	the recommended DNA reference is a genomic reference sequence based on a recent genome build, e.g. NC_000023.10 (for _Homo sapiens_ build GRCh37/hg19)


* * *


<a name="DNAg"></a>

###DNA - genomic reference sequence

*	the recommended DNA reference is a genomic reference sequence based on a recent genome build, e.g. NC_000023.10 (for _Homo sapiens_ build GRCh37/hg19)
	*	for diagnostic applications it is recommended to use a [_Locus Reference Genomic sequence (LRG)_](http://www.lrg-sequence.org/), , e.g. LRG_199 ([_see Dalgleish 2010_](http://www.genomemedicine.com/content/pdf/gm145.pdf), or [_MacArthur 2014_](http://nar.oxfordjournals.org/content/42/D1/D873.full.pdf)
		* 	when for a gene of interest **no LRG** is available, [_one should be requested_](http://www.lrg-sequence.org/lrg-request). 
		*	"**pending**” LRGs should not be used, they might change before being approved
		*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NG_012232.1 ([_see O'Leary 2016_](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf))
*	a genomic reference sequence;
	*	should include all known exons and cover all known transcripts
	*	to facilitate the description of variants in immediate gene flanking regions (e.g. the promoter region), should contain several kilobases of 5' upstream (recommended is 5 kb) and 3' downstream (recommended 2 kb) sequences
*	when a complete genomic reference sequence is not available, a coding DNA reference sequence should be used.
*	for complex genes computational tools like [_Mutalyzer_](http://www.mutalyzer.nl/position-converter) can help to predict the consequences of a variant on all properly annotated transcripts, incl. when they derive from overlapping genes.


<a name="DNAm"></a>

###DNA - Mitochondrial reference sequence

*	the preferred human mtDNA reference sequence is [the _Homo sapiens_ mitochondrion, complete genome (GenBank NC_012920.1)](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1).


<a name="DNAc"></a>

###DNA - coding DNA reference sequence

*	the preferred coding DNA reference sequence is a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org)**.
	*	when no LRG is available, [_one should be requested_](http://www.lrg-sequence.org/lrg-request).
		*	note that **LRG's are stable** (never change), established after consulting different experts and that all known transcript variants and protein isoforms can be annotated
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NM_004006.2 ([_see O'Leary 2016_](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf))
*	when, based on a genomic reference sequence, variants are reported using a "**c.**" prefix, the transcript variant used should be indicated
	*	for LRG_'s the annotated "**transcript variant 1**" is described as "**t1**", e.g. LRG_199**t1**:c.11T>G
*	the coding DNA reference sequence should be complete, cover the major and largest transcript known and include as many exons as possible, even when this transcript has not been proven to actually exist in nature
	*	exons that disrupt the main reading frame should not be included


<a name="DNAn"></a>

###DNA - non-coding DNA reference sequence

*	the preferred non-coding DNA reference sequence is a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org)**.
	*	when no LRG is available, [_one should be requested_](http://www.lrg-sequence.org/lrg-request).
		*	note that **LRG's are stable** (never change), established after consulting different experts and that all known transcript variants can be annotated
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NR_002196.1 ([_see O'Leary 2016_](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf))
*	when, based on a genomic reference sequence, variants are reported using a "**n.**" prefix, the transcript variant used should be indicated
	*	for LRG_'s the annotated "**transcript variant 1**" is described as "**t1**", e.g. LRG_163**t1**:n.5C>T
*	the non-coding DNA reference sequence should be complete, cover the major and largest transcript known and include as many exons as possible, even when this transcript has not been proven to actually exist in nature


<a name="RNAr"></a>

###RNA reference sequence

*	the preferred RNA reference sequence is a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org)**.
	*	when no LRG is available, [_one should be requested_](http://www.lrg-sequence.org/lrg-request).
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g.  NM_004006.2 or NR_002196.1 ([_see O'Leary 2016_](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf))
*	when, based on a genomic reference sequence, variants are reported using a "r." prefix, the transcript variant used should be indicated
	*	for LRG_'s the annotated "**transcript variant 1**" is described as "**t1**", e.g. LRG_199**t1**:r.11u>g
*	nucleotide numbering for a RNA reference sequencing follows that of the associated coding or non-coding DNA reference sequence; nucleotide r.123 relates to c.123 or n.123.


<a name="proteinp"></a>

###Protein reference sequence

*	the preferred protein reference sequence is a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org)**.
	*	when no LRG is available, [_one should be requested_](http://www.lrg-sequence.org/lrg-request).
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NP_003997.1 ([_see O'Leary 2016_](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf))
*	when, based on a genomic reference sequence, variants are reported using a "p." prefix, the reference protein isoform used should be indicated
	*	for LRG_'s the annotated "**protein isoform 1**" is described as "**p1**", e.g. LRG_199**p1**:p.(ValGly)
*	the protein reference sequence should be complete, cover the major and largest protein isoform known and include as many exons as possible, even when this isoform has not been proven to actually exist in nature


* * *

<a name="discuss"></a>

###Discussions

*	Which reference sequence type should I use?
	:	Discussions on the **best reference sequence type to be used** have been very lively. In general it can be concluded that all suggestions made have their pro's and con's and there is no perfect solution.
	**Theoretically**, a genomic reference sequence is the best choice. By simply numbering nucleotides from 1 to the end of the file no problems occur with complex gene structures like multiple transcription start sites (promoters / 5'-first exons), multiple translation initiation sites (ATG-codons), exons and alternative splicing and the use of different 3'-terminal exons and poly-A addition sites.
	**In practice** a coding DNA reference sequence is mostly preferred. The most important reason is that from the description one immediately gets some information regarding the location of the variant; exonic or intronic, 5' of the ATG or 3' of the stop codon and, by dividing the nucleotide number by 3, the position of the amino acid residue that is affected ([_see Nucleotide numbering_](/bg-material/numbering)).

*	What are the disadvantages of using a genomic reference?
	:	**For a human**, a variant described using genomic reference sequence does not contain any useful information; the nucleotide number is just a big number between 1 and 250,000,000. In addition;
	*	descriptions of variants are very long making them impractical to use, e.g. NC_000006.11:g.117198495_117198496del compared to LRG_199t1:c.57_58del.
	*	genomic reference sequence file are very big making downloading time consuming and storage problematics.
	*	the transcriptional orientation of the gene of interest may be on the minus (-)  strand, complicating variant reporting using "c." and "r." prefixes; nucleotide numbering on coding DNA and RNA level are based on the transcriptional orientation of the gene and goes in the opposite direction, creating confusing situations.

*	What are the disadvantages of using a coding DNA reference?
	:	A gene may have several transcripts, using different promoters / 5'-first exons, alternatively spliced exons, different 3'-terminal exons and polyA-addition sites. In such cases, which transcript should then be used?  Every choice will mean some regions (exons) are not in the reference sequence, complicating variant description.
	The different transcripts may encode different proteins (isoforms) with, when different promoters are used, different N-terminal sequences and even using different reading frames in one or more exons (e.g. the CDKN2A gene encoding the p14 and p16 protein isoforms).
	When different genes (partly) overlap, using the same or an opposite transcriptional orientation, which reference sequence should one use to describe the variant and to which gene should it be assigned?

*	Making a judgment on what is the "wild type" (wt) nucleotide for some sequences seems arbitrary at best, correct?
	:	All variants are described in relation to a **"reference sequence**". The reference sequence is considered to be the "**wild type**" sequence, the major allele present in the human population, and the allele used in the latest genome build. Note that everybody has influence on the reference sequence selected and can thus request that a sequence is changed to represent the most common allele. However, the debate about what is wild type becomes arbitrary when variants are very common (near 50%) or differ between populations.

*	When description in relation to a reference sequence is problematic, could one specify the variant by giving 20 bp of flanking sequence on both sides?
	:	In many cases this would be OK, but for recently duplicated genes or genes which contain repeated segments, giving 20 nucleotides to either side will not be sufficient. Furthermore, descriptions will become very long. For problematic cases the best method is probably to include the raw data, i.e. submit the sample sequence to [_GenBank_](http://www.ncbi.nlm.nih.gov/genbank/submit) and give the accession.version number obtained.

*	How should sequence variants in the mitochondrial DNA (mtDNA) be described ? (_M Paalman, Human Mutation_)
	:	The mtDNA genome is rather small and completely sequenced. Variants in the mitochondrial DNA should therefore be described in relation to a the full mitochondrial DNA sequence, i.e. for human [_the _Homo sapiens_ mitochondrion, complete genome (GenBank NC_012920.1)_](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1). Descriptions should be preceded by "m.", like m.8993T>C. The mtDNA encodes a range of different proteins. Changes at protein level should be described based on a protein reference sequence, e.g. YP_003024031.1:p.Leu156Pro.
	:	_**NOTE**_:	for issues related to mitochondrial DNA sequences [_see MITOMAP_](http://www.mitomap.org/).
	
*	How should variants be described in genes that produce only RNA (so no protein), e.g. ncRNA, miRNA, and others?
	:	To describe variants in genes that produce an RNA molecule but no protein a genomic reference sequence can be used ("**g.**" description). When a non-coding DNA reference sequence is available, e.g. a LRG (NR_002196.1 for the H19 transcript) or a RefSeq transcript (NR_000020.1 for the small nucleolar RNA, C/D box 33 (SNORD33) gene), variants can be described using the prefix "**n.**" [see [_Community Consultation SVD-WG002_(/bg-material/community/SVD-WG002) and [_Nucleotide numbering_](/bg-material/numbering)).
	
*	We are preparing an annotated set of Hox genes from the zebrafish for publication. If the coding DNA sequence is not completely known, but only an EST lacking 5' sequence and a genomic sequence covering the EST, how do you describe variants?  Do I number it in relation to the EST or the genomic sequence?  Furthermore, if there is a mismatch between the genomic and the EST sequence, and you don't know which one is correct, how do you define e.g. whether the genomic sequence has an insertion or the EST has a deletion?
	:	Variants are described **compared to a reference sequence**. This implies the reference sequence is considered to be the "correct sequence. When a genomic sequence covering this EST is available the recommendation is to use this as the reference to describe variants. When the EST sequence is incomplete you want to describe changes in relation to this sequence use AA010203.2:54_55insG, i.e. do not use a "g." or "c." prefix since neither a coding DNA nor a genomic reference sequence is used.


