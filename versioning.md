---
layout: default
title: Versioning
permalink: /versioning/
---

# {{ page.title }}

* * *

## Introduction


The recommendations for the description of sequence variants are designed to be **_stable_**, **_meaningful_**, **_memorable_** and **_unequivocal_**. Still, every now and then small modifications will need to be made to remove small inconsistencies and/or to clarify confusing conventions. In addition, the recommendations may be extended to resolve cases that were hitherto not covered. To allow users to specify up to what point they follow the HGVS recommendations we have started to work with version numbers.

As of now, **_any change_** in the recommendations will get a new _version number based on the date of the change_. Both in the [version list](#version-list), and on the page giving details of the change, it will be clearly marked using a format like **_date 2012-08-31_**. The version of the HGVS recommendations including that change will be _**version 2.120831**_.

At the top of all pages on this site you will also find a **_Last modified_** date. This date indicates when the respective page was modified last. When this includes changes/extensions of the HGVS recommendation, the version number of the recommendation will also change. Note however that it often happens that simply a typing error was corrected, an example was added, an explanation was further clarified, a question answered, etc. In such cases the recommendations do not actually change and the version number will thus also not change.



## Versions

**Version 0**  -  On the page "[History regarding the description of sequence variants](/history)" we give an overview of all publications on the description of sequence variants. These papers can be considered as pre-versions of the first recommendations, a version 0.

**Version 1  -** we consider the 2000 publication of den Dunnen JT and Antonarakis SE (_Mutation nomenclature extensions and suggestions to describe complex mutations: a discussion_. [_Hum.Mutat._ **15** (1): 7-12](http://www3.interscience.wiley.com/cgi-bin/fulltext/68503056/PDFSTART)) as a more formal set of recommendations, i.e. version 1\.

**Version 2**  -  We are currently preparing a new publication that will summarize the current HGVS recommendations. The most significant and latest changes for version 2.0 compared to version 1.0 include;

*   **_Reference sequence_** -  the recommendation is to use a [Locus Reference Genomic sequence](http://www.lrg-sequence.org/) (LRG) ([_Dalgleish et al. 2010_](http://genomemedicine.com/content/2/4/24)) as the reference sequence for variant descriptions. LRGs support descriptions using both genomic and coding DNA reference sequences and have been specifically made for application in a diagnostic setting ([_see Reference Sequences_](/bg-material/refseq)).  
    In addition, indicators for new types of reference sequences have been added (e.g. m. and n., [_see Standards_](standards.html#refseq)) as well as indicators to specify different transcripts / protein isoforms generated from one gene ([_see Standards_](standards.html#traiso))
*   **_Definitions_**  -  to enhance clarity as well as to facilitate computational analysis and description of sequence variants, the basic types of variants had to be defined more strictly. In addition descriptions have been prioritized, meaning that when a description is possible according to several classes, e.g. as a duplication or an insertion, one specific class is preferred. For an overview [_see Standards - definitions_](standards.html#define))
*   **_Pre-existing standards_**  -  several scientist have pointed out that we have thus far neglected the fact that some standards were already existing before those for the description of sequence changes were made. It is thus essential that we follow these standards in our recommendations. The most important of these are the pre-existing standards from the IUPAC (_International Union of Pure and Applied Chemistry_) and IUBMB (_International Union of Biochemistry and Molecular Biology_) for the description of nucleic acids and amino acids (see below). These include letter codes to describe incompletely specified residues at both DNA and protein level  ([see _Standards_](standards.html#aacode)). The most controversial of these changes is that where <font color="#FF0000"> the description of the stop codon </font> at protein/amino acid level <font color="#FF0000"> changed from 'X' to 'Ter'/'*' </font> since 'X' in the _IUPAC-IUB_ nomenclature means an "_unspecified_" or "_unknown_" amino acid.
    *   [Nomenclature for Incompletely Specified Bases in Nucleic Acid Sequences](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html)  -  _IUBMB (NC-IUB)_ <br>
        specifying the description of nucleotides ([_see list_](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500))
    *   [Nomenclature and Symbolism for Amino Acids and Peptides](http://www.chem.qmul.ac.uk/iupac/AminoAcid/)  -  _IUPAC-IUB_ <br>
        specifying the description of amino acids ([_see list_](http://www.chem.qmul.ac.uk/iupac/AminoAcid/AA1n2.html#AA1))
    *   NCBI standards for sequence files and database searches (e.g. [BLAST)](http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml)
*   **_Incorporate ISCN standards_**  -  to describe microscopically visible chromosomal changes, the cytogenetics community uses the ISCN (_International System for Human Cytogenetic Nomenclature_) standards (see [_ISCN-2005_](http://books.google.nl/books?id=kycmqGobz9QC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false)); the latest update is from 2009 (editors Lisa Schaffer, Marilyn Slovak, Lynda Campbell). Were initially direct chromosome spreads used only, later hybridisation technologies like FISH (Fluorescent In Situ Hybridisation) and arrays (arrayCHG, SNP-arrays) were introduced to determine the state of specific sequences tested.    On the HGVS pages we have since 2005 suggested ways to describe changes detected using such technologies ([_see Uncertainties_](uncertain.html)). These recommendations have now matured and been incorporated.  Furthermore, where possible, we have incorporated established ISCN standards in the HGVS recommendations. Examples include the use of  "/" to describe somatic variants and "//" for chimerism (_[see Standards](standards.html#ISCN)_). 
*   _**Simplification**_  -  in the 2000 recommendations (v1.0), some symbols were used for more then one purpose which may lead to undesired confusion. For example the "+" character was used both in nucleotide numbering (indicating an intronic position) and to separate two alleles while for the latter also the ";" character was used. The recommendation is now to use only ";". A complete overview of the characters and codes use can be found at the [_Standards page_](standards.html#characters).
*   **_Prediction / experimental proof_** -  it is often not clear whether a description of a variant at protein level is based on experimental evidence or merely a prediction based on what was detected at DNA level. To make this distinction more obvious, the recommendation is to describe the variant at protein level between brackets, like p.(Arg12Gly), when it is a prediction based on DNA data only. When RNA has been analysed, and some experimental evidence exists to support the prediction, the variant may be described without brackets, like p.Arg12Gly. 
*   **_Repeated sequences_**  -  the 2000 recommendations where not very specific regarding the description of a variability in repeated sequences, mono-, di-, tri-nucleotide stretches, etc. Recommendations for the description of such variability have now set ([_see Recommendations_](/recommendations)). The format designed is also used to describe more complex copy number variation of larger stretches of DNA, e.g. the presence of two additional copies of one or more exons of a gene, often with the breakpoints not fully characterised.


{:#version-list}
## Version List

*   **_Version 2.1511_**
    Accepted proposals include [SVD-WG001](accepted001.html) and [SVD-WG002](accepted002.html)  
    SVD-WG001 (<span style="font-style: italic;">No change</span>) allows descriptions like g.11890634G=, c.123G=, r.123g= and p.(Arg41=).  
    SVD-WG001 (<span style="font-style: italic;">n. reference sequence</span>) allows descriptions like NR_028379.1(FTX):n.345A>G.  

*   **_Version 2.121101_
    Variants affecting translation termination**  -  at protein level, variants that replace the translation termination codon but do not encounter a new stop codon in the new reading frame are described using the format "p.*321Argext*?", frame shift variants with the same effect are described using the format "p.Ile321Argfs*?" (see [_Protein descriptions_](/recommendations/protein))

*   **_Version 2.120831_**
    *   **Protein description between brackets**  -  brackets can be omitted when there is sufficient experimental proof from other studies.
    *   **Variants affecting translation initiation**  -  at protein level, variants that generate a new upstream translation initiation codons are described using the format "p.Met1ext-5" (see _[Discussion](disc.html#p-initiation)_).