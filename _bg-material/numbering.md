---
layout: default-md
title: Numbering
order: 4
permalink: /bg-material/numbering/
---

#{{ page.title }}

* * * 

### Genomic reference sequences

nucleotide numbering is simple; g.1, g.2, g.3, ..., etc. from the first to the last nucleotide of the reference sequence. Variant descriptions based on a genomic reference sequence **do not include** "+", "-", "*" or other signs.

* * * 

### Mitochondrial DNA reference sequences

nucleotide numbering is simple m.1, m.2, m.3, ....etc. from the first to the last nucleotide of the reference sequence. Variant descriptions based on a genomic reference sequence **do not include** "+", "-", "*" or other signs.
*	the preferred human mtDNA reference sequence is [the _Homo sapiens_ mitochondrion, complete genome (GenBank NC_012920.1)](http://www.ncbi.nlm.nih.gov/nucleotide/NC_012920.1).

* * * 

<a name="DNAc"></a>

### Coding DNA reference sequences

nucleotide numbering is based on the annotated protein isoform, the major translation product.

*	numbering starts with "c.1" at the **A** of the ATG translation initiation codon and ends with the **last nucleotide** of the translation stop codon (i.e. TA**A**, TA**G**, or TG**A**).
*	there is no nucleotide c.0.
*	nucleotides upstream (5') of the ATG-translation initiation codon (start) are marked with a "**-**" (minus) and numbered c.-1, c.-2, c.-3, etc. (i.e. going further upstream)
*	nucleotides downstream (3') of the translation termination codon (stop) are marked with a "*" (asterisk) and numbered c.*1, c.*2, c.*3, etc. (i.e. going further downstream)
*	nucleotides in introns
	*	nucleotides at the 5' end of an intron are numbered relative to the last nucleotide of the directly upstream exon, followed by a "**+**" (plus) and their position in to the intron, like c.87+1, c.87+2, c.87+3, ...
	*	nucleotides at the 3' end of an intron are numbered relative to the first nucleotide of the directly downstream exon, followed by a "**+**" (plus)  and their position out of the intron, like ..., c.88-3, c.88-2, c.88-1.
		*	in the middle of the intron nucleotide numbering changes from "**+**" (plus) to "**+**" (plus), c.87+678 to c.88-679
		*	the nucleotide exactly in the middle of an intron is numbered relative to the upstream exon followed by a "**+**" (plus)
		*	introns in the 5'UTR are numbered as normal introns, starting with **"c.-"** nucleotide numbers (c.-85+1, c.-85+2, c.-85+3, ..., c.-84-3, c.-84-2, c.-84-1)
		*	introns in the 3'UTR are numbered as normal introns, starting with **"c.*"** nucleotide numbers (c.*85+1, c.*85+2, c.*85+3, ..., c.*84-3, c.*84-2, c.*84-1)
*	suggestions have been made to extend the recommendations for the nucleotide numbering of coding DNA reference sequences to specifically mark non-transcribed nucleotides ([_see Open Issues_](/recommendations/open-issues)).

* * *

### non-coding DNA reference sequences

nucleotide numbering is simple; n.1, n.2, n.3, ..., etc. from the first to the last nucleotide of the reference sequence. Variant descriptions based on a genomic reference sequence **do not include** "+", "-", "*" or other signs.

* * * 

### RNA reference sequences

nucleotide numbering for a RNA reference sequencing follows that of the associated coding or non-coding DNA reference sequence; nucleotide r.123 relates to c.123 or n.123.

*	in a non-coding RNA reference sequences nucleotide numbering is simple; r.1, r.2, r.3, ..., etc. from the first to the last nucleotide of the reference sequence. Variant descriptions based on a genomic reference sequence **do not include** "+", "-", "*" or other signs.
*	in a coding RNA reference sequences nucleotide numbering is based on the annotated protein isoform, the major translation product, following that of a coding DNA reference sequence [_see coding DNA reference sequence_](#DNAc). Variant descriptions based on a genomic reference sequence **may include** "+", "-", "*" or other signs.

* * * 

##Discussions

*	Why do people prefer to report variants based on a coding DNA reference sequence?
	:	This topic is discussed on the ([_see Reference sequences page_](/bg-material/refeseq#discuss)). The two main reasons are that descriptions are 1) shorter then those based on a chromosomal genomic reference sequence (e.g. NC_000006.11:g.117198495_117198496del compared to LRG_199t1:c.57_58del) and 2) give some idea where the variant is located.
	*   **c.78**T>C is a variant in a protein coding sequence
	:	since nucleotide "c.78" has no signs attached and is not followed by a "+" or "-" and a second number it is located in the protein coding part of the gene.
	:	_**NOTE**_: this rules does not hold for alternative transcripts where exons might reside 5' of the translation initiation side, in an intron or 3' of the 3'-terminal exon.
	:	_**NOTE**_: dividing the nucleotide number by 3 gives the number of the amino acid residue affected, in the example amino acid 26 (**78:3 = 26**).
	*   **c.<font color="#FF0000">-</font>78**G>A is a variant upstream (5') of the translation initiation site, not in an intron
	:	since nucleotide "c.-78" has a "**<font color="#FF0000">-</font>**" prefix it is located 5' of the ATG translation initiation codon.
	:	_**NOTE**_: the length of the 5'UTR determines whether this nucleotide is still part of the transcript or upstream of the transcription initiation site (cap site).
	*	**c.<font color="#FF0000">*</font>78**T>A is a variant downstream (3') of the translation initiation site, not in an intron
	:	since nucleotide "c.*78" has a "**<font color="#FF0000">*</font>**" prefix it is located 3' of the translation termination codon.
	:	_**NOTE**_: the length of the 3'UTR determines whether this nucleotide is still part of the transcript or downstream of the polyA-addition site.
	*   **c.78<font color="#FF0000">+</font>45**T>G
	:	since nucleotide "c.78" is followed by "**<font color="#FF0000">+</font>**" and a second number ("45") the nucleotide is in an intron, 3' of the splice donor site and in the 5' half of the intron
	*   **c.79<font color="#FF0000">-</font>45**G>T
	:	since nucleotide "c.79" is followed by "**<font color="#FF0000">-</font>**" and a second number ("45") the nucleotide is in an intron, 5' of the splice acceptor site and in the 3' half of the intron

*	Recently two previously unidentified exons of the **TCOF1 gene** were identified, and named 6A and 16A. Exon 6A is present in most of the transcripts, exon 16A is included only in a few transcripts. In updating the nomenclature of reported variants in TCOF1, should I use a sequence that corresponds to the major transcript (with exon 6A, but without 16A) or to the longest ("most complete") transcript variant? (_Alessandra Splendore, Rio de Janeiro, Brasil_)
	:	This is the main problem of describing variants based on a coding DNA reference sequence, relative to a genomic reference sequence descriptions would be stable. The best solution is that the TCOF1-community gets together and decides on a reference sequence, our suggestions would be one representing the most complete transcript, i.e including exons 6A and 16A. Then contact the LRG-team and ask for a **[Locus Reference Genomic sequence (LRG)](http://www.lrg-sequence.org/lrg-request). 

* * *

<div>
    <button type="button" onclick="resize()" class="btn btn-link pull-right" data-toggle="collapse" data-target=".recs-definition" >
        <span class="glyphicon glyphicon-resize-full pull-right" id="resize"></span>
    </button>
</div>

## Figure

![Reference Sequence Figure](/assets/RefSeq.jpg){:.img-responsive .center-block #refSeqFig}

* * *

## Examples

The basic recommendation is that the _**reference sequence**_ used represents the _**major and largest transcript**_ of the gene. Variants present in alternative transcripts, not covered by the selected reference transcript, can be described based on annoted alternative transcript variants (e.g. LRG_199**t3**) or protein isoforms (e.g. LRG_199**p3**). However, alternatively spliced exons (5'-first, internal or 3'-terminal) derived from **within the gene** can be also numbered as for intronic sequences and variants in transcripts initiating or terminating **outside this region** can be described as upstream or downstream sequences. 

*   **alternative promoter**
    *   5' of the major transcript, e.g. [_Dp427c brain-specific transcript 5' of the DMD gene_](http://www.dmd.nl/seqs/murefDMD_intron_00.html#Dp427c)
    *   inside gene, e.g. [_Dp260 retina-specific transcript in intron 29 of the DMA gene_](http://www.dmd.nl/seqs/murefDMD_intron_29.html)
*   **introns in 5' untranslated region (UTR)**
:	e.g. [_three introns in the 5'UTR of the FKRP gene_](http://www.dmd.nl/seqs/murefFKRP.html), for numbering [_see coding DNA numbering_](DNAc)
*   **alternatively spliced exon**
    *   exon larger at 3' end;  [XXX](refseq_diffsplice3.html)
    *   entirely in intron;  [XXX](refseq_diffspliceM.html)
    *   exon larger at 5' end;  [XXX](refseq_diffsplice5.html)
*   **alternative 3' terminal exon**
    *   inside gene
        *   directly 3' of an exon; e.g. [_exon/intron 10 in the LMNA gene_](http://www.dmd.nl/seqs/LMNA_intron_10.html)
        *   completely in an intron; e.g. [_in intron 47 of the TTN gene_](http://www.dmd.nl/seqs/TTN_intron_47.html)
    *   after gene (in gene downstream sequence), e.g. [XXX](refseq_diffspliceM.html)