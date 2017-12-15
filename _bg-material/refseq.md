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
	* approved reference sequence formats include; NC\_# (e.g. NC\_000023.10), LRG\_# (e.g. LRG\_199), NG\_# (e.g. NG\_012232.1), ENSG00000182533.6, NM\_# (e.g. NM\_004006.2), ENST00000343849.2, NR\_# (e.g. NR\_002196.1) and NP\_# (e.g. NP\_003997.1)
*	a reference sequence file identifier should contain both the **accession** and **version number**
	*	NG\_012232**<font color="red">.1</font>** is correct, NG\_012232 not (lacks the essential version number)
	*	LRG reference sequences do not contain a version number (e.g. LRG\_199)
*	specifications to a specific annotated segment of a reference sequence can be given in parentheses directly after the reference sequence
	*	NG\_012232.1(NM\_004006.2) indicates that the variant to be described, is based on the coding DNA reference sequence NM\_004006.2 as annotated in NG\_012232.1
	*	accepted specifications include transcripts (NM\_004006.2, DMD\_v001, MT-TL1) or proteins (NP\_003997.1, DMD\i001, YP\_003024028.1)
		*	DMD\_v001 indicates the first DMD transcript (CDS) **<font color="red">v</font>**ariant annotated; can be used when transcript reference sequence records are not available
		*	DMD\_i001 indicates the first DMD protein **<font color="red">i</font>**soform annotated; can be used when protein reference sequence records are not available
*	a "**<font color="red">:</font>**" (colon) is used as a separator between the reference sequence file identifier (_accession.version-number_) and the actual description of a variant; NC\_000011.9**<font color="red">:</font>**g.12345611G>A
*	the **recommended reference** is a genomic reference sequence based on a recent genome build, e.g. NC\_000023.10 (for _Homo sapiens_ chromosome X, build GRCh37/hg19)
*	the reference sequence used **must contain** the variant residue described
	*	a coding DNA reference sequence does not contain intron or 5' and 3' gene flanking sequences and can therefore **not be used** to describe variants in introns and up/down-stream of the gene
		*	<u>not correct:</u> NM\_004006.2:c.357+1G>A, LRG\_199:c.357+1G>A
		*	<u>correct:</u> NG\_012232.1(NM\_004006.2):c.357+1G>A, NC\_000023.10(NM\_004006.2):c.357+1G>A, LRG\_199t1:c.357+1G>A

* * *

## Reference Sequence Types

Depending on the variants to be reported, different reference sequence files are used at the DNA, RNA or protein level. The type of reference sequence file used is indicated using a **prefix** preceding the variant description. Approved reference sequence types are **g.**, **m.**, **c.**, **n.**, **r.** and **p.**: 

