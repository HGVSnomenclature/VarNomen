---
layout: default-md
title: Open Issues
order: 6
---

# {{page.title}}

* * *

##Exon Numbering

The HGVS nomenclature do not give specific recommendations for the **numbering of exons**. For variant descriptions exon numbers are not required, **nucleotide position are sufficient**. In addition

*	The CBS gene was originally thought to contain 16 exons. Later it was recognised that exon 15 does not exist, and recently two additional non-translated 5' exons were detected. The current gene structure therefore includes 17 exons, of which exons 3 to 17 are translated. Should the exons of a gene be counted from the exon that contains the start codon rather than the beginning of the cDNA?  If so, should exons preceding the start codon be counted 0, -1, -2, etc. or should the 0 be skipped?  Is there an agreement on how to deal with changes in exon numbering?
	:	For the description of sequence changes it does not matter how exons are numbered,  exon (and intron) numbers are not used in the descriptions, only nucleotide positions. For exon numbering the only logical thing to do is to start with 1 for the first exon and number all following exons successively. Using other numbering schemes problems will emerge at some point. Note that when alternative numbering schemes are used, these will only be recognised by experts in the field knowing their history; newcomers just blindly assume that the first exon annotated in the genome is exon 1. Consequently, when legacy numbering schemes are used, this will cause confusion and at some point wrong assumptions will be made and a patient might end up with an erroneous diagnosis. In papers, when used, specifically mention how exons were numbered (M&M, Figure and Table legends). For tables, consider to add a column listing the historic / old exon numbers.