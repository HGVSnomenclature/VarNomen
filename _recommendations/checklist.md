---
layout: default-md
title: Checklist
order: 5
---

# {{ page.title }}

* * *

## Purpose

Going through publications one can easily see where people tend to offend the _**"[Current recommendations for the description of sequence variants](/recommendations)"**_. The checklist below covers the most problematic issues and should assist those preparing a publication to describe sequence variants following the current recommendations.

* * *

## Checklist

1.  **Reference Sequence** - do you clearly mention the reference sequence used for numbering (nucleotides/amino acids)?  
    A publication should mention, preferably in the Materials & Methods section and/or Table legend, which sequence file was used as reference sequence for numbering of the residues (DNA, RNA and protein) and describing the variants; see [_Recommendations_](/recommendations), [_Discussion_](refseq.html) and [_mtDNA variants_](refseq.html#mtDNA).
    *   do you mention a _GenBank (not Gen**<u>e</u>**Bank) RefSeq-file accession number **with version number**_?; do not forget the underscore in the accession number (correct is NM<span style="font-weight: bold; font-style: italic;">_</span>004006**.2**, not NM004006.2).
    *   a genomic reference sequence starts with nucleotide 1; a genomic reference sequence can not have negative numbers
    *   for a coding DNA reference sequence, do you clearly state that _nucleotide numbering uses the A of the ATG translation initiation start site as nucleotide 1_?
    *   when you <span style="font-weight: bold; font-style: italic;">do not</span> use a coding DNA reference sequence and <span style="font-style: italic; font-weight: bold;">do not</span> start nucleotide numbering **_with 1 at the A of the ATG_** translation initiation start you should not use descriptions preceded by "_**c.**_".
    *   if legacy numbering is used, this can only be done _**in addition to**_ the approved nomenclature.
    *   does your reference sequence contain introns?;  not that _**NM_**_ reference sequences cover mature transcripts and do not contain intronic sequences.
2.  **Intronic variants** - do you indicate where the _reference intron sequence_ can be found ?  
    The recommendation is to describe _**intronic variants**_ in the format "_**c.89-2A>G**_" and not like "_IVS4-2A>G_" (see [_Discussion_](disc.html#IVS)). When the format "_IVS4-2A>G_" is used, it is essential to give a clear reference for _**intron / exon numbering**_ and to mention the _reference sequence used for the intron_.
3.  **Tabular overview** - do you provide a clear, unequivocal overview of all changes reported?  
    Preferably, a publication contains a _tabular overview_ of all variants reported. This overview contains columns describing the change at _DNA-level (absolutely essential)_ and, optional, at _RNA_ and _protein level_. When data on RNA and/or protein level are provided, it should be made clear whether the data were **_deduced or experimentally verified_** (i.e. state explicitly when RNA was analysed, e.g. to study the consequences of a variant affecting splicing).
4.  **Insertions**
    *   are insertions reported in the format c.51_52insT?  
        Since it is not clear whether one means **_insertion at_ **or** _insertion after_** position 52, insertions should not be reported as c.52insT but in the format c.51_52insT (see [_Discussion_](disc.html#ins)).
    *   do you give the inserted sequence?  
        Describing a variant like c.5439_430ins6 is _**not sufficient**_, the inserted sequence (ins6, e.g. TGCCAT)_ **should always be mentioned**_.
    *   are the insertions reported really insertions or are they in fact duplications?  
        Duplicating insertions should be described as duplications, not as insertions; for the change CCAGTAAC to CCAGT<span style="font-weight: bold; font-style: italic;">GT</span>AAC the description is c.4_5dup (or c.4_5dupGT) is correct, c.5_6insGT is not correct (see [_Discussion_](disc.html#dupins)). 
5.  **Most 3' position** - do you correctly assign the change to the most 3' (or C-terminal for protein variants) position possible?  
    For deletions, duplications and insertions the _**most 3' position possible is arbitrarily assigned**_ to have been changed (see [_Recommendations_](recs.html#repeat)); important especially in single residue (nucleotide or amino acid) stretches or tandem repeats. Example CCAGT<span style="font-weight: bold; font-style: italic;">GT</span>AAC to CCAGTAAC is described as c.6_7del (or c.6_7delGT, not as c.3_4del or c.4_5del.
6.  **Recessive diseases** - do you clearly describe which changes are found in which combination?  
    a publication describing sequence changes found in patients suffering from a recessive disease should for each patient explicitly mention which _**combination of changes**_ was identified (see [_Recommendations_](recs.html#2in)). Example c.[76C>T];[87G>A] or c.[76C>T];[?].  
    <span lang="EN-GB">**_NOTE:_** this description differs from that describing **_several changes in one allele,_** which has the format c.[76A>C;113G>C].</span>
7.  **Range** - the sign used to indicate a range is "_" (underscore) and not a "-" (minus)?  
    To prevent confusion, the <span style="font-style: italic;">underscore</span> should be used to indicate a <span style="font-style: italic;">range</span> and not the minus sign. The <span style="font-style: italic;">minus sign</span> should only be used to indicate <span style="font-style: italic;">negative numbers</span>. The correct description to indicate a deletion of the coding DNA nucleotides 12 to 14 is c.12_14del. Not correct is c.12-14del, this describes a deletion of nucleotide -14 in the intron directly preceding cDNA nucleotide 12 (see [_Discussion_](disc.html#range)).
8.  **Deletion** - do you indicate the first and last residue involved in a deletion?  
    A deletion of more than one residue should mention the first and last residue deleted, separated using a "_" (underscore), e.g. c.21_24del or p.Ala13_Gln16del. Descriptions like c.21del3 should not be used.
9.  **Describe at DNA-level** - do you describe all changes reported at DNA-level?  
    All changes reported must be described at DNA-level
    *   when descriptions at protein level are given in the text, upon first appearance, use a format like "**_c.78G>C (p.(Trp26Cys), RNA not analysed)_**" or "**_c.78G>C (p.Trp26Cys, RNA analysed)_**"
    *   description of "_silent variants_" in the format "p.(Leu54Leu) (or _**p.(L54L))" should not be used**_ (_[see Discussion](disc.html#silent)_). Descriptions should be given at DNA level. Descriptions like p.(Leu54Leu) are non-informative and not unequivocal (there are five possibilities at DNA level); a correct description is **_c.162C>G _**
10.  **RNA protein level descriptions**  
    Recommendations exist to describe alternative transcripts deriving from one allele (see _[Recommendations](recs.html#RNA)_). Since these descriptions may be rather complex to explain, it is wise to include a link to the HGVS recommendations in the publication.
11.  **Protein level descriptions**
    *   _**protein reference sequence**_ - the protein reference sequence should represent theprimary translation product, not a processed mature protein, and thus include any signal peptide sequences (see [_Recommendations_](recs.html#protein)).
    *   ![](new.gif)_**Ter  / ***_ - do you use Ter or * to indicate a translation stop codon; the X is not allowed anymore (see [_Important changes_](versioning.html#important))
    *   **_one/three letter amino acid code_** - are the correct amino acid codes used at protein level?;  several amino acids start with the same initial letter (Ala, Arg, Asn, Asp start with _**<u>A</u>**_, Gln, Glu, Gly with _**<u>G</u>**_, Leu, Lys with **_<u>L</u>_**, Phe, Pro with <u>**_P_**</u> and Thr, Tyr with _**<u>T</u>**_) but that initial letter is used as one-letter-amino-acid-code for only one of these (see _[Discussion](disc.html#1or3)_ and _[Codons and amino acids](codon.html#aalist)_)
    *   **_initiating methionine (Met1)_** - _p.Met1?_ denotes that amino acid Methionine-1 (translation initiation site) is changed and that it is unclear what the consequence of this change is. When experimental data show that no protein is made, the description _p.0_ should be used. The description p.Met1Val is not allowed (see [_Discussion_](disc.html#Met))
    *   **_no-stop change_** - recommendations have recently been made to describe substitutions in the stop codon, so called _**no-stop changes** _like p.*110Tyrext*16 (see [_Recommendations_](recs-prot.html#extp))
12.  **Polymorphisms**  
    Do not describe polymorphic variants as c.127A/G (or p.43I/V). A description of a variant should be _**neutral**_ and polymorphisms and pathogenic changes should not be described differently (see [_Discussion_](disc.html#polymorphism)). Correct descriptions are c.127A>G and p.(Ile43Val).