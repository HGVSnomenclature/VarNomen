---
parent: DNA
title: substitution
category: description
---

Format:   **"prefix""position_substituted""reference_nucleotide"">"new_nucleotide"**,  e.g. g.123A>G

**"prefix"**  =  reference sequence used  =  g.<br>
**"position_substituted"**  =  position nucleotide sustituted  =  123<br>
**"reference_nulceotide"**  =  nucleotide at reference position =  A<br>
**">"**  =  type of change is a substitution =  ><br>
**"new_nucleotide"**  =  substituted nucleotide  =  G

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	changes involving two or more consecutive nucleotides are described as deletion/insertions (indels) ([_see Deletion/insertion (indel)_](http://localhost:4000/recommendations/DNA/variant/indel/)).
*	the description c.76_77delinsTT is preferred over c.[76A>T; 77G>T]  
	*	_**NOTE:**_ by definition this change can not be described as a substitution (like c.76_77AG>TT or c.76AG>TT)
*	it is not correct to describe a "_polymorphisms_" as c.76A/G ([_see Discussions_](/recommendations/DNA/variant/substitution/#polymorphism)).