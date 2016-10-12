---
parent: DNA
title: alleles
category: description
---

Format (one allele):   **"prefix"["change1";"change2"]**,  e.g. g.[123G>A;345del]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**[**  =  opening symbol for allele  =  [<br>
*	**"change1"**  =  description first variant  =  123G>A<br>
*	**;**  =  separator symbol two changes  =  ;<br>
*	**"change2"**  =  description second variant  =  345del<br>
*	**]**  =  closing symbol for allele  =  ]
 
Format (two alleles):   **"prefix"["change"];["change"]**,  e.g. g.[123G>A];[345del]

*	**"prefix"**  =  reference sequence used  =  g.<br>
*	**[**  =  opening symbol for allele-1  =  [<br>
*	**"change"**  =  description variant  =  123G>A<br>
*	**];[**  =  closing symbol for allele-1, separator symbol two alleles, opening symbol for allele-2  =  ];[<br>
*	**"change"**  =  description variant  =  345del<br>
*	**]**  =  closing symbol for allele-2  =  ]
 
---

### Note

*	humans are diploid organisms and have **two alleles** at each genetic locus, with one allele inherited from each parent
*	when two variants are identified in a gene that are on **one chromosome** (in cis) this should be described as "g.[variant1**<font color="red">;</font>**variant2]".
*	when two variants are identified in a gene that are **on different chromosomes** (in trans) this should be described as "g.[variant1]**<font color="red">;</font>**[variant2]".
*	when two variants are identified in a gene, but when it is **not known** whether these are on one chromosome (in cis) or on different chromosomes (in trans), this should be described as "**variant1<font color="red">(;)</font>variant**", i.e. without using "[ ]".  _**NOTE:**_ it is recommended to determine whether the changes are on the same chromosome or not.
*	descriptions combining variants based on different reference sequence types (e.g. **<font color="red">c.</font>**[76A>C];**<font color="red">g.</font>**[10091C>G]) should not be used.
