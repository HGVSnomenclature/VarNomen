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
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
	*	**exception**
	:	deletions around exon/exon junctions when identical nucleotides flank the junction ([_see Numbering_](/bg-material/numbering/#DNAc));  
		:	when RNA analysis reveals variant LRG\_199t1:r.358del but a genomic DNA analysis variant LRG\_199:g.521316del (LRG\_199t1:c.357+1del) and not LRG\_199:g.527970del (LRG\_199t1:c.358del), then based on a coding DNA reference sequence the variant is described as LRG\_199t1:c.357+1del and not LRG\_199t1:c.358del (sequence around the exon/intron intron/exon borders ..CAG gta..//..tag GTC..)
