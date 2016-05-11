---
layout: default-md
title: Reference Sequences
order: 2
---

# {{ page.title }}

* * *

## Definition

a sequence file that is used as a **reference to describe variants** that are present in a sequence analysed.

*	only public files from NCBI or EBI are accepted as a reference sequence
	* approved reference sequence formats include; NC\_# (e.g. NC\_000023.10), LRG\_# (e.g. LRG\_199), NG\_# (e.g. NG\_012232.1), NM\_# (e.g. NM\_004006.2), NR\_# (e.g. NR\_002196.1) and NP\_# (e.g. NP\_003997.1)
*	a reference sequence file identifier should contain both the **accession** and **version number**
	*	NG\_012232**<font color="red">.1</font>** is correct, NG\_012232 lacks the essential version number
	*	LRG reference sequences (e.g. LRG\_199) do not contain a version number
*	a "**<font color="red">:</font>**" (colon) is used as a separator between the reference sequence file identifier (_accession.version\_number_) and the actual description of a variant; NC\_000011.9**<font color="red">:</font>**g.12345611G>A
*	the **recommended reference** is a genomic reference sequence based on a recent genome build, e.g. NC\_000023.10 (for _Homo sapiens_ chromosome X, build GRCh37/hg19)
*	the reference sequence used **must contain** the variant residue described
	*	a coding DNA reference sequence does not contain intron sequences and can therefore **not be used** to describe intronic variants
		*	<u>not correct:</u> NM\_004006.2:c.357+1T>A, LRG\_199:c.357+1T>A
		*	<u>correct:</u> NG\_012232.1(NM\_004006.2):c.357+1T>A, NC\_000023.10(NM\_004006.2):c.357+1T>A, LRG\_199t1:c.357+1T>A
	*	when a reference transcript file is not available, but a transcript is annotated in the genomic reference sequence, intronic variants can be described using the format "accession.version-number(v003):c.123+23G>A" where "v003" is the third transcript (CDS) annotated
	
* * *

## Reference Sequence Types

Depending on the variants to be reported, different reference sequence files are used at the DNA, RNA or protein level. The type of reference sequence file used is indicated using a **prefix** preceding the variant description. Approved reference sequence types are **g.**, **m.**, **c.**, **n.**, **r.** and **p.**: 