*	#### DNA
	*	**g.**	=	[genomic reference sequence](#DNAg)
	*	**m.**	=	[mitochondrial reference](#DNAg)
	*	**c.**	=	[coding DNA reference sequence](#DNAc) (based on a protein coding transcript)
	*	**n.**	=	[non-coding DNA reference sequence](#DNAn) (based on a transcript not coding for a protein)
*	#### RNA
	*	**r.**	=	[RNA reference sequence](#RNAr)
*	#### protein
	*	**p.**	=	[protein reference sequence](#proteinp)

* * *

{:#DNAg}

### DNA - genomic reference sequence

*	the recommended DNA reference is a genomic reference sequence
	:	genomic reference sequences includes a mitochondrial sequence, chloroplast sequences, plasmid sequence, viral resuence, etc. and those base on a recent genome build, e.g. NC\_000023.10 (for _Homo sapiens_ build GRCh37/hg19)
	:	_**EXCEPTION:**_  the **m.** prefix for a mitochondrial reference sequence is well-established, universally used, unequivocal, and therefore recommended for reporting variants in a mitochondrial sequence.
	:	_**NOTE:**_  for diagnostic applications a [Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org/){:target="\_blank"}, e.g. LRG\_199 ([_see Dalgleish 2010_](http://www.genomemedicine.com/content/pdf/gm145.pdf){:target="\_blank"}, or [_MacArthur 2014_](http://nar.oxfordjournals.org/content/42/D1/D873.full.pdf){:target="\_blank"}, can be used in addition
		* 	when for a gene of interest **no LRG** is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}. 
		*	"**pending**” LRGs should not be used, they might change before being approved
		*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NG\_012232.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	a genomic reference sequence;
	*	should include all known exons and cover all known transcripts
	*	to facilitate the description of variants in immediate gene flanking regions (e.g. the promoter region), should contain several kilobases of 5' upstream (recommended is 5 kb) and 3' downstream (recommended 2 kb) sequences
*	when a complete genomic reference sequence is not available, a coding DNA reference sequence should be used.
*	for complex genes computational tools like the [Mutalyzer suite](http://www.mutalyzer.nl/position-converter){:target="\_blank"} can help to predict the consequences of a variant on all properly annotated transcripts, incl. when they derive from overlapping genes.


{:#DNAm}

### DNA - Mitochondrial reference sequence

*	a mitochondrial reference sequence is, by definition, a genomic reference sequence.  However, since the **m.** prefix is well-established, universally used and unequivocal the use of a mitochondrial reference sequence is indicated using the **m.** prefix
*	the preferred human mtDNA reference sequence is the [_Homo sapiens_ mitochondrion, complete genome (GenBank NC_012920.1)](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1){:target="\_blank"}.
	:	_**NOTE:**_	the mtDNA reference sequence is a **circular molecule** ([_see Open Issues_](/recommendations/open-issues/#circular))


{:#DNAc}

### DNA - coding DNA reference sequence

*	the preferred coding DNA reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
		*	note that **LRG's are stable** (never change), established after consulting different experts and that all known transcript variants and protein isoforms can be annotated
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NM\_004006.2 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	a coding DNA reference sequence does **not contain** intron or 5' and 3' gene flanking sequences and can therefore **not be used** to describe variants in introns and up/down-stream of the gene
*	when, based on a genomic reference sequence, variants are reported using a "**c.**" prefix, the transcript variant used should be indicated
	*	for LRG\_'s an annotated "**transcript variant 1**" is described as "**<font color="red">t1</font>**", e.g. LRG\_199**<font color="red">t1</font>**:c.11T>G
	*	for NC\_ or NG\_ reference sequences the annotated transcript used is given in parentheses directly following the accession.version number, giving variant descriptions like NC\_000023.10(NM\_004006.2):c.357+1G>A or NG\_012232.1(NM\_004006.2):c.357+1G>A
*	the coding DNA reference sequence should be complete, cover the major and largest transcript known and include as many exons as possible, even when this transcript has not been proven to actually exist in nature
	*	exons that disrupt the main reading frame should not be included
	*	for human, [EBI](http://www.ensembl.org/Help/Glossary?id=346){:target="\_blank"} uses the following hierarchy to select the prefered transcript: **1.** longest CCDS translation with no stop codons. **2.** if no (1), choose the longest Ensembl/Havana merged translation with no stop codons. **3.** if no (2), choose the longest translation with no stop codons. **4.** if no translation, choose the longest non-protein-coding transcript.
*	when a **gene is located on the minus strand** the location of a variant nucleotide may differ when described based on a genomic or a coding DNA reference sequence. Applying the 3'rule, NC\_000023.10:g.32361300del describes the deletion of a T from a mononucleotide stretch in the DMD gene. On the opposite strand NC\_000023.10:g.32361300 links to nucleotide NM\_004006.1:c.5690. However, applying the 3'rule, based on a coding DNA reference sequence this variant is described as NM\_004006.1:c.5697del (linking to NC\_000023.10:g.32361293). See also [different genomic (g.) and coding DNA (c.) descriptions](/recommendations/DNA/variant/repeated/).

{:#DNAn}

### DNA - non-coding DNA reference sequence

*	the preferred non-coding DNA reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
		*	note that **LRG's are stable** (never change), established after consulting different experts and that all known transcript variants can be annotated
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NR\_002196.2 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "**n.**" prefix, the transcript variant used should be indicated
	*	for LRG\_'s the annotated "**transcript variant 1**" is described as "**<font color="red">t1</font>**", e.g. LRG\_163**<font color="red">t1</font>**:n.5C>T
*	the non-coding DNA reference sequence should be complete, cover the major and largest transcript known and include as many exons as possible, even when this transcript has not been proven to actually exist in nature
*	when a **gene is located on the minus strand** the location of a variant nucleotide may differ when described based on a genomic or a coding DNA reference sequence. Applying the 3'rule, NC\_000023.10:g.2019099del describes the deletion of a T from a mononucleotide stretch in the DMD gene. On the opposite strand NC\_000023.10:g.2019099 links to nucleotide NR\_002196.2:n.7. However, applying the 3'rule, based on a coding DNA reference sequence this variant is described as NR\_002196.2:n.7del (linking to NC\_000023.10:g.20190955). See also [_different genomic (g.) and coding DNA (c.) descriptions_](/recommendations/DNA/variant/repeated/).

{:#RNAr}

### RNA reference sequence

*	the preferred RNA reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g.  NM\_004006.2 or NR\_002196.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "r." prefix, the transcript variant used should be indicated
	*	for LRG\_'s the annotated "**transcript variant 1**" is described as "**<font color="red">t1</font>**", e.g. LRG\_199**<font color="red">t1</font>**:r.11u>g
	*	for NC\_ or NG\_ reference sequences the annotated transcript used is given in parentheses directly following the accession.version number, giving variant descriptions like NC\_000023.10(NM\_004006.2):r.357\_358ins357+1\_357+12 or NG\_012232.1(NM\_004006.2):r.357\_358ins357+1\_357+12
*	nucleotide numbering for a RNA reference sequencing follows that of the associated coding or non-coding DNA reference sequence; nucleotide r.123 relates to c.123 or n.123.
	*	a coding DNA reference sequence does not contain intron sequences and can therefore **not be used** to describe variants affecting intron sequences
* 	the reference sequence inclides the entire transcript, excluding the poly A-tail.
*	when a **gene is located on the minus strand** the location of a variant nucleotide may differ when described based on a genomic or a coding DNA reference sequence. Applying the 3'rule, NC\_000023.10:g.32361300del describes the deletion of a T from a mononucleotide stretch in the DMD gene. On the opposite strand NC\_000023.10:g.32361300 links to nucleotide NM\_004006.1:r.5690. However, applying the 3'rule, based on a coding DNA reference sequence this variant is described as NM\_004006.1:r.5697del (linking to NC\_000023.10:g.32361293).

{:#proteinp}

### Protein reference sequence

*	the preferred protein reference sequence is a [**Locus Reference Genomic sequence (LRG)**](http://www.lrg-sequence.org){:target="\_blank"}.
	*	when no LRG is available, [one should be requested](http://www.lrg-sequence.org/lrg-request){:target="\_blank"}.
	*	"**pending**” LRGs should not be used, they might change before being approved
	*	while a LRG is requested, the use of a RefSeq sequence is recommended, e.g. NP\_003997.1 ([see O'Leary 2016](http://nar.oxfordjournals.org/content/44/D1/D733.full.pdf){:target="\_blank"})
*	when, based on a genomic reference sequence, variants are reported using a "p." prefix, the reference protein isoform used should be indicated
	*	for LRG\_'s the annotated "**protein isoform 1**" is described as "**<font color="red">p1</font>**", e.g. LRG\_199**<font color="red">p1</font>**:p.(Val25Gly)
*	the protein reference sequence should be complete, cover the major and largest protein isoform known and include as many exons as possible, even when this isoform has not been proven to actually exist in nature
*	the protein reference sequence should represent the primary translation product, not a processed mature protein, and thus include any signal peptide sequences.


* * *

{:#discuss}

## Q&A

*	Which reference sequence type should I use?
	:	Discussions on the **best reference sequence type to be used** have been very lively. In general it can be concluded that all suggestions made have their pro's and con's and there is no perfect solution.
	**Theoretically**, a genomic reference sequence is the best choice. By simply numbering nucleotides from 1 to the end of the file no problems occur with complex gene structures like multiple transcription start sites (promoters / 5'-first exons), multiple translation initiation sites (ATG-codons), exons and alternative splicing and the use of different 3'-terminal exons and poly-A addition sites.
	**In practice** a coding DNA reference sequence is mostly preferred. The most important reason is that from the description one immediately gets some information regarding the location of the variant; exonic or intronic, 5' of the ATG or 3' of the stop codon and, by dividing the nucleotide number by 3, the position of the amino acid residue that is affected ([_see Nucleotide numbering_](/bg-material/numbering)).

*	Why is it necessary to give both the accession AND version number of a reference sequence?
	:	When for a reference sequence no version number is given it is not possible to correctly deduce the variant described. Take variant NM\_002111:c.211C>T. The description is based on a coding DNA reference sequence of the human HTT (huntingtin) gene. The sequence contains a triplet repeat sequence which is variable in length in the population. Over the years this reference sequence had 8 different versions, from NM\_002111.1 to NM\_002111.8. One of the differences between these sequences is that the length of the Gln-encoding triplet changed in length from 0 to 23 to 21 to 23. As a consequence, when one does not know the version number of NM_002111, one can not know what variant is described with c.358C>T (note that ALL versions have a C nucleotide at position c.358 so there are three different posibilities).

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

{:#mtDNA}

*	How should sequence variants in the mitochondrial DNA (mtDNA) be described ? (_M Paalman, Human Mutation_)
	:	The mtDNA genome is rather small and completely sequenced. Variants in the mitochondrial DNA should therefore be described in relation to a the full mitochondrial DNA sequence, i.e. for human [the _Homo sapiens_ mitochondrion, complete genome (GenBank NC\_012920.1)](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1){:target="\_blank"}. Since a mitochondrial reference sequence is a genomic reference sequence descriptions should be preceded by "g.", like g.8993T>C. The mtDNA encodes a range of different proteins. Changes at protein level should be described based on a protein reference sequence, e.g. YP\_003024031.1:p.Leu156Pro.
	:	_**NOTE**_:	for issues related to mitochondrial DNA sequences [see MITOMAP](http://www.mitomap.org/){:target="\_blank"}.
	*	NC\_012920.1:m.3243A>G describes variant 3243A>G based on the mitochondrial reference sequence NC\_012920.1
	*	NC\_012920.1:m.3243A>G (MT-TL1) describes variant 3243A>G in the MT-LT1 genes based on the mitochondrial reference sequence NC\_012920.1
	*	NC\_012920.1(MT-TL1):n.14A>G describes variant 14A>G based on the annotated MT-TL1 non-coding DNA reference sequence of the MT-TL1 gene in NC\_012920.1
	
*	For mitochondrial variants we use the format MT-ND1{NC\_012920.1}: m.[3460G>A], i.e. the gene in front of the reference sequence in curly brackets, a colon, an m and full stop and then the variant in square brackets, and a change in the protein as MT-ND1{YP\_003024026.1}: p.[(Ala52Thr)]. To be clear, is it not longer required to report/state the gene in front of the reference sequence?
	:	The format your give does not (nor did ever) follow HGVS recommendations. Correct HGVS formats are NC\_012920.1:m.3460G>A and YP\_003024026.1:p.(Ala52Thr). It is allowed, but not mandatory, to mention the gene affected (e.g. NC\_012920.1(MT-ND1):m.3460G>A). Since there are several different proteins annotated on the mtDNA reference sequence, a protein variant based on the mtDNA sequence can only be described when the gene affected is given; NC\_012920.1(MT-ND1):p.(Ala52Thr).

*	How should variants be described in genes that produce only RNA (so no protein), e.g. ncRNA, miRNA, and others?
	:	To describe variants in genes that produce an RNA molecule but no protein a genomic reference sequence can be used ("**g.**" description). When a non-coding DNA reference sequence is available, e.g. a LRG (NR\_002196.1 for the H19 transcript) or a RefSeq transcript (NR\_000020.1 for the small nucleolar RNA, C/D box 33 (SNORD33) gene), variants can be described using the prefix "**n.**" see [_Community Consultation SVD-WG002_](/bg-material/community/SVD-WG002) and [_Nucleotide numbering_](/bg-material/numbering)).

*	We are preparing an annotated set of Hox genes from the zebrafish for publication. If the coding DNA sequence is not completely known, but only an EST lacking 5' sequence and a genomic sequence covering the EST, how do you describe variants?  Do I number it in relation to the EST or the genomic sequence?  Furthermore, if there is a mismatch between the genomic and the EST sequence, and you don't know which one is correct, how do you define e.g. whether the genomic sequence has an insertion or the EST has a deletion?
	:	Variants are described **compared to a reference sequence**. This implies the reference sequence is considered to be the "correct sequence. When a genomic sequence covering this EST is available the recommendation is to use this as the reference to describe variants. When the EST sequence is incomplete you want to describe changes in relation to this sequence use AA010203.2:54\_55insG, i.e. do not use a "g." or "c." prefix since neither a coding DNA nor a genomic reference sequence is used.
