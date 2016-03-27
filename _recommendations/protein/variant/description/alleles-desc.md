---
parent: Protein
title: alleles
category: description
---

Format (one allele):   **"prefix"["variant1";"variant2"]**,  e.g. p.[Ser73Arg;Asn103del]

*	**"prefix"**  =  reference sequence used  =  p.<br>
*	**[**  =  opening symbol for allele  =  ]<br>
*	**"variant1"**  =  description first variant  =  Ser73Arg<br>
*	**;**  =  separator symbol two changes  =  ;<br>
*	**"variant2"**  =  description second variant  =  Asn103del<br>
*	**]**  =  closing symbol for allele  =  ]
 
Format (two alleles):   **"prefix"["variant"];["variant"]**,  e.g. p.[Ser73Arg];[Asn103del]

*	**"prefix"**  =  reference sequence used  =  p.<br>
*	**[**  =  opening symbol for allele-1  =  ]<br>
*	**"variant"**  =  description variant  =  Ser73Arg<br>
*	**];[**  =  closing symbol for allele-1, separator symbol two alleles, opening symbol for allele-2  =  ];[<br>
*	**"variant"**  =  description variant  =  Asn103del<br>
*	**]**  =  closing symbol for allele-2  =  ]
 
---

### Note

*	when two variants are identified in a protein that derive from **one chromosome** (in cis) this should be described as "p.[variant1;variant2]".
*	when two variants are identified in proteins that derive from **different chromosomes** (in trans) this should be described as "p.[variant1];[variant2]".
*	when two variants are identified in a protein, but when it is **not known** whether these derive from one chromosome (in cis) or from different chromosomes (in trans), this should be described as "[variant<font color="red">(;)</font>variant2]".  Of course it is recommended to determine whether the changes are in the same protein allele or not. Still, when this has not yet been done, it is important to make this **clear** in the description.
*	parentheses enclosing **predicted** protein variants are listed **around each** variant and **inside** the square brackets of the allele; p.[<font color="red">(</font>variant1<font color="red">)</font>;<font color="red">(</font>variant2<font color="red">)</font>]
*	when two variants are identified in two different proteins that derive from **one variant** at the DNA level (giving two different transcripts) this should be described as "p.[variant1<font color="red">,</font>variant2]".