*	#### DNA
	*	**g.**	=	[genomic reference sequence](#DNAg)
	*	**m.**	=	[mitochondrial reference sequence](#DNAm)
	*	**c.**	=	[coding DNA reference sequence](#DNAc) (based on a protein coding transcript)
	*	**n.**	=	[non-coding DNA reference sequence](#DNAn) (based on a transcript not coding for a protein)
*	#### RNA
	*	**r.**	=	[RNA reference sequence](#RNAr)
*	#### protein
	*	**p.**	=	[protein reference sequence](#proteinp)

* * *

{:#DNAg}
### DNA - genomic reference sequence

*	the recommended DNA reference is a genomic reference sequence based on a recent genome build, e.g. NC\_000023.10 (for _Homo sapiens_ build GRCh37/hg19)
	*	for diagnostic applications it is recommended to use a [Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org/){:target="\_blank"}, , e.g. LRG\_199 ([_see Dalgleish 2010_](http://www.genomemedicine.com/content/pdf/gm145.pdf){:target="\_blank"}, or [_MacArthur 2014_](http://nar.oxfordjournals.org/content/42/D1/D873.full.pdf){:target="\_blank"}
		* 	when for a gene of interest **no LRG** is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}. 
		*	"**pending**” LRGs should not be used, they might change before being approved
		*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NG\_012232.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	a genomic reference sequence;
	*	should include all known exons and cover all known transcripts
	*	to facilitate the description of variants in immediate gene flanking regions (e.g. the promoter region), should contain several kilobases of 5' upstream (recommended is 5 kb) and 3' downstream (recommended 2 kb) sequences
*	when a complete genomic reference sequence is not available, a coding DNA reference sequence should be used.
*	for complex genes computational tools like the [Mutalyzer suite](http://www.mutalyzer.nl/position-converter){:target="\_blank"} can help to predict the consequences of a variant on all properly annotated transcripts, incl. when they derive from overlapping genes.


<a name="DNAm"></a>

### DNA - Mitochondrial reference sequence

*	the preferred human mtDNA reference sequence is [the _Homo sapiens_ mitochondrion, complete genome (GenBank NC_012920.1)](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1){:target="\_blank"}.


<a name="DNAc"></a>

### DNA - coding DNA reference sequence

*	the preferred coding DNA reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
		*	note that **LRG's are stable** (never change), established after consulting different experts and that all known transcript variants and protein isoforms can be annotated
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NM\_004006.2 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "**c.**" prefix, the transcript variant used should be indicated
	*	for LRG_'s the annotated "**transcript variant 1**" is described as "**<font color="red">t1</font>**", e.g. LRG\_199**<font color="red">t1</font>**:c.11T>G
*	the coding DNA reference sequence should be complete, cover the major and largest transcript known and include as many exons as possible, even when this transcript has not been proven to actually exist in nature
	*	exons that disrupt the main reading frame should not be included


<a name="DNAn"></a>

### DNA - non-coding DNA reference sequence

*	the preferred non-coding DNA reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
		*	note that **LRG's are stable** (never change), established after consulting different experts and that all known transcript variants can be annotated
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NR\_002196.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "**n.**" prefix, the transcript variant used should be indicated
	*	for LRG_'s the annotated "**transcript variant 1**" is described as "**<font color="red">t1</font>**", e.g. LRG\_163**<font color="red">t1</font>**:n.5C>T
*	the non-coding DNA reference sequence should be complete, cover the major and largest transcript known and include as many exons as possible, even when this transcript has not been proven to actually exist in nature


<a name="RNAr"></a>

### RNA reference sequence

*	the preferred RNA reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g.  NM\_004006.2 or NR\_002196.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "r." prefix, the transcript variant used should be indicated
	*	for LRG_'s the annotated "**transcript variant 1**" is described as "**<font color="red">t1</font>**", e.g. LRG\_199**<font color="red">t1</font>**:r.11u>g
*	nucleotide numbering for a RNA reference sequencing follows that of the associated coding or non-coding DNA reference sequence; nucleotide r.123 relates to c.123 or n.123.
* 	the reference sequence inclides the entire transcript, excluding the poly A-tail.

<a name="proteinp"></a>

### Protein reference sequence

*	the preferred protein reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NP\_003997.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "p." prefix, the reference protein isoform used should be indicated
	*	for LRG_'s the annotated "**protein isoform 1**" is described as "**<font color="red">p1</font>**", e.g. LRG\_199**<font color="red">p1</font>**:p.(ValGly)
*	the protein reference sequence should be complete, cover the major and largest protein isoform known and include as many exons as possible, even when this isoform has not been proven to actually exist in nature
*	the protein reference sequence should represent the primary translation product, not a processed mature protein, and thus include any signal peptide sequences.


* * *

<a name="discuss"></a>

### Discussions

*	Which reference sequence type should I use?
	:	Discussions on the **best reference sequence type to be used** have been very lively. In general it can be concluded that all suggestions made have their pro's and con's and there is no perfect solution.
	**Theoretically**, a genomic reference sequence is the best choice. By simply numbering nucleotides from 1 to the end of the file no problems occur with complex gene structures like multiple transcription start sites (promoters / 5'-first exons), multiple translation initiation sites (ATG-codons), exons and alternative splicing and the use of different 3'-terminal exons and poly-A addition sites.
	**In practice** a coding DNA reference sequence is mostly preferred. The most important reason is that from the description one immediately gets some information regarding the location of the variant; exonic or intronic, 5' of the ATG or 3' of the stop codon and, by dividing the nucleotide number by 3, the position of the amino acid residue that is affected ([_see Nucleotide numbering_](/bg-material/numbering)).

*	What are the disadvantages of using a genomic reference?
	:	**For a human**, a variant described using genomic reference sequence does not contain any useful information; the nucleotide number is just a big number between 1 and 250,000,000. In addition;
	:	*	descriptions of variants are very long making them impractical to use, e.g. NC\_000006.11:g.117198495\_117198496del compared to LRG\_199t1:c.57\_58del.
	:	*	genomic reference sequence file are very big making downloading time consuming and storage problematics.
	:	*	the transcriptional orientation of the gene of interest may be on the minus (-)  strand, complicating variant reporting using "c." and "r." prefixes; nucleotide numbering on coding DNA and RNA level are based on the transcriptional orientation of the gene and goes in the opposite direction, creating confusing situations.

*	What are the disadvantages of using a coding DNA reference?
	:	A gene may have several transcripts, using different promoters / 5'-first exons, alternatively spliced exons, different 3'-terminal exons and polyA-addition sites. In such cases, which transcript should then be used?  Every choice will mean some regions (exons) are not in the reference sequence, complicating variant description.
	The different transcripts may encode different proteins (isoforms) with, when different promoters are used, different N-terminal sequences and even using different reading frames in one or more exons (e.g. the CDKN2A gene encoding the p14 and p16 protein isoforms).
	When different genes (partly) overlap, using the same or an opposite transcriptional orientation, which reference sequence should one use to describe the variant and to which gene should it be assigned?

*	Making a judgment on what is the "wild type" (wt) nucleotide for some sequences seems arbitrary at best, correct?
	:	All variants are described in relation to a **"reference sequence**". The reference sequence is considered to be the "**wild type**" sequence, the major allele present in the human population, and the allele used in the latest genome build. Note that everybody has influence on the reference sequence selected and can thus request that a sequence is changed to represent the most common allele. However, the debate about what is wild type becomes arbitrary when variants are very common (near 50%) or differ between populations.

*	When description in relation to a reference sequence is problematic, could one specify the variant by giving 20 bp of flanking sequence on both sides?
	:	In many cases this would be OK, but for recently duplicated genes or genes which contain repeated segments, giving 20 nucleotides to either side will not be sufficient. Furthermore, descriptions will become very long. For problematic cases the best method is probably to include the raw data, i.e. submit the sample sequence to [GenBank](http://www.ncbi.nlm.nih.gov/genbank/submit){:target="\_blank"} and give the accession.version number obtained.

*	How should sequence variants in the mitochondrial DNA (mtDNA) be described ? (_M Paalman, Human Mutation_)
	:	The mtDNA genome is rather small and completely sequenced. Variants in the mitochondrial DNA should therefore be described in relation to a the full mitochondrial DNA sequence, i.e. for human [the _Homo sapiens_ mitochondrion, complete genome (GenBank NC\_012920.1)](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1){:target="\_blank"}. Descriptions should be preceded by "m.", like m.8993T>C. The mtDNA encodes a range of different proteins. Changes at protein level should be described based on a protein reference sequence, e.g. YP\_003024031.1:p.Leu156Pro.
	:	_**NOTE**_:	for issues related to mitochondrial DNA sequences [see MITOMAP](http://www.mitomap.org/){:target="\_blank"}.

*	How should variants be described in genes that produce only RNA (so no protein), e.g. ncRNA, miRNA, and others?
	:	To describe variants in genes that produce an RNA molecule but no protein a genomic reference sequence can be used ("**g.**" description). When a non-coding DNA reference sequence is available, e.g. a LRG (NR\_002196.1 for the H19 transcript) or a RefSeq transcript (NR\_000020.1 for the small nucleolar RNA, C/D box 33 (SNORD33) gene), variants can be described using the prefix "**n.**" see [_Community Consultation SVD-WG002_](/bg-material/community/SVD-WG002) and [_Nucleotide numbering_](/bg-material/numbering)).

*	We are preparing an annotated set of Hox genes from the zebrafish for publication. If the coding DNA sequence is not completely known, but only an EST lacking 5' sequence and a genomic sequence covering the EST, how do you describe variants?  Do I number it in relation to the EST or the genomic sequence?  Furthermore, if there is a mismatch between the genomic and the EST sequence, and you don't know which one is correct, how do you define e.g. whether the genomic sequence has an insertion or the EST has a deletion?
	:	Variants are described **compared to a reference sequence**. This implies the reference sequence is considered to be the "correct sequence. When a genomic sequence covering this EST is available the recommendation is to use this as the reference to describe variants. When the EST sequence is incomplete you want to describe changes in relation to this sequence use AA010203.2:54\_55insG, i.e. do not use a "g." or "c." prefix since neither a coding DNA nor a genomic reference sequence is used.


