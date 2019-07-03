---
layout: default-md
title: SVD-WG008
category: SVD-WG
---

## Community Consultation

### Proposal SVD-WG008 (RefSeq)

*	Status: <font color="red">open</font>
	:	proposal SVD-WG008 opens for **Community Consultation** on July 15 (2019), will close September 30 (2019). 

The proposal suggests to specify the HGVS recommendations for acceptable Reference Sequences.

### Backgound

A sequence variant is defined in the context of a **reference sequence** which must be referred to by means of a unique **sequence identifier**. Because a reference sequence defines the [numbering system](http://varnomen.hgvs.org/bg-material/numbering/){:target="\_blank"} and default state of a sequence (e.g. coding transcript, non-coding transcript), accurately interpreting a sequence variant requires that both the reference sequence and its reference sequence identifier are unchangeable.

### Proposal

*	reference sequences **must** come from data sources that provide stable and permanent identifiers, e.g. RefSeq (NCBI) and Ensembl (EBI). A source that permits updating of sequence records associated with an existing sequence identifier **must not** be used, i.e. a change in the reference sequence **must** trigger a change in the sequence identifier.
	*	Rationale: violating this requirement means that interpretation of a variant might change over time
*	reference sequences **must** use conventional representation, i.e. the sequence comprises a string of IUPAC residues that represents a nucleic acid or amino acid sequence using the conventional order (5'-to-3' for nucleic acid sequences, and amino-to-carboxyl for amino acid sequences), and may include [IUPAC symbols](http://http://varnomen.hgvs.org/bg-material/standards/){:target="\_blank"} for any base (N) or any amino acid (X)
*	reference sequence **must** be contiguous. Undefined sequence is not permissible.
	*	this requirement applies within a **single** sequence. Alignments **between** sequences may contain gaps. For example, a coding sequence will contain intron gaps when aligned to a genomic sequence
	*	coding transcripts **must** have a complete CDS
