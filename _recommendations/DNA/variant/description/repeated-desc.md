---
parent: DNA
title: repeated sequences
category: description
---

Format (repeat short):   **"prefix""range_repeat""repeat_unit""[""copy_number""]"**,  e.g. g.123\_170CAG[16]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**"range_repeat"**  =  range repeated segment  =  123\_170<br>
*	**"repeat_unit"**  =  sequence repeat unit  =  CAG<br>
*	**[**  =  opening symbol for allele  =  [<br>
*	**"copy_number"**  =  number of repeat units  =  16<br>
*	**]**  =  closing symbol for allele  =  ]

Format (repeat long):   **"prefix""range_first_repeat_unit""[""copy_number""]"**,  e.g. g.123\_277[36]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**"range_first_repeat_unit"**  =  position first repeat unit  =  123_\277<br>
*	**[**  =  opening symbol for allele  =  [<br>
*	**"copy_number"**  =  number of repeat units  =  36<br>
*	**]**  =  closing symbol for allele  =  ]

---

### Note

*	reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA)
	*	_**NOTE:**_ **in the protein coding region** repeat descriptions are used only for repeat units with a length that is a multiple of 3, i.e. do not disrupt the reading frame. Consequently, NM\_024312.4:c.2686_2693A[10] is not used but NM\_024312.4:c.2692_2693dup and NM\_024312.4:c.1738_1741TA[6] is not used but NM\_024312.4:c.1741\_1742insTATATATA.
*	while NM\_002111.6:c.54\_110GCA[23] describes a repeated sequence containing 23 GCA units, NM\_002111.6:c.54\_110[23] describes a tri-nucleotide repeated sequence of 23 units which **could be interrupted** with other repeat units (e.g. ACA). The description c.54\_110GCA[23] can thus only be used when the repeated segment **was sequenced**.
*	for **composite repeats** the short format is used, successively listing each different repeat unit and its copy number; NC\_000012.11:g.112036755\_112036823CTG[9]TTG[1]CTG[13].
