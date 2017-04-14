---
layout: recommendation
parent: DNA
title: deletion-insertion
definition: 
    Deletion-Insertion (delins): a sequence change where, compared to a reference sequence, one or more nucleotides are replaced by one or more other nucleotides <b>and which is not</b> a substitution, inversion or conversion.
discussion:
    What is an <b>"indel"</b>?: An "indel", <b>deletion/insertion</b> in HGVS nomenclature, is a variant which is a combination of a deletion and an insertion. Based on existing nomeclature, the variant can be described as a deletion and insertion occuring at the same position, using the format g.112_117delinsTG.
    Can I describe a GC to TG variant as a dinucleotide substitution (g.4GC>TG)?: No this is not allowed. By definition a substitution changes <b>one</b> nucleotide into <b>one</b> other nucleotide (<a href='http://www.HGVS.org/varnomen/recommendations/DNA/variant/substitution/'><i>see Substitution</i></a>). The change TGT<font color="red">GC</font>CA to TGT<font color="red">TG</font>CA should be described as g.4_5delinsTG, i.e. a deletion/insertion (indel).
    Are there specific recommendations regarding the maximum number of unchanged nucleotides between two single nucleotide variants and whether the change is described as a "delins" or as two separate changes?: Yes, two variants separated by one or more nucleotides should preferably be described individually and not as a "delins" (unless they together affect one amino acid). The two variants might also occur separately. Furthermore, sequence analysis pipelines will probably describe such variants individually, giving the problem that an overlap with the description of the combined variant ("delins" description) might be missed.
    The BRCA1 coding DNA reference sequence from position c.2074 to c.2080 is ..CATGACA.. A variant frequently found in the population is ..CAT<font color="red">A</font>ACA.. (c.2077G>A). In a patient I found the sequence ..CAT<font color="red">A TA</font>ACA.. Can I describe this variant as c.[2077G>A;2077_2078insTA]?: The shortest description of this variant is c.2077delinsATA. However, since the variant is likely a combination of two other variants it is better to describe it as c.[2077G>A;2077_2078insTA].
---
