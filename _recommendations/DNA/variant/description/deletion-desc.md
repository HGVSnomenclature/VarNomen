---
parent: DNA
title: deletion
category: description
---

Format:  **"prefix""position(s)_deleted""del"**,  e.g. g.123\_127del

**"prefix"**  =  reference sequence used  =  g.<br>
**"position(s)\_deleted"**  =  position nucleotide or range of nucleotides deleted  =  123\_127<br>
**"del"**  =  type of change is a deletion =  del

---

### Note

*	**prefix** reference sequences accepted are g., m., c. and n. (genomic, mitochondrial, coding DNA and non-coding DNA).
*	"positions\_deleted" should contain **two different positions**, e.g. 123\_126 not 123\_123.
*	the "position(s)\_deleted" should be listed from **5' to 3'**, e.g. 123\_126 not 126\_123.
	*	**exception**
	:	when a circular genomic reference sequnce is used ("o." and "m." prefix) nucleotide positions may be listed from 3’ to 5’ when the deletion includes both the last and first nucleotides of the reference sequence
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	**exception**
	:	deletions around exon/exon junctions when identical nucleotides flank the junction ([_see Numbering_](/bg-material/numbering/#DNAc));  
		:	when ..GAT gta..//..cag TCA.. changes to ..GA\_ gta..//..cag TCA.., based on a coding DNA reference sequence the variant is described as LRG\_199t1:c.3921del (NC\_000023.10:g.32459297del) and **not as** c.3922del (which would translate to g.32456507del)
