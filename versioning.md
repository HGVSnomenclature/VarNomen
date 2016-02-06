---
layout: default
title: Versioning
permalink: /versioning/
---

# {{ page.title }}

* * *

## Version list

* * *

HGVS nomenclature _**version 15.11**_ is described in [Den Dunnen et al. (2016). HGVS recommendations for the description of sequence variants: 2016 update. Hum.Mutat. _in press_](XXX). The most significant changes between version 15.11 and version 1.0 include;

*   **_Reference sequence_** -  for diagnostic applications, the recommendation is to use a [Locus Reference Genomic sequence](http://www.lrg-sequence.org/) (LRG) ([_Dalgleish et al. 2010_](http://genomemedicine.com/content/2/4/24)) as the reference sequence for variant descriptions ([_see Reference Sequences_](/bg-material/refseq)).  
	*	indicators for new reference sequence types have been added (e.g. **m.** and **n.**, [_see Reference sequences_](/bg-material/refseq)) as well as indicators to specify different transcript variants (**t1**) and protein isoforms (**p1**) annotated in one reference sequence ([_see Reference Sequences_](/bg-material/refseq#DNAc))
*	**_Definitions_**  -  to enhance clarity as well as to facilitate computational analysis and description of sequence variants, the basic types of variants were defined more strictly. In addition variant types were prioritized ([_see Standards - definitions_](standards.html#define))
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

* * *

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