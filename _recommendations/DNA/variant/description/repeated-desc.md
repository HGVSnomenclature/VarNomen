---
parent: DNA
title: repeated sequences
category: description
---

Format (repeat position):   **"prefix""position_repeat_unit""[""copy_number""]"**,  e.g. g.123_125[36]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**"position_repeat_unit"**  =  position (range) first repeat copy  =  123\_125<br>
*	**[**  =  opening symbol for allele  =  [<br>
*	**"copy_number"**  =  number of repeat units  =  36<br>
*	**]**  =  closing symbol for allele  =  ]

Format (sequence):   **"prefix""position_repeat_start""repeat_sequence""[""copy_number""]"**,  e.g. g.123GGC[36]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**"position_repeat_start"**  =  position first nucleotide repeat unit  =  123<br>
*	**"repeat_sequence"**  =  nucleotide sequence repeat copy  =  GGC<br>
*	**[**  =  opening symbol for allele  =  [<br>
*	**"copy_number"**  =  number of repeat units  =  36<br>
*	**]**  =  closing symbol for allele  =  ]

---

### Note

*	reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	repeated sequences include both small (mono-, di-, tri-, etc., nucleotide) and large (kilobase-sized) repeats. 
*	the format based on **repeat position** is preferred, descriptions including the repeat sequence quickly become too lengthy.
	*	_**NOTE:**_ for clarity, **in** the protein coding region do not use descriptions like NM\_024312.4:c.2686[9] and NM\_024312.4:c.1738TA[6] but NM\_024312.4:c.2693dupA and NM\_024312.4:c.1741\_1742insTATATATA in stead.
*	the format g.123\_124TG[4], should not be used; it contains redundant information ("123\_124" and "TG").
*	while g.123CAG[23] describes a repeated sequence containing 23 CAG units, g.123\_125[23] describes a tri-nucleotide repeated sequence of 23 units which **could be interrupted** with other units (e.g. a rare CAA). The description g.123CAG[23] can thus only be used when the repeat **was sequenced**.
*	for **composite repeats** the basic format can be used, successively listing each different repeat unit; g.456\_467[4]468\_494[9]495\_503[3].
