---
layout: default-md
title: SVD-WG007
category: SVD-WG
---

## Community Consultation

### Proposal SVD-WG007 (RNA fusion)

*	Status: <font color="red">open</font>
	:	proposal SVD-WG007 opened for **Community Consultation** on March 20 (2019), will closed May.31 (2019). 

The proposal suggests to extend the HGVS recommendations with a format to decribe RNA fusion transcripts

*	RNA fusion transcripts are described following the format to describe a fusion between two DNA molecules (translocations), i.e. using **"::"**.

* * *

#### Examples

*	NC\_012920.1:m.16563\_13del
	:	compared to the mitochondrial reference sequence (NC\_012920.1, a circular DNA molecule) the region from nucleotides m.16563 to m.13 is deleted
	:	_**NOTE:**_	for mitochondrial reference sequences the "m." prefix will be used
*	J01749.1:o.4344_197dup
	:	compared to the circular genomic reference sequence of plasmid pBR322 (J01749.1) the region from nucleotides o.4344 to o.197 is duplicated

* * *

### Note

For deletions the current recommendations state: the “position(s)\_deleted” **should be listed from 5’ to 3’**, e.g. 123_126 not 126_123. As a consequence a deletion involving the start/end of a mitochondrial reference sequence can not be described as NC\_012920.1:m.16563\_13del. Adding the exception simplifies the description of rearrangements involving both the last and first nucleotides of circular DNA molecules.
The suggestion to use the **"o." prefix** should help to discriminate circular from non-circular genomic reference sequences. While less relevant for human genetics, circular DNA sequences are common in nature (e.g. viruses, bacterial genomes, plasmids, chloroplast). Allowing the "o." prefix simplifies recognition of circular reference sequences, simplifies the description of deletions/duplications involving both the last and first nucleotides and promotes the wider implementation of HGVS nomenclature. The "o." prefix will also help computational tools to check correct variant descriptions. 
