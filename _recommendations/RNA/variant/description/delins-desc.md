---
parent: RNA
title: deletion-insertion
category: description
---

Format:   **"prefix""position(s)\_deleted""delins""inserted_sequence"**,  e.g. r.123\_127delinsag

**"prefix"**  =  reference sequence used  =  r.<br>
**"position(s)\_deleted"**  =  position nucleotide or range of nucleotides deleted  =  123\_127<br>
**"delins"**  =  type of change is a deletion-insertion  =  delins<br>
**"inserted\_sequence"**  =  description inserted sequence  =  ag<br>

---

### Note

*	all variants **should be** described at the DNA level, descriptions at the RNA and/or protein level may be given in addition.
*	**prefix** reference sequences accepted are r. (coding and non-coding RNA).
*	by definition, when **one** nucleotide is replaced by **one** other nucleotide the change is a [_substitution_](/recommendations/RNA/variant/substitution/).
*	two variants separated by one or more nucleotides should preferably be described individually and **not** as a "delins"
	*	exception: two variants separated by one nucleotide, together affecting one amino acid, should be described as a "delins" (e.g. r.142\_144delinsugg p.(Arg48Trp)).
	:	**_NOTE:_**	this prevents tools predicting the consequences of a variant to make conflicting and incorrect predictions of two different substitutions at one position
	*	**conversions**, a sequence change where a range of nucleotides are replaced by a sequence from elsewhere in the genome, are described as a “delins”. The previous format “con” is no longer used (see [_Community Consultation SVD-WG009)_](/bg-material/consultation/svd-wg009/)).
*	Chimeric transcripts from gene fusions represent a special case of deletion-insertion variant. The fusion junction is described using **"::"**.
	:	**_NOTE:_**	to avoid confusion, HGVS recommends following the [HGNC guidelines](https://www.genenames.org/about/guidelines/){:target="\_blank"} and the [VICC Gene Fusion Specification](https://fusions.cancervariants.org/en/latest){:target="\_blank"} nomenclature to describe products of gene fusions
    *   The HGNC recommendations include using a GENESYMBOL1::GENESYMBOL2 syntax for gene-level fusion descriptions, and GENESYMBOL1-GENESYMBOL2 syntax for read-through transcripts
    *   The VICC nomenclature extends the HGNC recommendations to include a terminology, information model, and nomenclature for gene-level and exon-level representation, with components for disambiguating regulatory fusions from chimeric transcript fusions
    *   HGVS also recommends the use of [adjoined transcript segments](/recommendations/RNA/variant/splicing/) for precise and unambiguous characterization of chimeric transcripts at the sequence level
*	for all descriptions the **most 3' position** possible of the reference sequence is arbitrarily assigned to have been changed (**3'rule**)
