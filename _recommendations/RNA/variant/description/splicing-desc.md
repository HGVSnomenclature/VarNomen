---
parent: RNA
title: splicing
category: description
---

Variants affecting RNA splicing result in either a [_deletion_](/recommendations/RNA/variant/deletion/) or [_insertion_](/recommendations/RNA/variant/insertion/) on the RNA level and should be described as such. Recommendations on representing chimeric transcripts formed by gene fusions are discussed in the Note below.

---

### Note

*	all variants **should be** described at the DNA level, descriptions at the RNA and/or protein level may be given in addition
* a "," (comma) is used to separate different transcripts/proteins derived from one allele; r.[123a>u,122_154del]
* HGVS recommends following the [HGNC guidelines](https://www.genenames.org/about/guidelines/){:target="\_blank"} and the [VICC Gene Fusion Specification](https://fusions.cancervariants.org/en/latest){:target="\_blank"} nomenclature to describe products of gene fusions
    *   The HGNC recommendations include using a GENESYMBOL1::GENESYMBOL2 syntax for gene-level fusion descriptions, and GENESYMBOL1-GENESYMBOL2 syntax for read-through transcripts
    *   The VICC nomenclature extends the HGNC recommendations to include a terminology, information model, and nomenclature for gene-level and exon-level representation, with components for disambiguating regulatory fusions from chimeric transcript fusions
    *   HGVS also recommends the use of adjoined transcript segments (see examples) for precise and unambiguous characterization of chimeric transcripts at the sequence level