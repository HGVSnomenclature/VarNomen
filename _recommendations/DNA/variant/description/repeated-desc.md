---
parent: DNA
title: repeated sequences
category: description
---

Format (repeat position):   **"prefix""position_repeat_unit""[""copy_number""]"**,  e.g. g.123_125[36]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**"position_repeat_unit"**  =  position (range) first repeat unit  =  123_125<br>
*	**[**  =  opening symbol for allele  =  ]<br>
*	**"copy_number"**  =  number of repeat units  =  36<br>
*	**]**  =  closing symbol for allele  =  ]

Format (sequence):   **"prefix""position_repeat_start""repeat_sequence""[""copy_number""]"**,  e.g. g.123GGC[36]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**"position_repeat_start"**  =  position first nucleotide repeat unit  =  123<br>
*	**"repeat_sequence"**  =  nucleotide sequence repeat unit  =  GGC<br>
*	**[**  =  opening symbol for allele  =  ]<br>
*	**"copy_number"**  =  number of repeat units  =  36<br>
*	**]**  =  closing symbol for allele  =  ]

---

### Note

*	reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	repeated sequences include both small (mono-, di-, tri-, etc., nucleotide) and larger (kilobase-sized) repeats. 
*	the format based on **repeat position** is preferred, descriptions of the repeat sequence quickly become too lengthy.
	*	_**NOTE**_: while g.123CAG[23] describes a repeat of 23 CAG units, g.123_125[23] describes a tri-nucleotide repeat of 23 units which **could be interrupted** with other units (e.g. a rare CAA). The description g.123CAG[23] can thus only be used when the repeat was sequenced.
*	the format g.123_124TG[4], should not be used; it contains redundant information ("123_124" and "TG"). 
*	for **composite repeats** the basic format can be used, successively listing each different repeat unit; g.456_465[4]466_489[9]490_499[3].
