---
layout: default
title: Versioning
permalink: /versioning/
---

# {{ page.title }}

The current HGVS version number is shown in the top right corner of this web site ("_**Version xx.xx**_"). Note that when a typing error is corrected, an example added, an explanation clarified, a question answered, etc., the recommendations do not actually change and the version number remains as is.

####The current version is HGVS nomenclature v15.11.

HGVS nomenclature _**version 15.11**_ is described in Den Dunnen et al. (2016). _HGVS recommendations for the description of sequence variants: 2016 update_. [Hum.Mutat. _in press_](XXX). The most significant changes between version 15.11 and version 1.0 are [_described below_](#v1511). For proposals open for Community Consultation and issues currently discussed, [_see Open Issues_](/recommendations/open-issues/).

* * *

## Version list

* * *

{:#version-list}

*   **_Version 15.11_**
	:	Accepted proposals include [_SVD-WG001_](accepted001.html) and [_SVD-WG002_](accepted002.html). SVD-WG001 (_No change_) allows descriptions like g.11890634G=, c.123G=, r.123g= and p.(Arg41=). SVD-WG002 (_n. reference sequence_) allows descriptions like NR_028379.1:n.345A>G.  

*   **_Version 2.121101_**
	:	Variants affecting translation termination**  -  variants that replace the translation termination codon but do not encounter a new stop in the new reading frame are described as "p.*321Argext*?". Frame shift variants with the same effect are described as "p.Ile321Argfs*?" ([_see Protein descriptions_](/recommendations/protein))

*   **_Version 2.120831_**
	:	**Protein description in parentheses**  -  parentheses in protein variant descriptions can be omitted when there is sufficient experimental evidence
	:	**Variants affecting translation initiation**  -  at protein level, variants that generate a new upstream translation initiation codons are described using the format "p.Met1ext-5" ([_see Protein extensions_](/recommendations/protein/variant/extension)).
    
* * *

<a name ="v1511"></a>

*   **_Reference sequence_** -  for diagnostic applications, the recommendation is to use a [Locus Reference Genomic sequence](http://www.lrg-sequence.org/) (LRG) ([_Dalgleish et al. 2010_](http://genomemedicine.com/content/2/4/24)) as the reference sequence for variant descriptions ([_see Reference Sequences_](/bg-material/refseq)). Prefixes for new reference sequence types have been added (e.g. **m.** and **n.**, [_see Reference sequences_](/bg-material/refseq)) as well as indicators to specify different transcript variants (**t1**) and protein isoforms (**p1**) annotated in one reference sequence ([_see Reference Sequences_](/bg-material/refseq#DNAc))
*	**_Definitions_**  -  the basic types of variants were defined more strictly. In addition variant types have been prioritized ([_see General recommendations_](/recommendations/general))
*   **_Pre-existing standards_**  -  pre-existing standards from the IUPAC (_International Union of Pure and Applied Chemistry_) and IUBMB (_International Union of Biochemistry and Molecular Biology_) for the description of nucleotides and amino acids are now used throughout the recommendations. These include letter codes to describe incompletely specified residues at both DNA and protein level ([see _Standards_](/bg-material/standards#aacode)). Description of the translation termination (stop) codon at the protein/amino acid level <font color="#FF0000">changed from "X" to "Ter" / "*"</font> since 'X' in the _IUPAC-IUB_ nomenclature means an "_unspecified_" or "_unknown_" amino acid.
*   **_Incorporate ISCN standards_**  -  recommendations have been made to describe changes with uncertain break points (i.e. not sequenced), obtained using technologies like FISH, arrays and MLPA. Furthermore, where possible, HGVS incorporated established ISCN standards in the recommendations, include the use of "**/**" (forward slash) to describe somatic variants and "**//**" for chimerism ([_see General recommendations_](/recommendations/general)). 
*   _**Simplification**_  -  in HGVS version 1.0 some symbols were used for more then one purpose leading to some undesired confusion. These inconsistencies have been removed.
*   **_Prediction / experimental proof_** -  to clarify a variant described at the protein level is a prediction, without experimental evidence, the recommendation is to describe it in parentheses, like p.(Arg12Gly). 
*   **_Repeated sequences_**  -  recommendations were made to describe variability in repeated sequences, mono-, di-, tri-nucleotide stretches, etc. ([_see Repeated sequences_](/recommendations/DNA/variant/repeated)).