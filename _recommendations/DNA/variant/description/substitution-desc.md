---
parent: DNA
title: substitution
category: description
---

Format:   **"prefix""position_substituted""reference_nucleotide"">"new_nucleotide"**,  e.g. g.123A>G

**"prefix"**  =  reference sequence used  =  g.<br>
**"position_substituted"**  =  position nucleotide sustituted  =  123<br>
**"reference_nucleotide"**  =  nucleotide at reference position =  A<br>
**">"**  =  type of change is a substitution =  ><br>
**"new_nucleotide"**  =  substituted nucleotide  =  G

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	changes involving two or more consecutive nucleotides are described as deletion/insertions (indels) ([_see Deletion/insertion (delins)_](/recommendations/DNA/variant/delins/)).
* two variants separated by one or more nucleotides should be described individually and not as a “delins” of the sequence affected
 * exception: two variants separated by one nucleotide, together affecting one amino acid, should also be described as a “delins” 
 : _**NOTE:**_ this prevents tools predicting the consequences of a variant to make conflicting and incorrect predictions of two different substitutions at one position
*	nucleotides that have been tested and found **not changed** are described as c.123=, g.4567_4569= ([_see SVD-WG001 (no change)_](/bg-material/consultation/svd-wg001/)).
*	it is not correct to describe "_polymorphisms_" as c.76A/G ([_see Discussions_](/recommendations/DNA/variant/substitution/#polymorphism)).
