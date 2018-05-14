---
parent: Protein
title: substitution
category: example
---

*	**missense**
	* 	LRG_199p1:p.Trp24Cys
	: 	amino acid Trp24 is changed to a Cys
	* 	NP_003997.1:p.(Trp24Cys)
	: 	amino acid Trp24is predicted to change to a Cys (no experimental proof, e.g. based on DNA level data)
*	**nonsense**
	*	LRG_199p1:p.Trp24Ter (p.Trp24\*)
    	:	amino acid Trp24 is changed to a stop codon (Ter, \*)<br>
        _**NOTE:**_ this change is **not** described as a deletion of the C-terminal end of the protein (i.e. p.Trp24\_Met36853del)
*	**silent**  (no change)
	* 	NP_003997.1:p.Cys188=
	:	amino acid Cys188 is not changed (DNA level change ..TGC.. to ..TGT..)
	:	_**NOTE:**_ the description p.= means the **entire** protein coding region was analysed and no variant was found that changes (or is predicted to change) the protein sequence.
* 	translation initiation codon  
	:	description depends on the consequences of the change on the translation product (protein);
	*	LRG_199p1:p.0
	:	as a consequence of a variant no protein is produced
	*	LRG_199p1:p.? (p.Met1?)
    	:	the consequence of a variant at the protein level are not known (can not be predicted)
*	**new translation initiation site**
	*	**<u>upstream</u>**  -  [_see Extension_](/recommendations/protein/variant/extension)
	*	**<u>downstream</u>**  -  NP_003997.1:p.Leu2\_Met124del 
		:	a variant causes the inactivation of the normal and activation of a downstream translation initiation site (Met) resulting in deletion of the first 123 amino acids (Met-1 to Val-123) of the protein.<br>
        	_**NOTE:**_ the 3' rule applies.
*	translation termination codon _(stop codon, **no-stop change**)_
	:	[_see Extension_](/recommendations/protein/variant/extension)
*	uncertain
	*	NP_003997.1:p.(Gly56Ala^Ser^Cys)
	:	amino acid Gly56 is changed to an Ala, Ser or Cys ([_see Uncertain_](/recommendations/uncertain/))
*	mosaic
	*	LRG_199p1:p.Trp24=/Cys
	:	a mosaic case where at amino acid position 24 besides the normal amino acid (a Trp, described as “=”) also protein is found containing a Cys (Trp24Cys)
	:	_**NOTE:**_	for the predicted consequences of a variant the description is LRG_199t1:p.(Trp24=/Cys)
