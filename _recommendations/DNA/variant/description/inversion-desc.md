---
parent: DNA
title: inversion
category: description
---

Format:   **"prefix""positions_inverted""inv"**,  e.g. g.123_345inv

**"prefix"**  =  reference sequence used  =  g.<br>
**"positions_inverted"**  =  range of nucleotides inverted  =  123_345<br>
**"inv"**  =  type of change is an inversion  =  inv

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA)
*	by definition, the region inverted ("positions\_inverted") contains **more then one nucleotide**. The description g.234inv is therefore not allowed; a one nucleotide inversion should be described as a [_substitution_](/recommendations/DNA/variant/substitution/)
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	the 3'rule applies to ALL descriptions (genome, gene, transcript and protein) of a given variant
*	**inverted duplications** are described as an insertion using the format g.234\_235ins123\_234inv, not as g.123\_456dupinv ([_see Q&A_](#dupinv))
*	under discussion, [_see Proposal for complex variants_](http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc)
	:	{ } (curly braces) can be used to list any change in the inverted sequence ("positions\_inverted") which is different when compared to the source, e.g. g.123\_345inv**{233A>G}**
*	inversions are not used on Protein level
