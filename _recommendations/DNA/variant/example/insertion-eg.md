---
parent: DNA
title: insertion
category: example
---

*	NC\_000023.10:g.32867861\_32867862insT  (NM\_004006.2:c.169\_170insA)
	:	the insertion of an T nucleotide between nucleotides g.32867861 and g.32867861 
*	NC\_000023.10:g.32862923\_32862924insCCT (LRG\_199t1:c.240\_241insAGG)
	:	the insertion of nucleotides CCT between nucleotides g.32862923 and g.32862924
*	NC\_000023.10:g.32867907\_32867908insL37425.1:23\_361
	: 	the insertion of nucleotides 23 to 361 as described in GenBank file L37425.1 between nucleotides g.32867907 and g.32867908
*	complex insertions
	*	NM\_004006.2:c.419\_420ins[T;401\_419]
	:	the insertion of T followed by a copy of the sequence from c.401 to c.419 (a duplication not directly flanking the original sequence)
	*	LRG\_199t1:c.419\_420ins[T;450\_470;AGGG]
	:	the insertion of T followed by a copy of the sequence from c.450 to c.470, followed by AGGG
*	insertion of inverted duplicated copies
	*	NM\_004006.2:c.849\_850ins850\_900inv
	:	a copy of nucleotides c.850 to c.900 is inserted, in inverted orientation, 5' of the original sequence, between nucleotide c.849 and c.850
	*	NM\_004006.2:c.900\_901ins850\_900inv
	:	a copy of nucleotides c.850 to c.900 is inserted, in inverted orientation, 3' of the original sequence, between nucleotide c.900 and c.901
	*	LRG_199t1:c.940\_941ins[885\_940inv;884G>A;851\_883inv]
	:	an inverted copy of nucleotides c.851 to c.940, with a G>A substitution of nucleotide c.884, is inserted directly 3' of the original sequence
	*	NM\_004006.2:c.940\_941ins[903\_940inv;851\_885inv]
	:	an inverted copy of nucleotides c.851 to c.940, with a deletion from nucleotides c.886 to c.902, is inserted directly 3' of the original sequence
*	incomplete descriptions, preferably use exact descriptions only
	*	NM\_004006.2:c.(222\_226)insG (p.Asn75fs)
	:	the insertion of a G at an unknown position in the sequence encoding amino acid 75
	*	NC\_000023.10:g.32717298_32717299insN  (NM\_004006.2:c.761\_762insN) 
	:	the insertion of one not specified nucleotide (N) between position g.32717298 and g.32717299
	*	NM\_004006.2:c.761\_762insNNNNN (alternatively NM\_004006.1:c.761\_762ins(5))
	:	the insertion of 5 not specified nucleotides (NNNNN) between position c.761 and c.762
	*	NC\_000023.10:g.32717298_32717299ins(100)
	:	the insertion of 100 not specified nucleotides between position g.32717298 and g.32717299
*	g.?\_?insNC\_000023.10:(12345\_23456)\_(34567\_45678)
	:	the insertion of a sequence from the X-chromosome (NC\_000023.10), maximally involving nucleotides 12345\_45678 but certainly nucleotides 23456\_34567, at an unknown position (g.?\_?) in the genome ([_see Uncertain_](/recommendations/uncertain))
