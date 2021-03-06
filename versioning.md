---
layout: default
title: Versioning
permalink: /versioning/
---

# {{ page.title }}

The current HGVS version number is shown in the top right corner of this web site ("_**Version xx.xx**_"). Note that the version does not change when a typing error is corrected, an example added, an explanation clarified, a question answered, etc.

#### The current version is HGVS nomenclature v15.11.

HGVS nomenclature _**version 15.11**_ is described in Den Dunnen et al. (2016) [HGVS recommendations for the description of sequence variants: 2016 update. Hum.Mutat. 25: 37: 564-569](http://onlinelibrary.wiley.com/doi/10.1002/humu.22981/pdf){:target="\_blank"}. The most significant changes between version 15.11 and version 1.0 are [_described below_](#v1511). For proposals open for Community Consultation and issues currently discussed, [_see Open Issues_](/recommendations/open-issues/).

* * *

## Version list

* * *

{:#version-list}

*   _**Version 15.11**_
	:	Accepted proposals include [_SVD-WG001_](http://www.hgvs.org/mutnomen/accepted001.html){:target="\_blank"} and [_SVD-WG002_](http://www.hgvs.org/mutnomen/accepted002.html){:target="\_blank"}.
	:	SVD-WG001 (_No change_) allows descriptions like g.11890634G=, c.123G=, r.123g= and p.(Arg41=).
	:	SVD-WG002 (_n. reference sequence_) allows descriptions like NR_028379.1:n.345A>G.  

*   _**Version 2.121101**_
	:	**Variants affecting translation termination**  -  variants that replace the translation termination codon but do not encounter a new stop in the new reading frame are described as "p.*321Argext*?". Frame shift variants with the same effect are described as "p.Ile321Argfs*?" ([_see Protein descriptions_](/recommendations/protein/variant/extension))

*   _**Version 2.120831**_
	:	**Protein description in parentheses**  -  parentheses in protein variant descriptions can be omitted when there is sufficient experimental evidence
	:	**Variants affecting translation initiation**  -  at protein level, variants that generate a new upstream translation initiation codons are described using the format "p.Met1ext-5" ([_see Protein extensions_](/recommendations/protein/variant/extension)).
    
* * *

<a name ="v1511"></a>

*   _**Reference sequence**_
	:	for diagnostic applications, the recommendation is to use a [Locus Reference Genomic sequence](http://www.lrg-sequence.org/){:target="\_blank"} (LRG, [Dalgleish et al. 2010](http://genomemedicine.com/content/2/4/24){:target="\_blank"}) as the reference sequence for variant descriptions. Prefixes for new reference sequence types have been added (e.g. **m.** and **n.**, as well as indicators to specify different transcript variants (**t1**) and protein isoforms (**p1**) annotated in the reference sequence ([_see Reference Sequences_](/bg-material/refseq#DNAc))
*	_**Definitions**_
	:	the basic types of variants were defined more strictly. In addition variant types have been prioritized ([_see General recommendations_](/recommendations/general))
*   _**Pre-existing standards**_
	:	pre-existing standards from the IUPAC and IUBMB for the description of nucleotides and amino acids are now used throughout the recommendations. These include letter codes to describe incompletely specified residues at both DNA and protein level ([see _Standards_](/bg-material/standards#aacode)). Description of the translation termination (stop) codon at the protein/amino acid level <font color="#FF0000">changed from "X" to "Ter" / "*"</font> since "X" in the _IUPAC-IUB_ nomenclature means an "_unspecified_" or "_unknown_" amino acid.
*   _**Incorporate ISCN standards**_
	:	recommendations were made to describe changes with uncertain break points (i.e. not sequenced), obtained using technologies like FISH, arrays and MLPA. Furthermore, where possible, HGVS incorporated established ISCN standards in the recommendations, include the use of "**/**" (forward slash) to describe somatic variants and "**//**" for chimerism ([_see General recommendations_](/recommendations/general)). 
*   _**Simplification**_
	:	in HGVS version 1.0 some symbols were used for more then one purpose leading to undesired confusion. These inconsistencies were removed.
*   _**Prediction / experimental proof**_
	:	to clarify a variant described at the protein level is a prediction, without experimental evidence, the recommendation was added to describe the predicted consequence in parentheses, like p.(Arg12Gly). 
*   _**Repeated sequences**_
	:	recommendations were made to describe variability in repeated sequences (mono-, di-, tri- residue stretches, etc. [_see Repeated sequences_](/recommendations/DNA/variant/repeated)).