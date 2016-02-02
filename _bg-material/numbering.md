---
layout: default-md
title: Numbering
order: 4
permalink: /bg-material/numbering/
---

#{{ page.title }}

* * * 

> _Since references to WWW-sites are not yet acknowledged as citations, please mention [den Dunnen JT and Antonarakis SE (2000). Hum.Mutat. 15:7-12](http://www3.interscience.wiley.com/cgi-bin/fulltext/68503056/PDFSTART) when referring to these pages._

* * * 

## Genomic reference sequences

For genomic reference sequences, nucleotide numbering is simple 1, 2, 3, ....etc. from the first to the last nucleotide of the reference seqence. No "+", "-" or other signs are used.

* * * 

## Coding DNA reference sequences

In a coding DNA reference sequence nucleotide "1" is the **_A of the ATG translation initiation codon_**. The main reason why most people prefer a coding DNA reference sequence is that from the description one immediately gets some information regarding the location of the variant;

*   **_c.78T>C_**   >   protein coding  
    since the nucleotide "c.78" has no signs attached and is not followed by a "+" or "-" and a second number it is located in the protein coding part of the gene. _**NOTE:** this rules does not hold for alternative transcripts where exons might reside 5' of the translation initiation side, in an intron or 3' of the 3'-terminal exon_

*   **_c.<font color="#FF0000">-</font>78G>A_**  
    since the nucleotide "c.**<font color="#FF0000">-</font>**78" has a "**<font color="#FF0000">-</font>**" prefix it is located 5' of the ATG translation initiation codon. _**NOTE:** the length of the 5'UTR determines whether this position is still part of the transcript or upstream of the transcription initiation site (cap site)_

*   **_c.<font color="#FF0000">*</font>78T>A_**  
    since the nucleotide "c.**<font color="#FF0000">*</font>**78" has a "**<font color="#FF0000">*</font>**" prefix it is located 3' of the translation termination codon. _**NOTE:** the length of the 3'UTR determines whether this position is still part of the transcript or downstream of the polyA-addition site_

*   **_c.78<font color="#FF0000">+</font>45T>G_**  
    since the nucleotide "c.78" is followed by "**<font color="#FF0000">+</font>**" and a second number ("45") the nucleotide is in an intron, 3' of the splice donor site and before (5') of the middle of the intron

*   **_c.79<font color="#FF0000">-</font>45G>T_**  
    since the nucleotide "c.79" is followed by "**<font color="#FF0000">-</font>**" and a second number ("45") the nucleotide is in an intron, 5' of the splice acceptor site and after (3') of the middle of the intron

Dividing the nucleotide number by 3 gives the number of the amino acid residue affected, in the example amino acid 26 (_78:3 = 26_).

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

For a _**coding DNA reference sequence**_ the basic recommendation is that it _**should represent the major and largest transcript of the gene**_. Alternatively spliced exons (5'-first, internal or 3'-terminal) derived from **within the gene** can be numbered as for intronic sequences. Variants in transcripts initiating or terminating **outside this region** can be described as upstream / downstream sequences. 

**<u>Examples</u>**

*   **alternative promoter**
    *   5' of the major transcript; example [DMD promoter brain-specific transcript](http://www.dmd.nl/seqs/murefDMD_intron_00.html#Dp427c)
    *   inside gene; example [DMD promoter retina-specific transcript](http://www.dmd.nl/seqs/murefDMD_intron_29.html)  _(in intron 29)_
*   **introns in 5' untranslated region (UTR)** for details _[see RefSeq numbering with introns 5' of the ATG](refseq.html#IVSin5)_ example [FKRP coding DNA reference sequence](http://www.dmd.nl/seqs/murefFKRP.html) _(three 5' UTR introns)_
*   **alternatively spliced exon**
    *   exon larger at 3' end;  [example](refseq_diffsplice3.html)
    *   entirely in intron;  [example](refseq_diffspliceM.html)
    *   exon larger at 5' end;  [example](refseq_diffsplice5.html)
*   **alternative 3' terminal exon**
    *   inside gene
        *   directly 3' of exon; example [LMNA coding DNA reference sequence](http://www.dmd.nl/seqs/LMNA_intron_10.html)  _(exon/intron 10)_
        *   completely in intron; example [TTN coding DNA reference sequence](http://www.dmd.nl/seqs/TTN_intron_47.html)  _(in intron 47)_
    *   after gene (in gene downstream sequence);  [example](refseq_diffspliceM.html)