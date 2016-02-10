---
layout: recommendation
parent: DNA
title: substitution
definition:
    Substitution: a sequence change where, compared to a reference sequence, **one** nucleotide is replaced by **one** other nucleotide.
discussion:
    How can I shorten the descriptions of SNPs in a maunscript?: Publications reporting linkage or association studies often use a range of different markers/SNPs. Such publications should contain at least once an **unequivocal description of all markers** used linking them to a reference sequence, preferably a genomic reference sequence. When this has been done, simplified descritpions can be used like;<ul><li><b>NM_004006.1:c.3>T</b>, using a GenBank coding DNA reference sequence,</li><li><b>GJB2:c.76A>C</b>, using a HGNC-approved gene symbol as reference,</li><li><b>rs2306220:A>G</b>, using a <a href="http://www.ncbi.nlm.nih.gov/SNP">dbSNP-identifier</a> as a reference,</li> <li><b>DXS1219:g.CA[18];[21]</b> (or AFM297yd1:g.CA[18];[21]), using a marker DXS1219 (AFM297yd1) as reference.</li></ul>
    How should I describe a variant in the promoter region of a gene?: It is recommended to describe variants in the promoter region of a gene based on a genomic reference sequence, e.g. g.33357783G>A (chrX, hg19). Describing the variant in relation to a coding DNA reference sequence (for this variant NM_004006.1:c.-128354C>T or NM_000109.3:c.-401C>T) is possible but not really very informative; you do not know how long the 5'UTR is. The variant can also be described using a genomic reference sequence containing the promoter region (for this variant e.g. L01538.1:g.1407C>T), but again this is not really informative. Although g.33357783G>A seems complex, it can be used in a genome browsers helping you to quickly zoom in on the region of interest.
    Are ploymorphisms described like c.76A/G?: No, all substitutions are described as c.76A>G. In the past, the format c.76A/G and p.36Lys/Ile (p.36L/I) has been used to describe "polymorphic" sequence variants. Note that a description should be neutral, simply describe the change, and not include any other information like predicted or known functional consequences.
    Can I describe a GC to TG variant as a dinucleotide substitution (g.4GC>TG)?: No this is not allowed. By definition a substitution changes **1 nucleotide** into **1** other nucleotide. The change TGTGCCA to TGT**TG**CA should be described as a deletion/insertion (indel) as g.4_5delinsTG..
---

